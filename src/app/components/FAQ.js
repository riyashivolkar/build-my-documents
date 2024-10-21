import React from "react";

const FAQ = () => {
  return (
    <div itemScope itemType="https://schema.org/FAQPage" id="faq">
      <div className="container px-4 py-10 mx-auto">
        <h1 className="mb-4 text-2xl font-bold text-center">Legal Services </h1>
        <ul className="grid gap-6" data-list="faq">
          <FaqRadioOption
            optionId="option-1"
            label="1. What are Legal Services?"
            description="Legal Services includes providing Free Legal Aid to those weaker sections of the society whofall within the purview of Section 12 of the Legal Services Authority Act, 1987. It also entails creating legal awareness by spreading legal literacy through legal awareness camps, print media, digital media and organizing Lok Adalats for the amicable settlement of disputes which are either pending or which are yet to be filed, by way of compromise. NALSA also undertakes necessary steps by way of social action litigation with regards to any matter of special concern to the weaker sections of the society. Legal services also encompasses facilitating the beneficiaries to get their entitlements under various government schemes, policies and legislations"
          />
          <FaqRadioOption
            optionId="option-2"
            label="2. What is included in free legal services/aid provided by the Legal Services Authorities? / What is the nature of free legal services?"
            description="Free legal aid is the provision of free legal services in civil and criminal matters for those poor and marginalized people who cannot afford the services of a lawyer for the conduct of a case or a legal proceeding in any Court, Tribunal or Authority. These services are governed by Legal Services Authorities Act, 1987 and headed by the National Legal Services Authority (NALSA).
Provision of free legal aid may include:    a.Representation by an Advocate in legal proceedings.
b. Payment of process fees, expenses of witnesses and all other charges payable or incurred in connection with any legal proceedings in appropriate cases;
c. Preparation of pleadings, memo of appeal, paper book including printing and translation of documents in legal proceedings;
d. Drafting of legal documents, special leave petition etc.
e. Supply of certified copies of judgments, orders, notes of evidence and other documents in legal proceedings.    Free Legal Services also include provision of aid and advice to the beneficiaries to access the benefits under the welfare statutes and schemes framed by the Central Government or the State Government and to ensure access to justice in any other manner.
According to Section 2(c) of the Legal Services Authorities Act, 1987, “legal services” includes any service in the conduct of any case or other legal proceeding before any court or other authority or tribunal and the giving of advice on any legal matter."
            checked
          />
          <FaqRadioOption
            optionId="option-3"
            label="3. Is Free Legal Aid Confined to the Cases before the Subordinate Courts?"
            description="No, free legal aid is not confined to cases before the subordinate Courts. Legal Aid is provided to the needy from the lowest Court to the Supreme Court of India. Legal Aid Counsel represent such needy persons before the lower Courts, High Courts and also before the Supreme Court of India."
          />
          <FaqRadioOption
            optionId="option-4"
            label="4. What kind of cases can I apply free legal aid for? "
            description="According to Section 13 (1) of the Act, any individual who satisfies any criteria under Section 12 is entitled to receive legal services, provided that the concerned Legal Services Authority is satisfied that such person has a genuine case to prosecute or defend the matter. There is hence no bar as to which kind of cases one can apply and not apply for. All kinds of cases are included as long as the individual satisfies the eligibility under Section 12 of the Act. "
          />
          <FaqRadioOption
            optionId="option-5"
            label="5. Can I choose a lawyer of my choice under the free legal services/aid? "
            description="Yes, it is possible to avail the services of a lawyer of your choice under free legal services. According to regulation 7(6) of the National Legal Services Authority (Free and Competent Legal Services) Regulations 2010, the application for legal services will be scrutinized by the Member-Secretary or the Secretary and if the applicant has mentioned/expressed his/her choice of a lawyer on the panel, such Member-Secretary or Secretary can consider and allow the same.  "
          />
          <FaqRadioOption
            optionId="option-6"
            label="6. Can I get only free legal consultation even if I do not want to pursue a proper case in the courts? "
            description="Yes, it is possible to get any kind of legal service under free legal aid/services. "
          />
          <FaqRadioOption
            optionId="option-7"
            label="7. Can I get free legal aid lawyer at any stage of case? Can I get free legal aid at the time of appeal even though I had my personal lawyer before the appellate stage? "
            description="Yes, you can apply to get free legal aid at any stage of the case as long as you are eligible to attain free legal services as per Section 12 of the Legal Services Authorities Act, 1987. Even if you had your personal lawyer before and require a lawyer under free legal aid only at the stage of appeal (and are eligible under Section 12), you can make an application to avail the same."
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
      className="peer-checked/option-1:bg-slate-900 peer-checked/option-1:text-white peer-checked/option-1:[&>svg]:rotate-45 block cursor-pointer p-4 pr-12 font-bold border border-slate-900 rounded transition-all duration-150 ease-in-out relative"
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
          className="p-4 mt-2 border rounded border-slate-900"
          itemProp="text"
        >
          {description}
        </div>
      </div>
    </div>
  </li>
);

export default FAQ;
