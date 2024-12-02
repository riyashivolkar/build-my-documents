import Image from "next/image";
import React from "react";

const LawyerSteps = () => {
  return (
    <div className="flex justify-center px-5 py-2 sm:px-24">
      <div className="flex flex-col items-center justify-center w-full ">
        <h1 className="py-12 text-2xl font-bold leading-snug tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-800 via-gray-000 to-gray-800 sm:text-5xl md:text-6xl lg:text-7xl">
          Steps to Get Legal Consultation Online
        </h1>
        <div className="relative flex flex-col items-center justify-between hidden w-full sm:flex-row lg:flex">
          {/* Step 1 - Fill the Form */}
          <div className="flex flex-col items-center w-full mb-10 sm:w-1/4 sm:mb-0">
            <div className="relative mb-2">
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-orange-50">
                <Image
                  src={"/steps/doc.svg"}
                  width={100}
                  height={100}
                  alt="Fill the Form"
                />
              </div>
            </div>
            <div className="mt-2 text-xs text-center md:text-xl">Step 1</div>

            <div className="mt-2 text-xs font-bold text-center md:text-2xl">
              Fill the Form
            </div>
          </div>

          <div className="flex flex-col items-center w-full mb-10 sm:w-1/4 sm:mb-0">
            <div className="relative mb-2">
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-orange-50">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-orange-50">
                  <Image
                    src={"/steps/calendar.svg"}
                    width={100}
                    height={100}
                    alt="Schedule Appointment"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 text-xs text-center md:text-xl">Step 2</div>

            <div className="mt-2 text-xs font-bold text-center md:text-2xl">
              Schedule Appointment
            </div>
          </div>
          {/* Step 3 - Make Payment */}
          <div className="flex flex-col items-center w-full mb-10 sm:w-1/4 sm:mb-0">
            <div className="relative mb-2">
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-orange-50">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-orange-50">
                  <Image
                    src={"/steps/payment.svg"}
                    width={100}
                    height={100}
                    alt="Make Payment"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 text-xs text-center md:text-xl">Step 3</div>

            <div className="mt-2 text-xs font-bold text-center md:text-2xl">
              Make Payment
            </div>
          </div>

          <div className="flex flex-col items-center w-full sm:w-1/4">
            <div className="relative mb-2">
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-green-50">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-green-50">
                  <Image
                    src={"/steps/call.svg"}
                    width={100}
                    height={100}
                    alt="Lawyer Will Call You"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 text-xs text-center md:text-xl">Step 4</div>

            <div className="mt-2 text-xs font-bold text-center md:text-2xl">
              Lawyer Will Call You
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerSteps;
