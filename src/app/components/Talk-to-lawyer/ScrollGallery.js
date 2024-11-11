"use client";
import React, { useState, useEffect } from "react";
import ExpertModal from "./ExpertModal";
import { legalExperts } from "@/app/utils/data/talk2LawyerData";

const ScrollGallery = () => {
  const expertsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedExpertId, setSelectedExpertId] = useState(null);

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
    <section className="mt-8 text-gray-600 shadow-lg rounded-xl body-font bg-gradient-to-l from-orange-50 to-orange-200">
      <div className="container px-1 py-2 mx-auto sm:py-8 sm:px-5">
        <div className="flex flex-col w-full mb-2 text-center">
          <h1 className="mt-4 mb-1 ml-20 text-base font-bold text-gray-700 sm:mb-4 sm:text-2xl text-start title-font">
            Our Legal Expert Services
          </h1>
        </div>
        <div className="flex items-center justify-center w-full space-x-2">
          <button
            className="w-20 h-20 transition-transform transform cursor-pointer sm:w-10 sm:h-10 hover:shadow-lg hover:scale-105 md:w-14 md:h-14"
            onClick={handlePrevious}
          >
            <img
              alt="left"
              className="object-center"
              src={"ScrollGallerypics/left.svg"}
            />
          </button>
          <div className="grid grid-cols-2 gap-2 mx-1 md:grid-cols-4">
            {displayedExperts.map((expert, index) => (
              <div
                key={index}
                className="p-1 sm:p-4"
                onClick={() => openModal(expert.id)}
              >
                <div className="h-full p-2 transition-shadow duration-300 shadow-2xl cursor-pointer sm:p-5 rounded-xl bg-orange-50 hover:shadow-lg">
                  <div className="flex flex-col items-center px-1 text-center sm:py-2 sm:px-2">
                    <img
                      alt={expert.name}
                      className="object-center w-full mb-2 rounded-xl"
                      src={expert.image}
                    />
                    <div className="w-full">
                      <h2
                        className="overflow-hidden text-xs font-bold text-gray-900 sm:text-base sm:text-wrap title-font"
                        style={{}}
                      >
                        {expert.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="w-20 h-20 transition-transform transform cursor-pointer sm:w-10 sm:h-10 hover:shadow-lg hover:scale-105 md:w-14 md:h-14"
            onClick={handleNext}
          >
            <img
              alt="right"
              className="object-center"
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
