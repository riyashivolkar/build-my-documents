import Image from "next/image";
import React from "react";

const Experts = () => {
  return (
    <section className="text-gray-600 bg-gray-100 body-font">
      <div className="px-5 py-24 mx-auto sm:px-24">
        <div className="flex flex-col items-center w-full mb-20 text-center">
          <h1 className="mb-2 font-serif text-2xl font-medium text-gray-900 sm:text-5xl title-font">
            India's
            <span className="text-orange-500"> Best </span>
            Professional Services Platform
          </h1>
          <p className="w-full text-[11px] sm:text-[17px] md:text-[20px] font-serif leading-relaxed text-gray-500 lg:w-1/2">
            Helping you connect with experts to make your legal, tax, and
            compliance easier.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 cursor-pointer md:w-1/2">
            <div className="relative overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg hover:scale-105 ">
              <Image
                src="/lawyer.jpeg"
                alt="Lawyer"
                width={500}
                height={300}
                className="object-cover w-full mb-4 rounded-lg h-58"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-gradient-to-b from-gray-900 to-transparent">
                <h2 className="text-lg font-bold sm:text-4xl">
                  Talk to Lawyer
                </h2>
                <p className="mt-2 text-xs sm:text-xl">
                  Legal advice, contract drafting, and support.
                </p>
                <a
                  href="/talk-to-a-lawyer"
                  className="inline-block px-2 py-2 mt-4 text-sm font-semibold text-orange-500 transition duration-200 bg-white rounded sm:text-lg sm:py-3 sm:px-6 opacity-80 hover:bg-gray-200"
                >
                  Connect Now
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="relative overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg hover:scale-105 ">
              <Image
                src="/ca.jpeg"
                alt="Chartered Accountant"
                width={500}
                height={300}
                className="object-cover w-full mb-4 rounded-lg h-58"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-gradient-to-b from-gray-900 to-transparent">
                <h2 className="text-lg font-bold sm:text-4xl">
                  Talk to Chartered Accountant
                </h2>
                <p className="mt-2 text-xs sm:text-xl">
                  Financial audits, tax advice, and planning.
                </p>
                <a
                  href="  "
                  className="inline-block px-2 py-2 mt-4 text-sm font-semibold text-orange-500 transition duration-200 bg-white rounded sm:text-lg sm:py-3 sm:px-6 opacity-80 hover:bg-gray-200"
                >
                  Coming Soon!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
