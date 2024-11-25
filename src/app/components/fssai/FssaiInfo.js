import React from "react";

const FssaiInfo = () => {
  return (
    <div className="p-6 text-white bg-black rounded-lg shadow-md md:p-10">
      <h1 className="mb-4 text-2xl font-extrabold text-orange-600 lg:text-4xl">
        What is FSSAI?
      </h1>
      <p className="text-base sm:text-lg md:text-xl">
        The Food Safety and Standards Authority of India (FSSAI) is a government
        body established in 2008 to ensure food safety across the country. It’s
        responsible for licensing and monitoring food safety standards. Any
        business involved in producing, handling, or selling food products must
        comply with Food Safety regulations.
      </p>

      <h2 className="mt-6 mb-3 text-xl font-bold text-orange-500 sm:text-2xl lg:text-3xl">
        Why do you need an FSSAI License?
      </h2>
      <p className="text-base sm:text-lg md:text-xl">
        Every food business, regardless of its size or nature, needs an FSSAI
        License. It’s like a stamp of approval that shows your business meets
        food safety standards. Without it, you’re not allowed to operate, as per
        the Food Safety and Standards Act.
      </p>

      <h2 className="mt-6 mb-3 text-xl font-bold text-orange-500 sm:text-2xl lg:text-3xl">
        Types of Licenses
      </h2>
      <ul className="pl-4 text-base list-disc sm:text-lg md:text-xl">
        <li className="mb-2">
          <strong>Basic Registration:</strong> For businesses with an annual
          turnover below 12 lakhs. Suitable for selling locally or within a
          district.
        </li>
        <li className="mb-2">
          <strong>State License:</strong> For businesses with turnovers between
          12 lakhs and 20 crores. Required for traders operating within a state
          or across multiple states.
        </li>
        <li>
          <strong>Central License:</strong> For businesses with turnovers above
          20 crores or those engaged in e-commerce, import/export, or operating
          across multiple states with a single office.
        </li>
      </ul>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-orange-500 sm:text-xl lg:text-2xl">
        Documents Needed for State License
      </h3>
      <ul className="pl-4 text-base list-disc sm:text-lg md:text-xl">
        <li className="mb-2">Business details</li>
        <li className="mb-2">Applicant’s Aadhar card</li>
        <li className="mb-2">Contact information</li>
        <li className="mb-2">Business address proof</li>
        <li>Additional documents for manufacturers/re-packers</li>
      </ul>

      <h3 className="mt-6 mb-2 text-lg font-semibold text-orange-500 sm:text-xl lg:text-2xl">
        Documents Needed for Central License
      </h3>
      <ul className="pl-4 text-base list-disc sm:text-lg md:text-xl">
        <li className="mb-2">Business details</li>
        <li className="mb-2">Applicant’s Aadhar card</li>
        <li className="mb-2">Contact information</li>
        <li className="mb-2">Business address proof</li>
        <li>Additional documents based on business type</li>
      </ul>
    </div>
  );
};

export default FssaiInfo;
