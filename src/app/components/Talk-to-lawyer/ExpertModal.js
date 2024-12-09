import React, { useState, useEffect } from "react";
import PopupForm from "./PopupForm"; // Import PopupForm component

// Modal Header Component
const ModalHeader = ({ onClose }) => (
  <button
    className="absolute text-gray-600 bg-transparent top-4 right-4 md:top-6 md:right-6 hover:text-gray-900 focus:outline-none"
    onClick={onClose}
    aria-label="Close"
  >
    <img
      src="/close.svg"
      alt="Close"
      className="w-8 h-8 transition-opacity duration-200 hover:opacity-80"
    />
  </button>
);

// Expert Card Component
const ExpertCard = ({ expert, onSelect, isSelected }) => (
  <div
    onClick={() => onSelect(expert)}
    className={`flex justify-between p-2 cursor-pointer transition-all duration-300 transform ${
      isSelected ? "bg-white shadow-lg scale-105" : "bg-transparent"
    } hover:scale-105 hover:shadow-xl`}
  >
    <div className="flex items-center space-x-4">
      <img
        src={expert.image}
        alt={expert.name}
        className="w-5 h-5 border-orange-200 rounded-full sm:w-10 sm:h-10"
      />
      <h3 className="text-base font-semibold text-gray-900 sm:text-xl">
        {expert.name}
      </h3>
    </div>
    <img
      src={isSelected ? "/downArrow.svg" : "ScrollGallerypics/right.svg"}
      alt="Toggle"
      className="w-8 h-8 transition-opacity duration-200 hover:opacity-80"
    />
  </div>
);

// Expert Details Component
const ExpertDetails = ({ expert, onSubCategoryClick }) => (
  <div className="p-4 mt-4 bg-white rounded-xl">
    {expert.subCategories.length > 0 ? (
      <div className="space-y-2 text-sm text-gray-600">
        {expert.subCategories.map((subCategory) => (
          <div
            key={subCategory.id}
            className="p-2 text-base border-b border-gray-300 cursor-pointer sm:p-5 sm:text-xl hover:text-orange-500"
            onClick={() => onSubCategoryClick(subCategory)}
          >
            {subCategory.name}
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-500">No subcategories available.</p>
    )}
  </div>
);

// Main Expert Modal Component
const ExpertModal = ({
  experts,
  selectedExpertId,
  onClose,
  onSelectCategory,
  mode = "default",
}) => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  useEffect(() => {
    const expert = experts.find((e) => e.id === selectedExpertId);
    setSelectedExpert(expert);
  }, [selectedExpertId, experts]);

  const handleSelectExpert = (expert) => {
    setSelectedExpert(
      selectedExpert && selectedExpert.id === expert.id ? null : expert
    );
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    if (mode === "LawyerForm") {
      onSelectCategory(subCategory); // Pass subcategory data to parent
      onClose();
    } else {
      setShowForm(true);
    }
  };

  const handleClosePopupForm = () => {
    setShowForm(false);
    setSelectedSubCategory(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-gray-800 bg-opacity-70 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
    >
      {!showForm ? (
        <div className="relative w-full max-w-md p-6 bg-white shadow-xl sm:max-w-2xl lg:max-w-4xl rounded-xl sm:p-8">
          <ModalHeader onClose={onClose} />

          <h2 className="mb-8 text-lg font-semibold text-center text-gray-900 sm:text-xl lg:text-3xl">
            Select Your Category
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            {/* Expert List */}
            <div className="col-span-1 overflow-y-auto bg-orange-50 rounded-xl max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh]">
              {experts.map((expert) => (
                <div key={expert.id}>
                  <ExpertCard
                    expert={expert}
                    onSelect={handleSelectExpert}
                    isSelected={
                      selectedExpert && selectedExpert.id === expert.id
                    }
                  />
                  {/* Details for mobile view */}
                  <div className="sm:hidden">
                    {selectedExpert && selectedExpert.id === expert.id && (
                      <ExpertDetails
                        expert={selectedExpert}
                        onSubCategoryClick={handleSubCategoryClick}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Expert Details for larger screens */}
            <div className="hidden sm:block col-span-3 overflow-y-auto max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh] bg-white rounded-xl">
              {selectedExpert ? (
                <ExpertDetails
                  expert={selectedExpert}
                  onSubCategoryClick={handleSubCategoryClick}
                />
              ) : (
                <p className="text-sm text-gray-600 lg:text-base">
                  Select an expert to see details.
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <PopupForm
          subcategory={selectedSubCategory}
          onClose={handleClosePopupForm}
        />
      )}
    </div>
  );
};

export default ExpertModal;
