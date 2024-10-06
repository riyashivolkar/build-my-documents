"use client"; // Ensure this is a client component

import { useRouter } from "next/navigation";
import Image from "next/image";
import Menu from "./Menu";
import Steps from "./Steps";
import Footer from "./Footer";

const Hero = () => {
  const { pathname } = useRouter();

  if (pathname === "/terms-conditions") {
    return null;
  }

  return (
    <div className="relative flex items-center w-full h-screen bg-gray-50">
      <section className="relative w-full h-full py-16 sm:py-24 lg:py-32">
        <a className="absolute inset-0 cursor-pointer" href="/">
          <Image
            src="/doc.jpg"
            alt="Description of the image"
            fill
            style={{ objectFit: "cover" }}
          />
        </a>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container relative z-10 p-5 px-4 mx-auto text-center text-white">
          <h1 className="text-2xl sm:text-4xl md:text-5xl py-2 sm:py-0 font-medium mb-4 sm:mb-6 lg:mb-8 text-[#f7941d]">
            Online Documents Consultancy.
          </h1>
          <p className="text-[11px] sm:text-[17px] md:text-[20px] mb-8 sm:mb-10 lg:mb-12">
            Documentation can be frustrating and time-consuming. Let us take the
            stress out of the process and simplify it for you.
          </p>
          <Menu />
        </div>
      </section>
    </div>
  );
};

export default Hero;
