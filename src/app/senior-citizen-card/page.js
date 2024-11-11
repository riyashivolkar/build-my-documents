"use client";
import Link from "next/link";
import React from "react";
import Form from "../components/Form";
import LeadsForm from "../components/LeadsForm/LeadsForm";
import SeniorForm from "./components/SeniorForm";

const Page = () => {
  const selectedService = "senior";
  return (
    <section className="flex-col justify-between p-8 text-gray-500 body-font">
      <div className="flex sm:flex-row">
        <div className="px-5 bg-white sm:px-24 py-14">
          <div className="flex flex-col w-full p-4 mb-20 text-start">
            <h1 className="pb-10 sm:text-4xl  text-xl  font-medium text-[#f7941d] title-font">
              Expert Help for Fast and Easy Senior Citizen Card Services – Apply
              Today!
            </h1>
            <h1 className="font-semibold text-black text-md sm:text-2xl">
              Note
            </h1>
            <br />
            <p className="text-md sm:text-2xl">
              Eligibility: The applicant must be at least 60 years of age.
              <br />
            </p>
            <br />
            <ul className="mt-8 space-y-6">
              <li className="flex items-start space-x-4">
                <img
                  src="/document.svg"
                  alt="Description of image 1"
                  className="object-cover w-6 h-6 sm:w-12 sm:h-12"
                />
                <div>
                  <h2 className="sm:text-2xl text-md font-semibold text-[#f7941d]">
                    Documents Required For Senior Citizen Card{" "}
                  </h2>
                  <p className="text-gray-500 text-md sm:text-2xl">
                    <br />
                    Aadhaar card
                    <br />
                    Blood Report
                    <br />
                    Two Passport size photo
                  </p>
                </div>
              </li>
              <br />
              <li className="flex items-start space-x-4">
                <img
                  src="/clock.svg"
                  alt="Description of image 1"
                  className="object-cover w-6 h-6 sm:w-12 sm:h-12"
                />
                <div>
                  <h2 className="sm:text-2xl text-md font-semibold text-[#f7941d]">
                    How it works{" "}
                  </h2>
                  <p className="text-gray-500 text-md sm:text-2xl">
                    <br />
                    Register Online
                    <br />
                    Upload Documents
                    <br />
                    Payment
                    <br />
                    Online Ekyc (Moble number should be inked with aadhar card)
                    <br />
                    <br />
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <img
                  src="/clock.svg"
                  alt="Description of image 1"
                  className="object-cover w-6 h-6 sm:w-12 sm:h-12"
                />
                <div>
                  <h2 className="sm:text-2xl text-md font-semibold text-[#f7941d]">
                    Time Duration
                  </h2>
                  <p className="text-gray-500 text-md sm:text-2xl">
                    <br />
                    25-30 working days
                    <br />
                  </p>
                </div>
              </li>
              <br /> <br />
              <li className="flex items-start space-x-4">
                <img
                  src="/money.svg"
                  alt="Description of image 1"
                  className="object-cover w-6 h-6 sm:w-12 sm:h-12"
                />
                <div>
                  <h2 className="sm:text-2xl text-md font-semibold text-[#f7941d]">
                    Charges
                  </h2>
                  <p className="text-gray-500 text-md sm:text-2xl">
                    <br />
                    <strong>Rs. 440</strong>
                    <br />
                    If you decide to cancel your order after payment, please
                    note that a cancellation fee of <strong>Rs. 50</strong> will
                    apply.
                  </p>
                </div>
              </li>
              <br />
              <div className="flex flex-row items-end justify-start p-5 ">
                <Link href={`/form?service=${selectedService}`}>
                  <button className="bg-[#f7941d] px-4 py-2 sm:text-2xl text-sm shadow-lg text-white rounded-md">
                    CONTINUE
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
        {/* <div className="w-full sm:w-1/2 ">
          <SeniorForm />
        </div> */}
      </div>
    </section>
  );
};

export default Page;
