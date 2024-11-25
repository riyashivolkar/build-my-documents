import React, { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseConfig";

const FssaiForm = ({ onClose = () => {}, subcategory }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    states: "",
  });
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const StateOptions = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear the error when input is changed
  };

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter 10 digit number.";
    }
    if (!formData.states) newErrors.states = "Please select a state.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const fssaiRef = collection(db, "fssai");

    try {
      await addDoc(fssaiRef, {
        ...formData,
        createdAt: new Date(),
      });

      onClose();

      // Redirect to the Cashfree Payments URL
      window.location.href =
        "https://payments.cashfree.com/forms/fssai--registration";
    } catch (error) {
      console.error("Error saving form data: ", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center bg-opacity-70"
    >
      <div className="relative w-full max-w-lg p-6 bg-white shadow-2xl shadow-black md:p-10 lg:p-12 rounded-xl md:max-w-2xl lg:max-w-3xl">
        <div className="flex flex-col mb-8 text-center">
          <h2 className="mb-1 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl">
            FSSAI Food License Registration
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Name Field */}
            <div className="relative pb-3 text-sm sm:text-base">
              <label htmlFor="name" className="font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg md:p-4 lg:p-5 focus:outline-none focus:ring-2 focus:ring-orange-500`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative pb-3 text-sm sm:text-base">
              <label htmlFor="email" className="font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg md:p-4 lg:p-5 focus:outline-none focus:ring-2 focus:ring-orange-500`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="relative pb-3 text-sm sm:text-base">
              <label htmlFor="phone" className="font-medium text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg md:p-4 lg:p-5 focus:outline-none focus:ring-2 focus:ring-orange-500`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* State Dropdown */}
            <div className="relative pb-3 text-sm sm:text-base">
              <label htmlFor="states" className="font-medium text-gray-600">
                State
              </label>
              <select
                id="states"
                name="states"
                value={formData.states}
                onChange={handleChange}
                className={`w-full p-5 border ${
                  errors.states ? "border-red-500" : "border-gray-300"
                } rounded-lg md:p-4 lg:p-5 focus:outline-none focus:ring-2 focus:ring-orange-500`}
              >
                <option value="" disabled>
                  Select
                </option>
                {StateOptions.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.states && (
                <p className="text-sm text-red-500">{errors.states}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-4 text-lg font-semibold text-white transition bg-orange-500 rounded-lg md:text-xl lg:text-2xl hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default FssaiForm;
