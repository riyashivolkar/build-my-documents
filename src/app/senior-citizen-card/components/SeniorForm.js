"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import menuData from "@/app/utils/data/menuData";
import Link from "next/link";

const SeniorForm = ({
  onClose,
  subcategory,
  onOpenModal,
  selectedCategory,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    city: "",
    languages: "",
    category: selectedCategory || "Select Category", // Initialize with selected category
  });
  const [selectedOption, setSelectedOption] = useState("");

  const handleCategoryClick = () => {
    onOpenModal(); // Trigger modal open via the prop
  };
  const selectedService = "senior";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.state ||
      !selectedOption
    ) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form submitted", formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(subcategory?.name || "Others"); // Debug to check if the subcategory is received

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
            Senior Citizen Card{" "}
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="relative pb-3 text-sm sm:text-base">
              <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white">
                Email
              </p>
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
            <div className="relative pb-3 text-sm sm:text-base">
              <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white">
                Phone Number
              </p>
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
            <div className="relative pb-3 text-sm sm:text-base">
              <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white">
                City
              </p>
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
                state
              </p>
              <input
                type="text"
                id="languages"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg md:p-4 lg:p-5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="State"
                required
              />
            </div>

            {/* <div className="relative text-sm sm:text-base">
              <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white">
                Service
              </p>
              <select
                className="block w-full pt-4 pb-4 pl-4 pr-4 mt-2 mb-0 ml-0 mr-0 text-sm placeholder-gray-400 transition duration-200 ease-in-out bg-white border border-gray-300 rounded-md sm:text-base focus:outline-none focus:border-black hover:shadow-md"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="" disabled className="text-sm sm:text-base">
                  Select an option
                </option>
                {menuData.map((item) => (
                  <option
                    key={item.id}
                    value={item.path}
                    className="text-sm sm:text-base"
                  >
                    {item.title}
                  </option>
                ))}
              </select>
            </div> */}
            <Link href={`/form?service=${selectedService}`}>
              <button
                type="submit"
                className="w-full py-3 mt-4 text-lg font-semibold text-white transition bg-orange-500 rounded-lg md:text-xl lg:text-2xl hover:bg-orange-600"
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default SeniorForm;
