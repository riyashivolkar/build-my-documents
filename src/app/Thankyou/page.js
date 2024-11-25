"use client";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/"); // This will navigate to the homepage
  };

  // Custom message for WhatsApp
  const customMessage = encodeURIComponent(
    "Hello, I just made a payment. Please contact me with more details."
  );

  // Your WhatsApp phone number (in international format)
  const whatsappPhoneNumber = "8263079329"; // Replace with your number

  const whatsappLink = `https://wa.me/${whatsappPhoneNumber}?text=${customMessage}`;

  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 overflow-x-hidden bg-gradient-to-r from-orange-400 to-green-600 ">
      <div className="container max-w-xl p-10 text-center bg-white shadow-xl rounded-xl">
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-green-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 12l2 2 4-4"></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </div>
        <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
          Payment Successful!
        </h1>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl">
          Thank you for your payment. The assigned agent will contact you within
          the next 24 hours to guide you on the next steps
        </p>

        <div className="mt-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 mt-4 text-white transition-colors duration-300 bg-green-500 rounded-lg hover:bg-green-700"
          >
            <img src="whatsapp.svg" alt="WhatsApp" className="w-6 h-6 mr-2" />
            Contact Us on WhatsApp
          </a>
        </div>

        <div className="mt-6">
          <button
            onClick={handleGoHome}
            className="w-full px-10 py-3 mt-6 text-lg text-white transition-colors duration-300 bg-orange-500 rounded-lg sm:w-auto hover:text-white hover:bg-green-700"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
