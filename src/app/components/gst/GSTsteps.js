import Image from "next/image";
import React from "react";

const GSTsteps = () => {
  return (
    <div className="py-10 ">
      <div className="w-full px-5 text-center sm:px-16 ">
        <h2 className="inline-block mx-auto my-8 text-xl font-bold text-gray-800 sm:my-16 sm:text-2xl">
          <span className="text-orange-500 ">Step-by-Step </span> Guide For GST
          Registration Process
        </h2>

        <div className="justify-between hidden space-x-4 sm:flex">
          {/* Step 1 - Fill the Form */}
          <div className="flex flex-col items-center justify-center w-1/4 p-4 bg-orange-400 rounded-lg">
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
                className="bg-red-700 "
              />
            </div>
            <p className="mt-4 text-center text-white">
              Get in touch with our experts
            </p>
          </div>

          {/* Step 2 - Schedule Appointment */}
          <div className="flex flex-col items-center justify-center w-1/4 p-4 bg-orange-500 rounded-lg">
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
            <p className="mt-4 text-center text-white">
              {" "}
              Provide Business Information
            </p>
          </div>

          {/* Step 3 - Make Payment */}
          <div className="flex flex-col items-center justify-center w-1/4 p-4 bg-orange-600 rounded-lg">
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
            <p className="mt-4 text-center text-white">
              Filing for GST Registration
            </p>
          </div>

          {/* Step 4 - Lawyer Will Call You */}
          <div className="flex flex-col items-center justify-center w-1/4 p-4 bg-orange-700 rounded-lg">
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
            <p className="mt-4 text-center text-white">Get your GSTIN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTsteps;
