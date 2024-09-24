import Link from "next/link";
import React from "react";

const Page = () => {
  const selectedService = "death";
  return (
    <section className="p-8 text-gray-600 body-font">
      <div className="container px-5 mx-auto bg-white py-14">
        <div className="flex flex-col w-full p-4 mb-20 text-start">
          <h1 className="pb-10  sm:text-4xl text-2xl  font-medium text-[#f7941d] title-font">
            Apply for Death Certificate Registration
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
                  Documents Required for Death Certificate
                </h2>
                <p className="text-xl text-gray-600 sm:text-2xl">
                  <br />
                  1. Aadhaar card
                  <br />
                  <br />
                  <strong>Address Proof of the Deceased (Any 01):</strong>
                  <br />
                  1. Ration card
                  <br />
                  2. Electricity bill
                  <br />
                  <br />
                  <strong>Proof of Death:</strong>
                  <br />
                  1. Hospital death report
                  <br />
                  2. Medical certificate
                  <br />
                  <br />
                  <strong>Additional Documents:</strong>
                  <br />
                  1. Affidavit specifying the date and time of death (in case of
                  home death)
                  <br />
                  2. Identity proof of the applicant (Aadhaar, Voter ID, etc.)
                  <br />
                  3. Birth certificate of the deceased (optional)
                  <br />
                  4. Cremation/Burial certificate (if available)
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
                  <s className="mx-4 ">Rs. 600</s> Rs. 550
                  <br />
                  {/* Rs. 99 as booking fee. Need to pay while submitting online form. */}
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
