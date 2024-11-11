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

// Expert Card Component (Dropdown Item)
const ExpertCard = ({ expert, onSelect, isSelected }) => (
  <div
    onClick={() => onSelect(expert)}
    className={`flex flex-row justify-between hover:bg-white p-2 py-2 transition-all duration-300 transform cursor-pointer  ${
      isSelected ? "bg-white shadow-lg" : "bg-transparent"
    } hover:scale-105 hover:shadow-xl`}
  >
    <div className="flex items-center space-x-4">
      <img
        src={expert.image}
        alt={expert.name}
        className="w-10 h-10 border-orange-200 rounded-full sm:w-20 sm:h-20"
      />
      <h3 className="text-base font-semibold text-gray-900 sm:text-xl">
        {expert.name}
      </h3>
    </div>
    <div className="flex items-center">
      <img
        src="ScrollGallerypics/right.svg"
        alt="rightArrow"
        className="hidden w-8 h-8 transition-opacity duration-200 sm:block hover:opacity-80"
      />
      <img
        src="/downArrow.svg"
        alt="downArrow"
        className="block w-8 h-8 transition-opacity duration-200 hover:opacity-80 sm:hidden"
      />
    </div>
  </div>
);

// Expert Details Component (Directly Shows Subcategories)
const ExpertDetails = ({ expert, onSubCategoryClick }) => (
  <div className="p-2 mt-2 bg-white rounded-xl ">
    {expert.subCategories.length > 0 && (
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

  // Pass selected subcategory name to LawyerForm
  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    if (mode === "LawyerForm") {
      onSelectCategory(subCategory); // Pass entire subCategory object
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
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden bg-gray-800 bg-opacity-70">
      {/* Render ExpertModal or PopupForm based on showForm state */}
      {!showForm ? (
        <div className="relative sm:w-2/4 w-full p-8 md:p-10 lg:p-12 bg-white rounded-xl shadow-2xl overflow-y-auto max-h-[80vh]">
          <ModalHeader onClose={onClose} />

          <h2 className="mb-8 text-xl font-semibold tracking-wide text-center text-gray-900 sm:text-3xl">
            Select Your Category
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
            <div className="col-span-1 space-y-6 h-[60vh] rounded-xl bg-orange-50 overflow-y-auto">
              {experts.map((expert) => (
                <div key={expert.id}>
                  <ExpertCard
                    expert={expert}
                    onSelect={handleSelectExpert}
                    isSelected={
                      selectedExpert && selectedExpert.id === expert.id
                    }
                  />
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

            <div className="col-span-3 h-[60vh] overflow-y-auto hidden sm:block">
              {selectedExpert ? (
                <ExpertDetails
                  expert={selectedExpert}
                  onSubCategoryClick={handleSubCategoryClick}
                />
              ) : (
                <p className="text-gray-600">
                  Please select an expert to see their details.
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        // PopupForm Modal with selected subcategory
        <PopupForm
          subcategory={selectedSubCategory}
          onClose={handleClosePopupForm}
        />
      )}
    </div>
  );
};

export default ExpertModal;
