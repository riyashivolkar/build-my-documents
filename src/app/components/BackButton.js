"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back(); // Go back if history exists
    } else {
      router.push("/"); // Redirect to homepage if no history
    }
  };

  return (
    <div className="w-full p-3 flex justify-start bg-[#f7941d]">
      <div className="container mx-auto">
        <button onClick={handleBack}>
          <img
            src="/backArrow.svg"
            alt="Go back"
            className="object-cover w-10 h-10"
          />
        </button>
      </div>
    </div>
  );
};

export default BackButton;
