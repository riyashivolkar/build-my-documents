"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import menuData from "../utils/data/menuData";
import DecorativeSvg from "./DecorativeSvg";
import { db } from "../../../firebase/firebaseConfig";

const LeadsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !selectedOption
    ) {
      alert("Please fill in all fields and select a service.");
      return;
    }

    // Save the lead data to Firestore
    try {
      const leadRef = collection(db, "leads"); // Replace 'leads' with your Firestore collection name
      await addDoc(leadRef, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        selectedService: selectedOption,
        createdAt: new Date(), // Timestamp for when the lead was created
      });
      console.log("Lead saved successfully");

      // Redirect to the selected path
      const selectedPath = menuData.find(
        (item) => item.path === selectedOption
      )?.path;
      if (selectedPath) {
        router.push(selectedPath);
      }
    } catch (error) {
      console.error("Error saving lead: ", error);
    }
  };

  return (
    <div>
      <div className="relative mt-[900px] bg-white sm:mt-44 ">
        <div className="flex flex-col items-center justify-between pt-0 pb-0 pl-10 pr-10 mt-0 mb-0 ml-auto mr-auto max-w-7xl xl:px-5 lg:flex-row">
          <div className="flex flex-col items-center w-full pt-5 pb-20 pl-10 pr-10 lg:pt-20 ">
            <div className="relative z-0 w-full max-w-2xl mt-20 mb-0 ml-0 mr-0 lg:mt-0 lg:w-5/12">
              <div className="relative z-10 flex flex-col items-start justify-start pt-10 pb-10 pl-10 pr-10 bg-white shadow-2xl rounded-xl">
                <p className="w-full font-serif text-3xl font-medium leading-snug text-center sm:text-4xl">
                  Sign up for the service
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="relative w-full mt-6 mb-0 ml-0 mr-0 space-y-8"
                >
                  {/* Name input */}
                  <div className="relative text-sm sm:text-base">
                    <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white">
                      Name
                    </p>
                    <input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John"
                      type="text"
                      className="block w-full pt-4 pb-4 pl-4 pr-4 mt-2 mb-0 ml-0 mr-0 text-sm placeholder-gray-400 bg-white border border-gray-300 rounded-md sm:text-base focus:outline-none focus:border-black"
                    />
                  </div>
                  {/* Email input */}
                  <div className="relative text-sm sm:text-base">
                    <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white">
                      Email
                    </p>
                    <input
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="123@ex.com"
                      type="email"
                      className="block w-full pt-4 pb-4 pl-4 pr-4 mt-2 mb-0 ml-0 mr-0 text-sm placeholder-gray-400 bg-white border border-gray-300 rounded-md sm:text-base focus:outline-none focus:border-black"
                    />
                  </div>
                  {/* Phone Number input */}
                  <div className="relative text-sm sm:text-base">
                    <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white">
                      Phone Number
                    </p>
                    <input
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Phone Number"
                      type="tel"
                      className="block pt-4 pb-4 pl-4 pr-4 mt-2 mb-0 ml-0 mr-0 text-sm text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md sm:text-basew-full focus:outline-none focus:border-black"
                      pattern="[0-9]*"
                      required
                    />
                  </div>
                  {/* Service select */}
                  <div className="relative text-sm sm:text-base">
                    <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white">
                      Service
                    </p>
                    <select
                      className="block w-full pt-4 pb-4 pl-4 pr-4 mt-2 mb-0 ml-0 mr-0 text-sm text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md sm:text-base focus:outline-none focus:border-black"
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    >
                      <option
                        value=""
                        disabled
                        className="text-sm sm:text-base"
                      >
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
                  </div>
                  {/* Submit button */}
                  <div className="relative">
                    <button
                      type="submit"
                      className="inline-block w-full pt-4 pb-4 pl-5 pr-5 text-xl font-medium text-center text-white transition duration-200 bg-orange-500 rounded-lg hover:bg-orange-600 ease"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              {/* Use the DecorativeSvg component for the top-left and bottom-right SVGs */}
              <DecorativeSvg
                position="top-0 left-0 -mt-12 -ml-12"
                color="green-500"
              />
              <DecorativeSvg
                position="bottom-0 right-0 -mb-12 -mr-12"
                color="orange-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsForm;
