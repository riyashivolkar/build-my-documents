"use client";
import React, { Suspense, useState } from "react";
import FormLawyer from "../components/Talk-to-lawyer/LawyerForm";
import ExpertModal from "../components/Talk-to-lawyer/ExpertModal";
import { legalExperts } from "@/app/utils/data/talk2LawyerData";
import ScrollGallery from "../components/Talk-to-lawyer/ScrollGallery";
import Image from "next/image";
import LawyerSteps from "../components/Talk-to-lawyer/LawyerSteps";
import LawyerServices from "../components/Talk-to-lawyer/LawyerServices";
import Reviews from "../components/Talk-to-lawyer/Reviews";

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
    <Suspense fallback={<div>Loading...</div>}>
      <section className="overflow-x-hidden text-gray-600 body-font">
        <div className="flex flex-wrap items-start px-5 py-24 mx-auto sm:px-24">
          <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
            <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl title-font">
              Online Lawyer Consultation
            </h1>
            <ul className="mt-12 space-y-4 text-2xl leading-relaxed">
              <li className="flex items-start">
                <Image
                  src="/correct.svg"
                  alt="Check mark"
                  width={40}
                  height={40}
                  className="w-8 h-8 mr-2 sm:w-10 sm:h-10"
                />
                <span>
                  Comprehensive, affordable legal support from experienced
                  lawyers for litigation, document drafting, and compliance.
                </span>
              </li>
              <li className="flex items-start">
                <Image
                  src="/correct.svg"
                  alt="Check mark"
                  width={40}
                  height={40}
                  className="w-8 h-8 mr-2 sm:w-10 sm:h-10"
                />
                <span>
                  Tailored advice, dispute resolution, and round-the-clock
                  support for all your legal needs.
                </span>
              </li>
            </ul>
            <ScrollGallery />
          </div>
          <div className="flex flex-col w-full p-1 mt-10 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
            {/* FormLawyer with selected subcategory passed */}
            <FormLawyer
              onOpenModal={openExpertModal}
              selectedCategory={selectedCategory}
              subcategory={selectedSubcategory} // Pass subcategory
            />
          </div>
        </div>
        <div className="w-full py-10 bg-gradient-to-r from-orange-500 via-green-400 to-green-600"></div>
        <LawyerSteps />
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
      </section>
    </Suspense>
  );
};

export default Page;
