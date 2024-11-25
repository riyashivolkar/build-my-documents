import React from "react";

const FssaiBenifits = () => {
  const benefits = [
    {
      title: "Trust of the Customers",
      content:
        "An authentic communication is necessary to gain the customer trust. It will conduct better service and also keep the customers from unhealthy and adulterated food supply.",
    },
    {
      title: "Legal Advantages",
      content:
        "FSSAI Certification will enhance the chance of legal enforcement and control over the department at a certain point and will encourage the establishment of several things to a particular area.",
    },
    {
      title: "Government Funding and Loans",
      content:
        "The FSSAI registration will offer the privileges of Government Funding and Loans that can be easily accessible for the business operators.",
    },
    {
      title: "Use of FSSAI Logo",
      content:
        "The use of FSSAI logo on your product will normally create goodwill trust worthiness amongst the consumers.",
    },

    {
      title: "Expansion of Business",
      content:
        "The FSSAI license will provide a wider scope and privilege of expansion at any geographic location.",
    },
    {
      title: "Recognition of Government",
      content:
        "Government of India recognizes the FSSAI Registration resulting in to customer trust and huge base of consumers.",
    },
    {
      title: "Permit of Food Business",
      content:
        "FSSAI License speaks about the safety of the customers concerning to food business.",
    },
    {
      title: "Benefits from Government Actions on Non-Compliance",
      content:
        "Government will take action and bestow the help on the company in case of any non-compliance issue in the future.",
    },
    {
      title: "Boost Up Your Business",
      content:
        "If a business is FSSAI registered, it will create handsome client base and boost up the business at a larger scale.",
    },
  ];

  return (
    <div className="px-5 py-10 bg-black">
      <div className="px-5 mx-auto text-center sm:px-8 md:px-16 lg:px-24">
        <h2 className="inline-block mx-auto my-8 text-2xl font-bold text-white border-b-4 border-green-500 sm:my-16 sm:text-4xl">
          Benefits of FSSAI FoSCos Certificate
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-5 text-white bg-gray-900 rounded-lg shadow-lg"
            >
              <div className="flex items-start mb-3">
                <img
                  src="/fssai/correct_green.svg"
                  alt="check"
                  className="w-5 h-5 mr-3 sm:w-8 sm:h-8"
                />
                <h3 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
                {benefit.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FssaiBenifits;
