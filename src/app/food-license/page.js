"use client";
import React, { Suspense, useState } from "react";
import ExpertModal from "../components/Talk-to-lawyer/ExpertModal";
import Image from "next/image";

import { legalExperts } from "../utils/data/talk2LawyerData";
import FssaiBenifits from "../components/fssai/FssaiBenifits";
import Steps from "../components/Steps";
import Association from "../components/digital/Association";
import FssaiFAQ from "../components/fssai/FssaiFAQ";
import FssaiForm from "../components/fssai/FssaiForm";
import FssaiInfo from "../components/fssai/FssaiInfo";

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
    <section className="overflow-x-hidden text-gray-600 body-font">
      <div className="flex flex-wrap items-start px-5 py-16 mx-auto sm:py-24 sm:px-24">
        <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-6xl title-font">
            Our Expert consultation will help you to get the food licence
          </h1>
          <ul className="mt-12 space-y-4 text-base leading-relaxed sm:text-2xl">
            <li className="flex items-start">
              <Image
                src="/correct.svg"
                alt="Check mark"
                width={40}
                height={40}
                className="w-8 h-8 mr-2 sm:w-10 sm:h-10"
              />
              <span className="text-red-500 ">
                FSSAI News Update: Food Businesses Can Now Be Fined Rs. 5 Lakh &
                6 Months Jail for Not Having Food License.
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
                FoSCos registration or license is required for all entities
                involved in the manufacture, distribution and transportation of
                food products. ✔Support all states ✔3 Types of License: Local,
                State & Central ✔Application in Same (Priority) ✔10yrs
                Experienced FoSCos Expert ✔Lowest Fees than Other Portals
              </span>
            </li>
            <img
              src="https://fssaihelp.in/wp-content/uploads/2024/04/F-9.jpg"
              alt=" FSSAI Food License Registration Apply "
            />
          </ul>
        </div>
        <div className="flex flex-col w-full p-1 mt-10 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          {/* FormLawyer with selected subcategory passed */}
          <FssaiForm />
        </div>
      </div>
      <FssaiBenifits />
      <Steps />
      <div className="px-5 py-10 mx-auto text-center bg-black sm:px-8 md:px-16 lg:px-24">
        <h2 className="inline-block mx-auto my-8 text-2xl font-bold text-white border-b-4 border-green-500 sm:my-16 sm:text-4xl">
          Documents Required for FoSCos Food License
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-3">
            <img
              src="/fssai/correct_green.svg"
              alt="check"
              className="w-5 h-5 mr-3 sm:w-8 sm:h-8"
            />
            <h3 className="text-lg font-semibold text-white sm:text-xl md:text-2xl lg:text-3xl">
              Any Identity Proof document like Aadhaar Card, Ration Card, Voter
              ID Card, PAN Card, Driving License.
            </h3>
          </div>
        </div>
      </div>

      <FssaiFAQ />
      <FssaiInfo />
      <Association />

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
  );
};

export default Page;
