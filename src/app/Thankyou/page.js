"use client";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/"); // This will navigate to the homepage
  };
  return (
    <div className="flex items-start justify-center h-screen p-6 bg-gray-100">
      <div className="container p-20 text-center bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center w-48 h-48 mx-auto bg-green-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-green-500"
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
        <h1 className="mt-6 text-4xl font-extrabold text-green-600">Success</h1>
        <p className="mt-4 text-xl text-gray-600">
          We have received your purchase
          <br />
        </p>
        <button
          onClick={handleGoHome}
          className="px-10 py-3 mt-8 text-xl text-green-800 bg-green-200 rounded-md hover:text-green-200 hover:bg-green-700 "
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Page;
