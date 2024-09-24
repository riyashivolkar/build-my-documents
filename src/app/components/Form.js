"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { formData } from "../utils/data/menuData";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../../firebase/firebaseConfig";

const Form = () => {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    documents: [],
    service: "",
  });

  const [errors, setErrors] = useState({});
  const [progress, setProgress] = useState([]); // Progress tracking for file uploads

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict phone input to exactly 10 digits
    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, ""); // Remove non-numeric characters
      if (phoneValue.length <= 10) {
        setFormState((prevState) => ({
          ...prevState,
          [name]: phoneValue,
        }));
      }
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Handle file selection and add to formState
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormState((prevState) => ({
      ...prevState,
      documents: [...prevState.documents, ...files],
    }));

    // Reset the progress tracking
    setProgress(Array(files.length).fill(0));
  };

  // Set service from search params
  useEffect(() => {
    if (service) {
      setFormState((prevState) => ({
        ...prevState,
        service: service,
      }));
    }
  }, [service]);

  // Validation logic
  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate Name
    if (!formState.name.trim()) {
      formErrors.name = "Name is required";
    } else if (formState.name.length <= 4) {
      formErrors.name = "Name must be more than 4 characters";
    }

    // Validate Email
    if (!formState.email) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(formState.email)) {
      formErrors.email = "Invalid email format";
    }

    // Validate Phone - exactly 10 digits
    if (!formState.phone) {
      formErrors.phone = "Phone number is required";
    } else if (formState.phone.length !== 10) {
      formErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Upload files to Firebase and return download URLs
  const uploadFiles = async (files) => {
    const fileUploadPromises = files.map((file, index) => {
      const storageRef = ref(storage, `documents/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progressPercent =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            // Update individual progress
            setProgress((prevProgress) => {
              const updatedProgress = [...prevProgress];
              updatedProgress[index] = progressPercent;
              return updatedProgress;
            });
          },
          (error) => reject(error),
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadURL);
          }
        );
      });
    });

    return Promise.all(fileUploadPromises);
  };

  // Handle form submission
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const uploadedFilesURLs = await uploadFiles(formState.documents);

        // Add form data to Firestore
        const docRef = await addDoc(collection(db, "formSubmissions"), {
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          documents: uploadedFilesURLs,
          service: formState.service,
        });

        console.log(
          "Form data successfully submitted! Document ID:",
          docRef.id
        );

        // Clear the form inputs by resetting formState to initial values
        setFormState({
          name: "",
          email: "",
          phone: "",
          documents: [],
          service: formState.service, // Keep the service as it might be set by the URL params
        });

        // Optionally, clear the file input progress as well
        setProgress([]);
      } catch (error) {
        console.error("Error submitting form: ", error.message);
      }
    }
  };

  return (
    <div className="container flex flex-col px-8 pt-6 pb-8 mx-auto my-2 mb-4 bg-white rounded shadow-md">
      {service && formData[service] && (
        <div className="px-12">
          <h2 className="sm:text-xl text-md py-2 font-semibold text-[#f7941d]">
            Documents Required for{" "}
            {service === "senior"
              ? "Senior Citizen Card"
              : service === "shops"
              ? "Shops and Establishment Act"
              : service === "ration"
              ? "Ration Card"
              : service === "passport"
              ? "Passport"
              : service === "food"
              ? "Food License"
              : `${
                  service.charAt(0).toUpperCase() + service.slice(1)
                } Certificate`}
          </h2>
          <div className="my-2 text-sm text-gray-500 sm:text-xl">
            {formData[service].map((doc, index) => (
              <div key={index} className="my-2 ">
                {index + 1}. {doc}
                <br />
              </div>
            ))}
          </div>
          <p className="py-2 text-xs text-gray-500 sm:text-base">
            Note: Upload whatever documents you have right now. Please prepare
            the rest for later.
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full p-12">
        <div className="mb-6 -mx-3 md:flex">
          <div className="px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
              htmlFor="name"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className={`appearance-none block w-full bg-grey-lighter text-grey-darker border ${
                errors.name ? "border-red-500" : "border-grey-lighter"
              } rounded py-3 px-4`}
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formState.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <p className="text-xs italic text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
              htmlFor="email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className={`appearance-none block w-full bg-grey-lighter text-grey-darker border ${
                errors.email ? "border-red-500" : "border-grey-lighter"
              } rounded py-3 px-4`}
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@example.com"
              value={formState.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <p className="text-xs italic text-red-500">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="mb-6 -mx-3 md:flex">
          <div className="px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
              htmlFor="phone"
            >
              Phone Number (+91) <span className="text-red-500">*</span>
            </label>
            <input
              className={`appearance-none block w-full bg-grey-lighter text-grey-darker border ${
                errors.phone ? "border-red-500" : "border-grey-lighter"
              } rounded py-3 px-4`}
              id="phone"
              name="phone"
              type="text"
              placeholder="Enter 10 digit phone number"
              value={formState.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && (
              <p className="text-xs italic text-red-500">{errors.phone}</p>
            )}
          </div>
          <div className="px-3 pt-4 mb-6 -mx-3 sm:pt-0 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
              htmlFor="documents"
            >
              Upload Documents
            </label>

            <input
              className="block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
              id="documents"
              name="documents"
              type="file"
              multiple
              onChange={handleFileChange}
            />
            {progress.length > 0 && (
              <div>
                {progress.map((prog, index) => (
                  <p key={index}>
                    Upload Progress for file {index + 1}: {prog.toFixed(2)}%
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="px-3">
          <button
            className="px-4 py-2 font-bold text-white bg-orange-500 rounded shadow hover:bg-orange-600"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
