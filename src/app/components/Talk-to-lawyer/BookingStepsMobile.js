import Image from "next/image";
import React from "react";

const BookingStepsMobile = () => {
  return (
    <section className="flex items-center justify-center pb-4 text-white bg-black body-font lg:hidden">
      <div className="px-5 mx-auto">
        <div className="w-full max-w-md mx-auto space-y-5 ">
          {/* Step 1 */}
          <div className="relative flex p-2 bg-gray-800 border-2 border-gray-900 rounded-lg">
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 text-white rounded-full w-14 h-14">
              <Image
                src={"/steps/doc.svg"}
                width={40}
                height={40}
                alt="Fill the Form"
              />
            </div>
            <div className="flex-grow pl-6 text-white">
              <h2 className="mb-1 text-base font-semibold tracking-wide ">1</h2>
              <p className="text-sm font-medium text-gray-300">Fill the Form</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex p-2 bg-gray-700 border-2 border-gray-900 rounded-lg">
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 text-white rounded-full w-14 h-14">
              <Image
                src={"/steps/calendar.svg"}
                width={40}
                height={40}
                alt="Schedule Appointment"
              />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-1 text-base font-semibold tracking-wide text-white">
                2
              </h2>
              <p className="text-sm font-medium text-gray-300">
                Schedule Appointment
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex p-2 bg-gray-600 border-2 border-gray-900 rounded-lg">
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 text-white rounded-full w-14 h-14">
              <Image
                src={"/steps/payment.svg"}
                width={40}
                height={40}
                alt="Make Payment"
              />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-1 text-base font-semibold tracking-wide text-white">
                3
              </h2>
              <p className="text-sm font-medium text-gray-300">Make Payment</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex p-2 bg-gray-500 border-2 border-gray-900 rounded-lg">
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 text-white rounded-full w-14 h-14">
              <Image
                src={"/steps/call.svg"}
                width={40}
                height={40}
                alt="Lawyer Will Call You"
              />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-1 text-base font-semibold tracking-wide ">4</h2>
              <p className="text-sm font-medium text-gray-300">
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
