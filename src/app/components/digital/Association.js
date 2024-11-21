import React from "react";

const associations = [
  { id: 1, imgSrc: "/association/csc.png", altText: "CSC Logo" },
  { id: 2, imgSrc: "/association/digital.png", altText: "Digital India Logo" },
  { id: 3, imgSrc: "/association/goDaddy.png", altText: "GoDaddy Logo" },
  { id: 4, imgSrc: "/association/MobiKwik.png", altText: "MobiKwik Logo" },
];

const Association = () => {
  return (
    <section className="px-5 text-gray-600 body-font sm:px-24">
      <div className="px-8 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            ASSOCIATED WITH
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
          {associations.map((association) => (
            <div
              key={association.id}
              className="flex justify-center w-1/2 p-2 sm:w-1/5 "
            >
              <img
                src={association.imgSrc}
                alt={association.altText}
                className="object-contain w-50 h-50"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Association;
