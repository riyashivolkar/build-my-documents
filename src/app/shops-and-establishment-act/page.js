import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="p-8 text-gray-600 body-font">
      <div className="container px-5 mx-auto bg-white py-14">
        <div className="flex flex-col w-full p-4 mb-20 text-start">
          <div className="flex flex-row space-x-4 ">
            <h1 className="pb-10 sm:text-4xl text-2xl  font-medium text-[#f7941d] title-font">
              Apply for Shops and Establishment License Registration
            </h1>
          </div>

          <ul className="mt-8 space-y-6">
            <li className="flex items-start space-x-4">
              <img
                src="/document.svg"
                alt="Description of image 1"
                className="object-cover w-6 h-6 sm:w-12 sm:h-12"
              />
              <div>
                <h2 className="sm:text-2xl text-xl font-semibold text-[#f7941d]">
                  Documents Required for Shops and Establishment License
                </h2>
                <p className="text-xl text-gray-600 sm:text-2xl">
                  <br />
                  <strong>Proof of Identity:</strong>
                  <br />
                  1. Aadhaar card of the applicant (owner)
                  <br />
                  2. PAN card of the business owner or establishment
                  <br />
                  <br></br>
                  <strong>Business Proof:</strong>
                  <br />
                  1. Proof of business premises (rent agreement or ownership
                  document)
                  <br />
                  2. Business address proof (Electricity bill, water bill, etc.)
                  <br />
                  <br />
                  <strong>Additional Documents:</strong>
                  <br />
                  1. Incorporation certificate (for companies)
                  <br />
                  2. List of employees (if applicable)
                  <br />
                  3. Partnership deed (if applicable)
                  <br />
                  4. Details of the business (nature of business)
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
                <h2 className="sm:text-2xl text-xl font-semibold text-[#f7941d]">
                  How it works
                </h2>
                <p className="text-xl text-gray-600 sm:text-2xl">
                  <br />
                  Register Online
                  <br />
                  Upload Documents
                  <br />
                  Payment
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
                <h2 className="sm:text-2xl text-xl font-semibold text-[#f7941d]">
                  Time Duration
                </h2>
                <p className="text-xl text-gray-600 sm:text-2xl">
                  <br />
                  7-10 working days
                </p>
              </div>
            </li>
            <br />
            <li className="flex items-start space-x-4">
              <img
                src="/money.svg"
                alt="Description of image 1"
                className="object-cover w-6 h-6 sm:w-12 sm:h-12"
              />
              <div>
                <h2 className="sm:text-2xl text-xl font-semibold text-[#f7941d]">
                  Charges
                </h2>
                <p className="text-xl text-gray-600 sm:text-2xl">
                  <br />
                  Rs. 890
                </p>
              </div>
            </li>
            <br />
            <div className="flex flex-row items-end justify-end p-5 ">
              <button className="bg-[#f7941d] px-4 py-2 text-2xl shadow-lg text-white rounded-md">
                CONTINUE
              </button>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Page;
