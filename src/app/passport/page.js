import Link from "next/link";
import React from "react";

const Page = () => {
  const selectedService = "passport";
  return (
    <section className="p-8 text-gray-600 body-font">
      <div className="container px-5 mx-auto bg-white py-14">
        <div className="flex flex-col w-full p-4 mb-20 text-start">
          <h1 className="pb-10 text-2xl sm:text-4xl font-medium text-[#f7941d] title-font">
            Apply for Passport Registration
          </h1>

          <ul className="mt-8 space-y-6">
            <li className="flex items-start space-x-4">
              <img
                src="/document.svg"
                alt="Documents Required for Fresh Passport"
                className="object-cover w-6 h-6 sm:w-12 sm:h-12"
              />
              <div>
                <h2 className="sm:text-2xl text-xl font-semibold text-[#f7941d]">
                  Documents Required for Fresh Passport
                </h2>
                <p className="text-xl text-gray-600 sm:text-2xl">
                  <br />
                  <strong>Proof of Identity (Any 01):</strong>
                  <br />
                  1. Aadhaar Card
                  <br />
                  2. Voter ID
                  <br />
                  3. PAN Card
                  <br />
                  4. Driving Licence
                  <br />
                  <br></br>
                  <strong>Proof of Address (Any 01):</strong>
                  <br />
                  1. Aadhaar Card
                  <br />
                  2. Voter ID
                  <br />
                  3. Bank Account Passbook
                  <br />
                  4. Gas Connection Bill / Electricity Bill / Telephone Bill /
                  Water Bill
                  <br />
                  5. Parents' or Spouse’s Passport
                  <br />
                  <br />
                  <strong>Proof of Education (Any 01):</strong>
                  <br />
                  1. 10th Certificate
                  <br />
                  2. 12th Certificate
                  <br />
                  3. Higher Educational Pass Certificate
                  <br />
                  4. School Leaving Certificate
                  <br />
                  5. Income Tax Assessment Order
                </p>
              </div>
            </li>
            <br />
            <li className="flex items-start space-x-4">
              <img
                src="/document.svg"
                alt="Documents Required for Passport Renewal/Reissue"
                className="object-cover w-6 h-6 sm:w-12 sm:h-12"
              />
              <div>
                <h2 className="sm:text-2xl text-xl font-semibold text-[#f7941d]">
                  Documents Required for Renewal / Reissue of Passport
                </h2>
                <p className="text-xl text-gray-600 sm:text-2xl">
                  <br />
                  1. Original Old Passport
                  <br />
                  2. ID and Present Address Proof
                </p>
              </div>
            </li>
            <br />
            <li className="flex items-start space-x-4">
              <img
                src="/document.svg"
                alt="Documents Required for Minor Passport"
                className="object-cover w-6 h-6 sm:w-12 sm:h-12"
              />
              <div>
                <h2 className="sm:text-2xl text-xl font-semibold text-[#f7941d]">
                  Documents Required for Minor Passport
                </h2>
                <p className="text-xl text-gray-600 sm:text-2xl">
                  <br />
                  1. Birth Certificate
                  <br />
                  2. Both Parents' Passports
                </p>
              </div>
            </li>
            <br />
            <li className="flex items-start space-x-4">
              <img
                src="/clock.svg"
                alt="How it works"
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
                alt="Time Duration"
                className="object-cover w-6 h-6 sm:w-12 sm:h-12"
              />
              <div>
                <h2 className="sm:text-2xl text-xl font-semibold text-[#f7941d]">
                  Time Duration
                </h2>
                <p className="text-xl text-gray-600 sm:text-2xl">
                  <br />
                  7-14 working days
                </p>
              </div>
            </li>
            <br />
            <li className="flex items-start space-x-4">
              <img
                src="/money.svg"
                alt="Charges"
                className="object-cover w-6 h-6 sm:w-12 sm:h-12"
              />
              <div>
                <h2 className="sm:text-2xl text-xl font-semibold text-[#f7941d]">
                  Charges
                </h2>
                <p className="text-xl text-gray-600 sm:text-2xl">
                  <br />
                  Rs. 2,499 For (Normal Application)
                  <br />
                  Rs. 4,199 For (Tatkal Application)
                </p>
              </div>
            </li>
            <br />
            <div className="flex flex-row items-end justify-end p-5">
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
