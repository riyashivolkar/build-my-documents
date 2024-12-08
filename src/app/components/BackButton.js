"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    } else {
      router.push("/");
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex items-center justify-start w-full px-5 py-0 bg-white sm:py-2 sm:px-24">
      {/* Back Button */}
      <div className="flex flex-row items-center py-2">
        {/* <button onClick={handleBack}>
          <img
            src="/backArrow.svg"
            alt="Go back"
            className="object-cover w-10 h-10"
          />
        </button> */}
      </div>
    </div>
  );
};

export default BackButton;
