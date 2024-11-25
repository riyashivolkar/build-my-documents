import React from "react";

const FssaiFAQ = () => {
  return (
    <div
      itemScope
      itemType="https://schema.org/FAQPage"
      id="faq"
      className="px-5 sm:px-24"
    >
      <div className="px-4 py-10 mx-auto ">
        <ul
          className="grid gap-6 text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl"
          data-list="faq"
        >
          <FaqRadioOption
            optionId="option-1"
            label="1. What is FoSCos / FSSAI Food License?"
            description="FSSAI launched Food Safety Compliance System (FoSCoS) wef 1st June 2020 replacing existing Food Licensing and Registration System.Food License Registration certificate is required to run a food product business. You have to register under Food Safety and Standards Authority of India (FSSAI) to manufacture, distribute and transport food products. FSSAI is established under the Ministry of Health & Family Welfare, Government of India. The FSSAI has been established under the Food Safety and Standards Act, 2006. FSSAI Certificate and FSSAI License are same which ensures the quality, purity and other important factors the customers can rely upon."
          />
          <FaqRadioOption
            optionId="option-2"
            label="2. What is the difference between FSSAI/FoSCoS/Food License?"
            description="There is no difference between FSSAI, FoSCoS and Food License. These are all the same."
            checked
          />
          <FaqRadioOption
            optionId="option-3"
            label="3. What is the full form of FSSAI?"
            description="The full form of FSSAI is the Food Safety and Standards Authority of India.

"
          />
          <FaqRadioOption
            optionId="option-4"
            label="4. What is FoSCos? "
            description="Food Safety Compliance System (FoSCoS) is built using latest technology with a vision to have modern on stop pan-India IT platform for food safety regulatory needs, its launched by FSSAI. FoSCoS shall also be integrated with other platforms of Government of India such as GST, PAN, MCA etc. further ease out the processes for businesses and also ensure a 360 degree profiling of businesses.

"
          />
          <FaqRadioOption
            optionId="option-5"
            label="5. Why Register Under FSSAI and get FoSCos License?
"
            description="The FSSAI Registration is the legal process for all Food Business Operators (FBOs) in India to apply for getting the certificate that the available sold food is safe for human consumption. Register Now!"
          />
          <FaqRadioOption
            optionId="option-6"
            label="6. What are the types of FoSCos Food Licenses?
 "
            description="TBased on the annual turnover of the food business, the types of FoSCos Food licenses are:

Basic FSSAI Registration - Annual turnover of less than Rs. 12 Lakhs
State FSSAI License - Annual turnover between Rs. 12 Lakhs - Rs. 20 Crores
Central FSSAI License - Annual turnover more than Rs. 20 Crores"
          />
          <FaqRadioOption
            optionId="option-7"
            label="7. How much does FoSCos Food License Registration under FSSAI cost?
 "
            description="The FoSCos Food Registration cost depends on the category and the duration of the Food License (1-5 years) you are opting for:

Basic FSSAI Registration - Rs.2499 for 1 year, Rs.2999 for 2 years, Rs.3499 for 3 years, Rs.3999 for 4 years, Rs.4499 for 5 years
State FSSAI Registration - Rs.3499 for 1 year
Central FSSAI Registration - Rs.4499 for 1 year"
          />
        </ul>
      </div>
    </div>
  );
};

// Component for Radio Button FAQ (auto closing)
const FaqRadioOption = ({ optionId, label, description, checked }) => (
  <li
    className="text-base sm:text-xl group"
    itemScope
    itemProp="mainEntity"
    itemType="https://schema.org/Question"
  >
    <input
      className="hidden peer/option-1"
      type="radio"
      id={optionId}
      name="options"
      defaultChecked={checked}
    />
    <label
      className="peer-checked/option-1:bg-green-500 peer-checked/option-1:text-white peer-checked/option-1:[&>svg]:rotate-45 block cursor-pointer p-4 pr-12 font-bold border border-slate-900 rounded transition-all duration-150 ease-in-out relative"
      htmlFor={optionId}
      itemProp="name"
    >
      {label}
      <svg
        className="block absolute top-1/2 right-4 -mt-[11.5px] transition-all duration-150 ease-in-out"
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 11.5L21 11.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11 1.5L11 21.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </label>
    <div
      className="grid grid-rows-[0fr] transition-all duration-150 ease-in-out peer-checked/option-1:grid-rows-[1fr]"
      itemScope
      itemProp="acceptedAnswer"
      itemType="https://schema.org/Answer"
    >
      <div className="min-h-[0px] overflow-hidden">
        <div
          className="p-4 mt-2 text-white bg-black border border-green-500 rounded"
          itemProp="text"
        >
          {description}
        </div>
      </div>
    </div>
  </li>
);

export default FssaiFAQ;
