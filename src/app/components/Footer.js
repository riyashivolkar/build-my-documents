import Image from "next/image";
import React from "react";
import { companyLinks, legalLinks, socialLinks } from "../utils/data/menuData";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-white body-font">
      <div className="container flex flex-col flex-wrap px-2 mx-auto sm:px-5 sm:py-24 md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a
            className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
            href="/"
          >
            <Image
              className=""
              src="/logo1.png"
              alt="logo"
              width={280}
              height={68}
              priority
            />
          </a>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 text-sm sm:text-[19px] font-medium tracking-widest text-gray-900 title-font font-serif">
              COMPANY
            </h2>
            <nav className="mb-10 list-none ">
              {companyLinks.map((link) => (
                <li key={link.name} className="py-2 text-sm sm:text-[17px]">
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 font-serif text-sm sm:text-[19px]  font-medium tracking-widest text-gray-900 title-font">
              LEGAL
            </h2>
            <nav className="mb-10 list-none">
              {legalLinks.map((link) => (
                <li key={link.name} className="py-2 text-sm sm:text-[17px]">
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 font-serif text-sm sm:text-[19px]  font-medium tracking-widest text-gray-900 title-font">
              FOLLOW US
            </h2>
            <nav className="mb-10 list-none">
              <span className="inline-flex justify-start mt-2 sm:mt-0 gap-x-3 ">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-500 "
                  >
                    {link.icon}
                  </Link>
                ))}
              </span>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center bg-gray-200">
        <div className="px-5 py-4 ">
          <p className="text-xs text-center text-gray-800 sm:text-base">
            © 2024 <span className="font-semibold">BUILD MY DOCUMENTS</span>
            <span className="text-gray-800"> ALL RIGHTS RESERVED</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
