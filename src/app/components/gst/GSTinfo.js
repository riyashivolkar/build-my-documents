import React from "react";

const GSTinfo = () => {
  return (
    <section className="text-gray-100 bg-orange-500 body-font">
      <div className="container px-6 py-16 mx-auto md:px-12 lg:px-20">
        <div className="flex flex-wrap items-center bg-white rounded-lg shadow-lg">
          {/* Image Section */}
          <div className="flex flex-col items-center justify-center w-full pt-8 mb-6 bg-white rounded-lg sm:px-4 md:w-1/4 md:mb-0">
            <img
              alt="What is GST?"
              src="/gst/gst.jpg"
              className="object-cover w-40 h-40 border-4 border-gray-100 rounded-lg shadow-lg sm:w-48 sm:h-52 md:w-56 md:h-56"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:pl-8 md:w-3/4">
            <div className="p-6 space-y-6 text-gray-800 bg-white rounded-lg ">
              <h2 className="text-lg font-semibold sm:text-2xl">
                What is
                <span className="text-orange-500"> GST Registration? </span>
              </h2>
              <p className="text-sm leading-relaxed sm:text-base">
                GST registration is the process by which a business obtains a
                unique identification number, known as a GSTIN (Goods and
                Services Tax Identification Number), making it liable to pay
                Goods and Services Tax (GST) in India. According to the Central
                Goods and Services Tax Act of 2017, businesses with an annual
                turnover exceeding ₹40 lakh (or ₹20 lakh in specific special
                category states) are required to register as taxable entities.
                The GSTIN, a 15-digit number, uniquely identifies each taxpayer
                under the GST framework and allows authorities to monitor
                transactions and related data effectively.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                GST, or Goods and Services Tax, is a destination-based,
                multi-stage, indirect tax that replaces various other taxes,
                including VAT and excise duties. Under the GST Act of 2017,
                businesses that previously paid service tax, excise duty, or VAT
                must now register for GST. Additionally, GST registration is
                mandatory for eCommerce sellers regardless of turnover.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                Citizens can complete GST registration online through the
                official GST portal, eliminating the need for in-person visits
                to government offices. After submitting an application, the
                portal generates an ARN (Application Reference Number) status
                immediately, allowing applicants to track their registration
                progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GSTinfo;
