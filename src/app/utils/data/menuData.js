const menuData = [
  {
    id: 1,
    title: "Birth Certificate",
    path: "/birth-certificate",
    icon: (
      <img
        src="/menuImg/41.svg"
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
    id: 8,
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
  // Add other services and their required documents as needed
};
