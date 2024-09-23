"use client"; // Ensures this is a client component

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { menuHeader } from "../utils/data/menuData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-gray-600 bg-white body-font">
      <div className="container flex flex-row flex-wrap items-center p-1 mx-auto">
        <div className="flex items-center mb-1 font-medium text-gray-900 title-font md:mb-0">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="logo"
              width={280}
              height={68}
              priority
              className="w-64 h-auto md:w-80 md:h-auto" // Adjust size for small and large screens
            />
          </Link>
        </div>

        {/* Menu button for small devices */}
        <div className="flex ml-auto md:hidden">
          <button
            onClick={handleMenuToggle}
            className="p-5 text-gray-900 hover:text-gray-700"
            aria-label="Toggle menu"
          >
            <Image src="/menu.svg" alt="Menu" width={34} height={34} />
          </button>
        </div>

        {/* Navigation items for desktop */}
        <nav
          className={`hidden md:flex flex-wrap items-center justify-center text-2xl md:ml-auto`}
        >
          {menuHeader.map((item, index) =>
            item.path ? (
              <Link
                key={index}
                href={item.path}
                className="mr-8 cursor-pointer hover:text-[#f7941d]"
              >
                {item.name}
              </Link>
            ) : null
          )}
        </nav>
      </div>

      {/* Mobile navigation menu */}
      <div
        className={`fixed inset-0  bg-black bg-opacity-60 flex flex-col items-center justify-center z-50 transition-transform transform ${
          isMenuOpen ? "scale-100" : "scale-0"
        } md:hidden`}
      >
        <div className="relative flex flex-col items-center justify-center w-1/2 bg-gray-200 border-2 rounded-md ml-28 mb-80 top-2 left-2 h-1/3">
          <button
            onClick={handleMenuToggle}
            className="absolute text-black top-4 right-4 hover:text-gray-700"
            aria-label="Close menu"
          >
            <Image src="/close.svg" alt="Close" width={34} height={34} />
          </button>
          <nav className="flex flex-col items-center mt-10 text-2xl">
            {menuHeader.map((item, index) =>
              item.path ? (
                <Link
                  key={index}
                  href={item.path}
                  className="mb-4 text-black cursor-pointer hover:text-[#f7941d]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : null
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
