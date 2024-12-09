"use client";
import React, { useState } from "react";
import FormLawyer from "../components/Talk-to-lawyer/LawyerForm";
import ExpertModal from "../components/Talk-to-lawyer/ExpertModal";
import ScrollGallery from "../components/Talk-to-lawyer/ScrollGallery";
import Image from "next/image";
import LawyerSteps from "../components/Talk-to-lawyer/LawyerSteps";
import LawyerServices from "../components/Talk-to-lawyer/LawyerServices";
import Reviews from "../components/Talk-to-lawyer/Reviews";
import { legalExperts } from "../utils/data/talk2LawyerData";
import BookingStepsMobile from "../components/Talk-to-lawyer/BookingStepsMobile";

const Page = () => {
  const [showExpertModal, setShowExpertModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null); // Track selected subcategory

  const openExpertModal = () => setShowExpertModal(true);
  const closeExpertModal = () => setShowExpertModal(false);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    closeExpertModal();
  };

  const handleSelectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory); // Set the selected subcategory here
    closeExpertModal();
  };

  return (
    <div
      className="overflow-x-hidden text-gray-600 bg-repeat body-font animate-bg-scrolling-reverse" // Add the background class here
    >
      <div className="flex flex-wrap items-start px-5 py-5 sm:px-24">
        <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 lg:flex-shrink-0">
          <div className="bg-white ">
            <div className="py-2 space-x-2 text-sm font-semibold text-gray-700 title-font">
              <a className="underline" href="/">
                Home
              </a>
              <span>&gt;</span>
              <span className="text-gray-800">Talk to Lawyer</span>
            </div>
            <h1 className="text-lg font-bold text-gray-900 sm:text-2xl title-font">
              Online Lawyer Consultation
            </h1>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed sm:space-y-8 sm:text-base">
              <li className="flex items-start">
                <Image
                  src="/correct.svg"
                  alt="Check mark"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2 sm:w-6 sm:h-6"
                />
                <span className="">
                  Online Lawyer Consultation advice at{" "}
                  <span className="text-gray-500 line-through"> ₹699 </span>{" "}
                  <strong>₹499 </strong>
                </span>
              </li>
              <li className="flex items-start">
                <Image
                  src="/correct.svg"
                  alt="Check mark"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2 sm:w-6 sm:h-6"
                />
                <span className="">
                  Affordable <strong>legal support</strong>
                  for
                  <strong> litigation, drafting,</strong>
                  and <strong>compliance</strong>
                  from experienced lawyers.
                </span>
              </li>
              <li className="flex items-start">
                <Image
                  src="/correct.svg"
                  alt="Check mark"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2 sm:w-6 sm:h-6"
                />
                <span>
                  <strong> Legal support, tailored advice,</strong>
                  and
                  <strong> dispute resolution</strong>
                  for your needs.
                </span>
              </li>
            </ul>
          </div>

          <ScrollGallery />
        </div>

        <div className="flex flex-col w-full p-1 mt-10 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          {/* FormLawyer with selected subcategory passed */}
          <FormLawyer
            onOpenModal={openExpertModal}
            selectedCategory={selectedCategory}
            subcategory={selectedSubcategory}
          />
        </div>
      </div>

      <LawyerSteps />
      <BookingStepsMobile />
      <LawyerServices />
      <Reviews />

      {/* ExpertModal with onSelectSubcategory callback */}
      {showExpertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ExpertModal
            experts={legalExperts}
            onClose={closeExpertModal}
            mode="LawyerForm"
            onSelectCategory={handleSelectSubcategory} // Set subcategory on selection
          />
        </div>
      )}
    </div>
  );
};

export default Page;
