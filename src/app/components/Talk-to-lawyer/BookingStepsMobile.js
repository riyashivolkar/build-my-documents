import Image from "next/image";
import React from "react";

const BookingStepsMobile = () => {
  return (
    <section className="flex items-center justify-center text-gray-600 body-font lg:hidden">
      <div className="px-5 mx-auto">
        <div className="w-full max-w-md mx-auto">
          {/* Step 1 */}
          <div className="relative flex pb-12">
            <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
              <div className="w-1 h-full bg-gray-300 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 text-white bg-orange-100 rounded-full w-14 h-14">
              <Image
                src={"/steps/doc.svg"}
                width={40}
                height={40}
                alt="Fill the Form"
              />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-1 text-base font-semibold tracking-wide text-gray-800">
                Step 1
              </h2>
              <p className="text-sm font-medium text-gray-700">Fill the Form</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="relative flex pb-12">
            <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
              <div className="w-1 h-full bg-gray-300 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 text-white bg-orange-100 rounded-full w-14 h-14">
              <Image
                src={"/steps/calendar.svg"}
                width={40}
                height={40}
                alt="Schedule Appointment"
              />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-1 text-base font-semibold tracking-wide text-gray-800">
                Step 2
              </h2>
              <p className="text-sm font-medium text-gray-700">
                Schedule Appointment
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="relative flex pb-12">
            <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
              <div className="w-1 h-full bg-gray-300 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 text-white bg-orange-100 rounded-full w-14 h-14">
              <Image
                src={"/steps/payment.svg"}
                width={40}
                height={40}
                alt="Make Payment"
              />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-1 text-base font-semibold tracking-wide text-gray-800">
                Step 3
              </h2>
              <p className="text-sm font-medium text-gray-700">Make Payment</p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="relative flex">
            <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
              <div className="w-1 h-full bg-gray-300 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 text-white bg-green-100 rounded-full w-14 h-14">
              <Image
                src={"/steps/call.svg"}
                width={40}
                height={40}
                alt="Lawyer Will Call You"
              />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-1 text-base font-semibold tracking-wide text-gray-800">
                Step 4
              </h2>
              <p className="text-sm font-medium text-gray-700">
                Lawyer will call you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingStepsMobile;
