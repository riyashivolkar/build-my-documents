import Image from "next/image";
import React from "react";

const LawyerSteps = () => {
  return (
    <div className="py-10 bg-black">
      <div className="w-full px-5 text-center sm:px-16">
        <h2 className="inline-block mx-auto my-8 text-xl font-bold text-white border-b-2 border-green-500 sm:my-16 sm:text-4xl">
          Steps to Get Legal Consultation Online
        </h2>

        <div className="justify-between hidden space-x-4 sm:flex">
          {/* Step 1 - Fill the Form */}
          <div className="flex flex-col items-center justify-center w-1/4 p-4 bg-gray-900 rounded-lg">
            <div className="flex w-1/2 "></div>
            <div className="flex items-center justify-center w-16 h-16 text-4xl font-bold text-white bg-green-500 rounded-full">
              1
            </div>
            <div className="mt-4">
              <Image
                src={"/steps/doc.svg"}
                width={40}
                height={40}
                alt="Fill the Form"
              />
            </div>
            <p className="mt-4 text-center text-white">Fill the Form</p>
          </div>

          {/* Step 2 - Schedule Appointment */}
          <div className="flex flex-col items-center justify-center w-1/4 p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center justify-center w-16 h-16 text-4xl font-bold text-white bg-green-500 rounded-full">
              2
            </div>
            <div className="mt-4">
              <Image
                src={"/steps/calendar.svg"}
                width={40}
                height={40}
                alt="Schedule Appointment"
              />
            </div>
            <p className="mt-4 text-center text-white">Schedule Appointment</p>
          </div>

          {/* Step 3 - Make Payment */}
          <div className="flex flex-col items-center justify-center w-1/4 p-4 bg-gray-700 rounded-lg">
            <div className="flex items-center justify-center w-16 h-16 text-4xl font-bold text-white bg-green-500 rounded-full">
              3
            </div>
            <div className="mt-4">
              <Image
                src={"/steps/payment.svg"}
                width={40}
                height={40}
                alt="Make Payment"
              />
            </div>
            <p className="mt-4 text-center text-white">Make Payment</p>
          </div>

          {/* Step 4 - Lawyer Will Call You */}
          <div className="flex flex-col items-center justify-center w-1/4 p-4 bg-gray-600 rounded-lg">
            <div className="flex items-center justify-center w-16 h-16 text-4xl font-bold text-white bg-green-500 rounded-full">
              4
            </div>
            <div className="mt-4">
              <Image
                src={"/steps/call.svg"}
                width={40}
                height={40}
                alt="Lawyer Will Call You"
              />
            </div>
            <p className="mt-4 text-center text-white">Lawyer Will Call You</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerSteps;
