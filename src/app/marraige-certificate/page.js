import Link from "next/link";
import React from "react";

const Page = () => {
  const selectedService = "marraige";
  return (
    <section className="p-8 text-gray-600 body-font">
      <div className="container px-5 mx-auto bg-white py-14">
        <div className="flex flex-col w-full p-4 mb-20 text-start">
          <h1 className="pb-10  text-2xl sm:text-4xl font-medium text-[#f7941d] title-font">
            Apply for Marriage Certificate Registration
          </h1>

          <ul className="mt-8 space-y-6">
            <li className="flex items-start space-x-4">
              <img
                src="/document.svg"
                alt="Description of image 1"
                className="object-cover w-6 h-6 sm:w-12 sm:h-12"
              />
              <div>
                <h2 className="sm:text-2xl text-xl font-semibold text-[#f7941d]">
                  Documents Required for Marriage Certificate
                </h2>
                <p className="text-xl text-gray-600 sm:text-2xl">
                  <br />
                  <strong>Aadhaar Card of Both Husband and Wife:</strong>
                  <br />
                  1. Aadhaar cards
                  <br />
                  <br />
                  <strong>Age Proof (Any 01):</strong>
                  <br />
                  1. Birth certificate
                  <br />
                  2. 10th-grade certificate
                  <br />
                  <br />
                  <strong>Address Proof (Any 01):</strong>
                  <br />
                  1. Voter ID
                  <br />
                  2. Passport
                  <br />
                  3. Ration card
                  <br />
                  <br />
                  <strong>Photographs:</strong>
                  <br />
                  1. Passport-sized photographs (both parties, 2 each)
                  <br />
                  2. Joint photograph of the married couple
                  <br />
                  <br />
                  <strong>Additional Documents:</strong>
                  <br />
                  1. Wedding invitation card (optional but helpful)
                  <br />
                  2. Marriage affidavit (signed by both husband and wife)
                  <br />
                  3. Identity proof and address proof of witnesses (minimum 2
                  witnesses)
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
                  How it works{" "}
                </h2>
                <p className="text-xl text-gray-600 sm:text-2xl">
                  <br />
                  Register Online
                  <br />
                  Upload Documents
                  <br />
                  Payment
                  <br />
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
                  <br />
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
                <p className="text-xl text-gray-600 sm:text-2xl ">
                  <br />
                  Rs. 680
                  <br />
                </p>
              </div>
            </li>
            <br />
            <div className="flex flex-row items-end justify-end p-5 ">
              <Link href={`/form?service=${selectedService}`}>
                <button className="bg-[#f7941d] px-4 py-2 sm:text-2xl text-xl shadow-lg text-white rounded-md">
                  CONTINUE
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Page;
