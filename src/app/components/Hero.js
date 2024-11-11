"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Menu from "./Menu";

const Hero = () => {
  const { pathname } = useRouter();

  // Return nothing if on terms and conditions page
  if (pathname === "/terms-conditions") {
    return null;
  }

  return (
    <div className="relative flex items-start justify-center w-full min-h-[60vh] ">
      <section className="relative w-full h-full">
        <a className="absolute inset-0 cursor-pointer" href="/">
          <Image
            src="/doc.jpg"
            alt="Description of the image"
            fill
            style={{ objectFit: "cover" }}
            className="z-0"
          />
        </a>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container relative z-20 p-5 px-4 py-12 mx-auto text-center text-white">
          <h1 className="text-2xl sm:text-4xl font-serif md:text-5xl py-2 sm:py-0 font-medium mb-4 text-[#f7941d]">
            Online Documents Consultancy.
          </h1>
          <p className="text-[11px] sm:text-[17px] md:text-[20px]">
            Documentation can be frustrating and time-consuming. Let us take the
            stress out of the process and simplify it for you.
          </p>
        </div>

        <div className="relative z-10">
          <Menu />
        </div>
      </section>
    </div>
  );
};

export default Hero;
