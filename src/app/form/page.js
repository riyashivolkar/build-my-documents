"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { formData } from "../utils/data/menuData";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../../../firebase/firebaseConfig"; // Adjust import path to match your folder structure
import { getStorage, ref, uploadBytes } from "firebase/storage";

const Page = () => {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  const storage = getStorage();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    documents: [],
    service: "",
  });

  const [errors, setErrors] = useState({});

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

  const uploadFiles = async (file) => {
    const storageRef = ref(storage, `documents/${file.name}`);

    try {
      const snapshot = await uploadBytes(storageRef, file);
      console.log("Uploaded a file!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormState((prevState) => ({
      ...prevState,
      documents: [...prevState.documents, ...files],
    }));
  };

  useEffect(() => {
    if (service) {
      console.log("Service parameter:", service); // Add this log
      setFormState((prevState) => ({
        ...prevState,
        service: service,
      }));
    }
  }, [service]);

  // Validation logic
  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

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

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (validateForm()) {
  //       console.log(formState);
  //       // Handle your form submission logic
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const uploadedFiles = await uploadFiles(formState.documents);

        // Add form data to Firestore
        const docRef = await addDoc(collection(db, "formSubmissions"), {
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          documents: uploadedFiles,
          service: formState.service,
        });
        console.log(
          "Form data successfully submitted! Document ID:",
          docRef.id
        );
      } catch (error) {
        console.error("Error submitting form: ", error.message); // More specific error logging
      }
    }
  };

  return (
    <div className="container flex flex-col px-8 pt-6 pb-8 mx-auto my-2 mb-4 bg-white rounded shadow-md">
      {/* <h1 className="mb-4 text-2xl font-bold">
        Selected Service: {formState.service}
      </h1> */}
      {service && formData[service] && (
        <div className="px-12 ">
          <h2 className="sm:text-xl text-base font-semibold text-[#f7941d]">
            Documents Required for{" "}
            {service.charAt(0).toUpperCase() + service.slice(1)} Certificate
          </h2>
          <p className="text-sm text-gray-600 sm:text-xl ">
            {formData[service].map((doc, index) => (
              <span key={index}>
                {index + 1}. {doc}
                <br />
              </span>
            ))}
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full p-12 ">
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
              value={formData.name}
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
              value={formData.email}
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

          <div className="px-3 md:w-1/2">
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

export default Page;
