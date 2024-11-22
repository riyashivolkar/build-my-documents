import Link from "next/link";
import React from "react";

const Page = () => {
  const selectedService = "food";
  return (
    <section className="p-8 text-gray-500 body-font">
      <div className="container px-5 mx-auto bg-white py-14">
        <div className="flex flex-col w-full p-4 mb-20 text-start">
          <h1 className="pb-10  text-xl sm:text-4xl font-medium text-[#f7941d] title-font">
            Apply FSSAI Food Safety License Registration
          </h1>

          <ul className="mt-8 space-y-6">
            <li className="flex items-start space-x-4">
              <img
                src="/document.svg"
                alt="Description of image 1"
                className="object-cover w-6 h-6 sm:w-12 sm:h-12"
              />
              <div>
                <h2 className="sm:text-2xl text-md font-semibold text-[#f7941d]">
                  Documents Required Food License (Soft Copy)
                </h2>
                <p className="text-gray-500 text-md sm:text-2xl">
                  <br />
                  Aadhaar card
                  <br />
                  Pan Card
                  <br />
                  One Passport size photo
                  <br />
                  Fssai declaration form <br />
                  Nature of business details
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
                  Time Duration
                </h2>
                <p className="text-gray-500 text-md sm:text-2xl">
                  <br />
                  1-2 working days
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
                <h2 className="sm:text-2xl text-md font-semibold text-[#f7941d]">
                  Charges
                </h2>
                <p className="text-gray-500 text-md sm:text-2xl">
                  <br />
                  Rs. 1690
                  <br />
                </p>
              </div>
            </li>
            <br />
            <div className="flex flex-row items-end justify-end p-5 ">
              <Link href={`/form?service=${selectedService}`}>
                <button className="bg-[#f7941d] px-4 py-2 sm:text-2xl text-sm shadow-lg text-white rounded-md">
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
