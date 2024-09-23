import React from "react";

const Working = () => {
  return (
    <section className="w-full py-6 bg-gray-200 sm:py-4 lg:py-12">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl">
          How It Works
        </h2>
        <p className="mb-8 text-lg text-gray-600 sm:text-xl md:text-2xl">
          We have simplified the process into three easy steps.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center p-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Step 1</h3>
            <img
              src="/s1.png"
              alt="Step 1 Icon"
              className="object-contain w-64 h-64 md:w-80 md:h-80"
            />
            <p className="mt-4 text-2xl text-gray-800">
              Choose the document service you need.
            </p>
          </div>
          <div className="flex flex-col items-center p-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Step 2</h3>
            <img
              src="/s2.png"
              alt="Step 2 Icon"
              className="object-contain w-64 h-64 md:w-80 md:h-80"
            />
            <p className="mt-4 text-2xl text-gray-800">
              Get end-to-end assistance
            </p>
          </div>
          <div className="flex flex-col items-center p-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Step 3</h3>
            <img
              src="/s3.png"
              alt="Step 3 Icon"
              className="object-contain w-64 h-64 md:w-80 md:h-80"
            />
            <p className="mt-4 text-2xl text-gray-800">
              Your documents will get ready. Sit back and relax!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
