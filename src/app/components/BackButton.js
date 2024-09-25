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
    <div className="w-full p-3 flex justify-start bg-[#f7941d]">
      <div className="container flex flex-row mx-auto">
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
