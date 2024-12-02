"use client";
import React, { useState, useEffect } from "react";
import ExpertModal from "./ExpertModal";
import { legalExperts } from "@/app/utils/data/talk2LawyerData";

const ScrollGallery = () => {
  const [expertsPerPage, setExpertsPerPage] = useState(2); // default value for small and medium screens
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedExpertId, setSelectedExpertId] = useState(null);

  // Adjust expertsPerPage based on screen width
  useEffect(() => {
    const updateExpertsPerPage = () => {
      if (window.innerWidth >= 1024) {
        // lg screen (1024px or more)
        setExpertsPerPage(4);
      } else {
        // sm and md screens
        setExpertsPerPage(2);
      }
    };

    updateExpertsPerPage(); // initial check
    window.addEventListener("resize", updateExpertsPerPage); // listen for window resize

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateExpertsPerPage);
  }, []);

  const startIndex = currentPage * expertsPerPage;
  const endIndex = startIndex + expertsPerPage;
  const displayedExperts = legalExperts.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < legalExperts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openModal = (expertId) => {
    console.log("Opening modal for expert:", expertId);
    setSelectedExpertId(expertId);
  };

  const closeModal = () => {
    setSelectedExpertId(null);
  };

  useEffect(() => {
    document.body.classList.toggle("modal-open", !!selectedExpertId);
    return () => document.body.classList.remove("modal-open");
  }, [selectedExpertId]);

  return (
    <section className="mt-8 text-gray-700 shadow-md rounded-2xl body-font bg-gradient-to-r from-orange-100 via-white to-green-100">
      <div className="container px-3 py-4 mx-auto sm:py-8 sm:px-5">
        <div className="flex flex-col w-full mb-6 text-center">
          <h1 className="text-lg font-extrabold text-orange-700 sm:text-3xl title-font">
            Our Legal Expert Services
          </h1>
        </div>
        <div className="flex items-center justify-center w-full space-x-4">
          <button
            className="flex items-center justify-center w-12 h-12 transition-all bg-orange-200 rounded-full shadow md:w-16 md:h-16 hover:bg-orange-300 hover:shadow-lg"
            onClick={handlePrevious}
          >
            <img
              alt="left"
              className="w-6 h-6 sm:w-8 sm:h-8"
              src={"ScrollGallerypics/left.svg"}
            />
          </button>
          <div className="grid grid-cols-2 gap-4 mx-2 md:grid-cols-4">
            {displayedExperts.map((expert, index) => (
              <div
                key={index}
                className="p-4 transition-all transform bg-white border-2 border-orange-400 shadow-2xl hover:scale-105 hover:shadow-lg rounded-xl"
                onClick={() => openModal(expert.id)}
              >
                <div className="flex flex-col items-center">
                  <img
                    alt={expert.name}
                    className="object-cover w-20 h-20 mb-4 md:w-24 md:h-24"
                    src={expert.image}
                  />
                  <h2 className="text-xs font-semibold text-gray-800 sm:text-base">
                    {expert.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <button
            className="flex items-center justify-center w-12 h-12 transition-all bg-green-200 rounded-full shadow md:w-16 md:h-16 hover:bg-green-300 hover:shadow-lg"
            onClick={handleNext}
          >
            <img
              alt="right"
              className="w-6 h-6 sm:w-8 sm:h-8"
              src={"ScrollGallerypics/right.svg"}
            />
          </button>
        </div>
      </div>
      {selectedExpertId && (
        <ExpertModal
          experts={legalExperts}
          selectedExpertId={selectedExpertId}
          onClose={closeModal}
        />
      )}
    </section>
  );
};
export default ScrollGallery;
