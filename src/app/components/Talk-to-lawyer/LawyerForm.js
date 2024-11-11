import React, { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseConfig";
import { useRouter } from "next/navigation";

const LawyerForm = ({
  onClose = () => {}, // Provide a default empty function
  subcategory,
  onOpenModal,
  selectedCategory,
}) => {
  const router = useRouter();
  const [selectedSlot, setSelectedSlot] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    city: "",
    languages: "", // Holds the selected language
    category: selectedCategory || "Select Category",
  });

  const handleTimeSelected = (slot) => {
    setSelectedSlot(slot); // Set selected time slot
  };

  // Array of language options
  const languageOptions = ["English", "Hindi", "Marathi", "Konkani"];

  const handleCategoryClick = () => {
    onOpenModal();
  };

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

    console.log("Submitting form, navigating to /talk-to-a-lawyer/booking...");

    const lawyerRef = collection(db, "talktolawyer");

    try {
      // Add document to Firestore
      const docRef = await addDoc(lawyerRef, {
        ...formData,
        subcategory: subcategory?.name || "Others",
        createdAt: new Date(),
      });
      console.log("Form data saved successfully");

      onClose(); // Close the form modal or dialog

      // Get the newly generated document ID
      const docId = docRef.id;
      // console.log("Document ID:", docId); // Debugging line

      // Redirect to the booking page with the form data and docId in query parameters
      const queryParams = new URLSearchParams({
        ...formData,
        docId: docId, // Add docId to the query parameters
      }).toString();

      router.push(`/talk-to-a-lawyer/booking?${queryParams}`);
    } catch (error) {
      console.error("Error saving form data: ", error);
    }
  };
  // const { docId } = router.query;
  // console.log("Document ID from query:", docId);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // console.log("Document ID:", docId); // Debugging line

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
            Talk to a Lawyer
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

            {/* Dropdown for languages */}
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

            <div className="relative text-sm sm:text-base">
              <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white">
                Select category
              </p>
              <input
                type="text"
                id="category"
                name="category"
                value={
                  subcategory?.name || formData.category || "Select Category"
                }
                onClick={handleCategoryClick}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg md:p-4 lg:p-5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Select a category"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-4 text-lg font-semibold text-white transition bg-orange-500 rounded-lg md:text-xl lg:text-2xl hover:bg-orange-600"
            >
              Book an appointment
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default LawyerForm;
