const menuData = [
  {
    id: 1,
    title: "Birth Certificate",
    path: "/birth-certificate",
    icon: (
      <img
        src="/menuImg/birth.svg"
        alt="Birth Certificate Icon"
        className="w-500 h-500"
      />
    ),
  },
  {
    id: 2,
    title: "Death Certificate",
    path: "/death-certificate",
    icon: (
      <img
        src="/menuImg/death.svg"
        alt="Death Certificate Icon"
        className="w-500 h-500"
      />
    ),
  },
  {
    id: 3,
    title: "Senior Citizen Card",
    path: "/senior-citizen-card",
    icon: (
      <img
        src="/menuImg/senior.svg"
        alt="Senior Citizen Card Icon"
        className="w-500 h-500"
      />
    ),
  },
  {
    id: 4,
    title: "Marriage Certificate ",
    path: "/marraige-certificate",

    icon: (
      <img
        src="/menuImg/marraige.svg"
        alt="Marriage Registration  Icon"
        className="w-500 h-500"
      />
    ),
  },
  {
    id: 5,
    title: "Shops and Establishment Act ",
    path: "/shops-and-establishment-act",

    icon: (
      <img
        src="/menuImg/labour.svg"
        alt="Shops and Establishment  Icon"
        className="w-500 h-500"
      />
    ),
  },
  {
    id: 6,
    title: "Ration Card",
    path: "/ration-card",

    icon: (
      <img
        src="/menuImg/ration.svg"
        alt="Ration Card Icon"
        className="w-500 h-500"
      />
    ),
  },
  {
    id: 7,
    title: "Food License (FSSAI)",
    path: "/food-license",
    icon: (
      <img
        src="/menuImg/food.svg"
        alt="Food License (FSSAI) Icon"
        className="w-500 h-500"
      />
    ),
  },
  {
    id: 8,
    title: "Passport",
    path: "/passport",

    icon: (
      <img
        src="/menuImg/passport.svg"
        alt="Passport Icon"
        className="w-500 h-500"
      />
    ),
  },

  {
    id: 9,
    title: "Legal Aid",
    path: "/legal-aid",
    icon: (
      <img src="/menuImg/law.svg" alt="Travel Visa" className="w-500 h-500" />
    ),
  },
  {
    id: 10,
    title: "Pan Card",
    path: "/pan-card",
    icon: (
      <img
        src="/menuImg/pancard.svg"
        alt="Pan Card Icon"
        className="w-500 h-500"
      />
    ),
  },
  {
    id: 11,
    title: "GST",
    path: "/gst",
    icon: <img src="/menuImg/gst.svg" alt="GST Icon" className="w-500 h-500" />,
  },
  {
    id: 12,
    title: "MSME Certificate",
    path: "/msme-certificate",
    icon: (
      <img
        src="/menuImg/msme.svg"
        alt="MSME Certificate Icon"
        className="w-500 h-500"
      />
    ),
  },
];

export default menuData;

export const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact-us" },
];

export const legalLinks = [
  { name: "Terms & Conditions", href: "/terms-conditions" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://www.twitter.com",
    icon: (
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
      </svg>
    ),
  },
];

export const menuHeader = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contact-us" },
];

export const formData = {
  birth: [
    "Parent's Aadhaar card",
    "Parent's PAN card",
    "Proof of birth (hospital discharge certificate or letter from the hospital)",
    "Address proof (utility bill, rental agreement, or passport)",
    "Marriage certificate of parents (if applicable)",
  ],
  death: [
    "Aadhaar card of the deceased",

    "Ration card",
    "Electricity bill",

    "Hospital death report",
    "Medical certificate",

    "Affidavit specifying the date and time of death (in case of home death)",
    "Identity proof of the applicant (Aadhaar, Voter ID, etc.)",
    "Birth certificate of the deceased (optional)",
    "Cremation/Burial certificate (if available)",
  ],
  senior: ["Aadhaar card", "Blood report", "Two passport-size photos"],
  marraige: [
    "Aadhaar cards of both husband and wife",
    "Birth certificate (for age proof)",
    "10th-grade certificate (for age proof)",
    "Voter ID (for address proof)",
    "Passport (for address proof)",
    "Ration card (for address proof)",
    "Passport-sized photographs (both parties, 2 each)",
    "Joint photograph of the married couple",
    "Wedding invitation card (optional but helpful)",
    "Marriage affidavit (signed by both husband and wife)",
    "Identity proof and address proof of witnesses (minimum 2 witnesses)",
  ],
  shops: [
    "Aadhaar card of the applicant (owner)",
    "PAN card of the business owner or establishment",
    "Proof of business premises (rent agreement or ownership document)",
    "Business address proof (Electricity bill, water bill)",
    "Incorporation certificate (for companies)",
    "List of employees (if applicable)",
    "Partnership deed (if applicable)",
    "Details of the business (nature of business)",
  ],
  ration: [
    "Aadhaar card",
    "Utility bill (Electricity, Gas, Water) (address proof)",
    "Rental agreement (address proof)",
    "Birth certificate (age proof)",
    "School leaving certificate (age proof)",
    "Family group photo (Passport size)",
    "Income certificate (if applicable)",
    "Identity proof of family members (Aadhaar, PAN card, etc.)",
    "Deletion certificate (if transferring from another state or if previously held a ration card)",
  ],
  passport: [
    "Aadhaar card",
    "Proof of address (Utility bill, Rental agreement)",
    "Proof of identity (Voter ID, PAN card, Driving license)",
    "Birth certificate (for age proof)",
    "Recent passport-sized photographs",
    "Marriage certificate (if applicable)",
    "NOC from parents (if applicant is minor)",
  ],
  food: [
    "Aadhaar card",
    "PAN card",
    "Passport-sized photo (1)",
    "FSSAI declaration form",
    "Nature of business details",
  ],
  gst: [
    "Aadhaar card",
    "PAN card",
    "Bank Account Proof",

    "One Passport Size Photo",
    " Electricity Bill from Owner",
    "Rent Agreement",
    "NOC (No Objection Certificate)",
  ],
  msme: ["Aadhaar card", "PAN card"],
  panCard: [
    "Aadhaar card ",
    "Existing PAN copy (Correction/Lost/damage Pan Card)",
  ],

  law: [
    "Aadhaar card/ Voter ID/ PAN Card ",

    "Legal Case Documents / FIR (First Information Report /Court notices",
    "Any existing legal documents related to your case",
  ],
};

// menuData.js

export const serviceUrls = {
  birth: "https://payments.cashfree.com/forms/birth--certificate",
  death: "https://payments.cashfree.com/forms/death--certificate",
  senior: "https://payments.cashfree.com/forms/senior--citizen",
  law: "https://payments.cashfree.com/forms/legal--aid",
  msme: "https://payments.cashfree.com/forms/msme--registration",
  gst: "https://payments.cashfree.com/forms/gst--registration",
  panCard: "https://payments.cashfree.com/forms/pan--card",
  food: "https://payments.cashfree.com/forms/fssai--registration",
  passport: "https://payments.cashfree.com/forms/passport--form",
  ration: "https://payments.cashfree.com/forms/ration--card",
  shops: "https://payments.cashfree.com/forms/Shops--and--Establishment",
  marraige: "https://payments.cashfree.com/forms/marriage--registration",
};
