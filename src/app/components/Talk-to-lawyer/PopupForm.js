"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseConfig";
import { useRouter } from "next/navigation";

const PopupForm = ({ onClose, subcategory }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    city: "",
    languages: "",
  });
  const languageOptions = ["English", "Hindi", "Marathi", "Konkani"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.languages
    ) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "talktolawyer"), {
        ...formData,
        subcategory: subcategory?.name || "Others",
        createdAt: new Date(),
      });
      console.log("Form data saved successfully");

      onClose(); // Close the modal after submission

      // Redirect to the booking page with form data and document ID
      const queryParams = new URLSearchParams({
        ...formData,
        docId: docRef.id,
      }).toString();
      router.push(`/talk-to-a-lawyer/booking?${queryParams}`);
    } catch (error) {
      console.error("Error saving form data: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-70">
      <div className="relative w-full max-w-lg p-6 bg-white shadow-2xl md:p-10 lg:p-12 rounded-xl md:max-w-2xl lg:max-w-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute text-gray-600 bg-transparent top-4 right-4 hover:text-gray-900 focus:outline-none"
          aria-label="Close"
        >
          <img
            src="/close.svg"
            alt="Close"
            className="w-8 h-8 transition-opacity duration-200 hover:opacity-80"
          />
        </button>

        <div className="flex flex-col mb-8 text-center">
          <h2 className="mb-1 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl">
            Talk to a Lawyer
          </h2>
          <h3 className="text-lg text-orange-500 md:text-xl lg:text-2xl">
            {subcategory?.name || "Others"}
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="relative">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-700 md:text-base lg:text-lg"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg md:p-4 lg:p-5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-semibold text-gray-700 md:text-base lg:text-lg"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg md:p-4 lg:p-5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-semibold text-gray-700 md:text-base lg:text-lg"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg md:p-4 lg:p-5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your city"
                required
              />
            </div>

            <div className="relative pb-3 text-sm sm:text-base">
              <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white">
                Language
              </p>
              <select
                id="languages"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                className="w-full p-5 border border-gray-300 rounded-lg md:p-4 lg:p-5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
                <option value="" disabled>
                  Select a language
                </option>
                {languageOptions.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 text-lg font-semibold text-white transition bg-orange-500 rounded-lg md:text-xl lg:text-2xl hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
