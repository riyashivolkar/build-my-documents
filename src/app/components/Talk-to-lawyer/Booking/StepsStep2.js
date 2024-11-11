import React from "react";

const StepStep2 = () => {
  return (
    <div className="container w-full px-4 py-10 mx-auto bg-gray-100 sm:px-0 sm:w-1/2 ">
      <h2 className="sr-only">Steps</h2>

      <div className="after:mt-1 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
        <ol className="grid grid-cols-3 text-sm font-medium text-green-300">
          <li className="relative flex justify-start">
            <span className="absolute -bottom-[1.75rem] start-0 rounded-full bg-green-200 ">
              <svg
                className="size-12 sm:size-14"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#22c55e "
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <span className="hidden mb-10 text-xl text-black sm:block">
              Fill Form
            </span>
          </li>

          <li className="relative flex justify-center text-gray-500">
            <span className="absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 rounded-full bg-green-200 text-white">
              <svg
                className="size-12 sm:size-14"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#22c55e "
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <span className="hidden mb-10 text-xl text-black sm:block">
              Choose Timing
            </span>
          </li>

          <li className="relative flex justify-end">
            <span className="absolute -bottom-[1.75rem] end-0 rounded-full bg-gray-400 text-white">
              <svg
                className="size-12 sm:size-14"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <span className="hidden mb-10 text-xl text-gray-400 sm:block">
              Confirm & Pay
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default StepStep2;
