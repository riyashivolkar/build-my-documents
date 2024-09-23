import Link from "next/link";
import React from "react";

const BackButton = () => {
  return (
    <div className="w-full  p-3 flex justify-start bg-[#f7941d]">
      <div className="container mx-auto ">
        <Link href={"/"}>
          <img
            src="/backArrow.svg"
            alt="Description of image "
            className="object-cover w-10 h-10 "
          />
        </Link>
      </div>
    </div>
  );
};

export default BackButton;
