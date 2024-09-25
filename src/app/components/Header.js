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
        className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="relative flex flex-col items-center justify-center w-4/5 max-w-md p-2 mx-20 transition-all duration-300 bg-gray-200 border-2 rounded-lg shadow-lg sm:p-6">
          <div className="flex items-center justify-end w-full ">
            {/* <h2 className="font-bold text-black sm:text-3xl text-md">
               Menu
            </h2> */}
            <button
              onClick={handleMenuToggle}
              className="text-gray-600 transition-opacity hover:text-black"
              aria-label="Close menu"
            >
              <Image
                src="/close.svg"
                className="text-orange-400 "
                alt="Close"
                width={20}
                height={20}
              />
            </button>
          </div>
          <nav className="flex flex-col items-center w-[75%] space-y-3">
            {menuHeader.map((item, index) =>
              item.path ? (
                <Link
                  key={index}
                  href={item.path}
                  className="w-full py-2 text-sm text-center text-black transition bg-white rounded-md hover:bg-gray-200"
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
