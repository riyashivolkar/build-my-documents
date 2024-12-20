import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { formData, serviceUrls } from "../utils/data/menuData"; // Import servicePrices
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../../firebase/firebaseConfig";
import Loading from "./Loading";
import { v4 as uuidv4 } from "uuid"; // Import UUID generator

const Form = () => {
  const [isLoading, setIsLoading] = useState(false); // Add loading state
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
  const [progress, setProgress] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, "");
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

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormState((prevState) => ({
      ...prevState,
      documents: [...prevState.documents, ...files],
    }));

    setProgress(Array(files.length).fill(0));
  };

  useEffect(() => {
    if (service) {
      setFormState((prevState) => ({
        ...prevState,
        service: service,
      }));
    }
  }, [service]);

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formState.name.trim()) {
      formErrors.name = "Name is required";
    } else if (formState.name.length <= 4) {
      formErrors.name = "Name must be more than 4 characters";
    }

    if (!formState.email) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(formState.email)) {
      formErrors.email = "Invalid email format";
    }

    if (!formState.phone) {
      formErrors.phone = "Phone number is required";
    } else if (formState.phone.length !== 10) {
      formErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      try {
        const uploadedFilesURLs = await uploadFiles(formState.documents);
        const orderId = uuidv4();

        // Store form data in Firestore
        await addDoc(collection(db, "formSubmissions"), {
          orderId,
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          service: formState.service,
          documents: uploadedFilesURLs,
          taskStatus: "New",
          createdAt: new Date(),
        });

        // Send payment data to the webhook

        // Redirect to the appropriate service URL
        const paymentUrl = `${
          serviceUrls[formState.service]
        }?orderId=${orderId}`;
        window.location.href = paymentUrl;
      } catch (error) {
        console.error("Error submitting form: ", error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 ">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col px-8 pt-6 pb-8 mx-auto my-2 mb-4 bg-white rounded shadow-md">
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
                  : service === "law"
                  ? "Legal Aid Services"
                  : service === "gst"
                  ? "GST Registration"
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
              <p className="py-2 text-xs text-orange-500 sm:text-base">
                Note: Upload whatever documents you have right now. Please
                prepare the rest for later.
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
                  <p className="mt-1 text-xs italic text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="px-3 mb-6 md:w-1/2 md:mb-0">
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
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-xs italic text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-6 -mx-3 md:flex">
              <div className="px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
                  htmlFor="phone"
                >
                  Phone Number (+91) <span className="text-red-500">*</span>{" "}
                </label>
                <input
                  className={`appearance-none block w-full bg-grey-lighter text-grey-darker border ${
                    errors.phone ? "border-red-500" : "border-grey-lighter"
                  } rounded py-3 px-4`}
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter 10 digit phone number"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && (
                  <p className="mt-1 text-xs italic text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
                  htmlFor="documents"
                >
                  Upload Documents <span className="text-red-500">*</span>
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
            <div className="mb-6 -mx-3">
              <div className="px-3">
                <button
                  className="px-4 py-2 font-bold text-white bg-orange-500 rounded shadow hover:bg-orange-600"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
