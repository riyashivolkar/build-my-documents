"use client";

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
              className="w-64 h-auto md:w-80 md:h-auto"
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
                className="mr-8 font-serif cursor-pointer hover:text-[#f7941d]"
              >
                {item.name}
              </Link>
            ) : null
          )}

          {/* Sign Up Button with anchor link */}
          <Link
            href="/#leads-form" // Change this to the appropriate page where the leads form is
            className="ml-4 px-4 py-2 text-white bg-[#f7941d] rounded hover:bg-orange-500 transition duration-200"
          >
            Sign Up
          </Link>
        </nav>
      </div>

      {/* Mobile navigation menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="relative flex flex-col items-center justify-center w-11/12 max-w-md p-8 mx-auto transition-all duration-500 transform rounded-lg shadow-xl bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
          <div className="flex items-center justify-end w-full mb-4">
            <button
              onClick={handleMenuToggle}
              className="text-gray-500 hover:text-gray-600"
              aria-label="Close menu"
            >
              <Image
                src="/close.svg"
                alt="Close"
                width={30}
                height={30}
                className="transition-transform duration-200 hover:scale-110"
              />
            </button>
          </div>

          <nav className="flex flex-col items-center w-full space-y-4">
            {menuHeader.map((item, index) =>
              item.path ? (
                <Link
                  key={index}
                  href={item.path}
                  className="w-full py-4 text-lg font-semibold text-center text-gray-600 transition-all duration-300 transform bg-white rounded-lg shadow-md hover:bg-orange-400 hover:text-white hover:shadow-lg hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : null
            )}

            {/* Sign Up Button in mobile menu */}
            <Link
              href="/#leads-form" // Change this to the appropriate page where the leads form is
              className="w-full py-4 text-center text-white bg-[#f7941d] rounded-lg shadow-md text-lg font-semibold transition-all duration-300 hover:bg-orange-500 hover:shadow-xl transform hover:scale-105"
            >
              Sign Up
            </Link>
          </nav>

          {/* Optional: Add a footer with some motivational text */}
          <div className="mt-6 text-sm text-center text-gray-700">
            <p>Join us today for a seamless experience!</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
