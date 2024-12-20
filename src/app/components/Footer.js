import Image from "next/image";
import React from "react";
import { companyLinks, legalLinks, socialLinks } from "../utils/data/menuData";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-900 body-font ">
      <div className="flex flex-col flex-wrap items-center px-3 py-8 bg-white justify-evenly sm:px-5 md:flex-row md:py-12">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-full mb-6 text-center md:text-left md:w-1/4 md:mb-0">
          <a
            className="flex items-center justify-center font-medium text-gray-100 title-font md:justify-start"
            href="/"
          >
            <Image
              src="/logo1.png"
              className="bg-white"
              alt="logo"
              width={240}
              height={58}
              priority
            />
          </a>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap flex-grow text-center md:text-left">
          {/* Company Links */}
          <div className="w-full px-2 mb-6 md:w-1/3 md:mb-0">
            <h2 className="mb-3 text-sm font-semibold tracking-widest text-gray-900 title-font">
              COMPANY
            </h2>
            <nav className="list-none">
              {companyLinks.map((link) => (
                <li key={link.name} className="py-1">
                  <Link href={link.href}>
                    <div className="text-xs text-gray-900 sm:text-sm hover:text-gray-300">
                      {link.name}
                    </div>
                  </Link>
                </li>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div className="w-full px-2 mb-6 md:w-1/3 md:mb-0">
            <h2 className="mb-3 text-sm font-semibold tracking-widest text-gray-900 title-font">
              LEGAL
            </h2>
            <nav className="list-none">
              {legalLinks.map((link) => (
                <li key={link.name} className="py-1">
                  <Link href={link.href}>
                    <div className="text-xs text-gray-900 sm:text-sm hover:text-gray-300">
                      {link.name}
                    </div>
                  </Link>
                </li>
              ))}
            </nav>
          </div>

          {/* Follow Us Section */}
          <div className="w-full px-2 md:w-1/3 ">
            <h2 className="mb-3 text-sm font-semibold tracking-widest text-gray-900 title-font">
              FOLLOW US
            </h2>
            <nav className="list-none">
              <span className="inline-flex justify-center mt-2 md:justify-start gap-x-2">
                {socialLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <div className="text-gray-500 hover:text-gray-700">
                      {link.icon}
                    </div>
                  </Link>
                ))}
              </span>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-3 py-3 bg-white ">
        <p className="text-xs text-center text-gray-900 sm:text-sm">
          © 2024 <span className="font-semibold">BUILD MY DOCUMENTS</span> ALL
          RIGHTS RESERVED
        </p>
      </div>
      {/* Footer Bottom */}
    </footer>
  );
};

export default Footer;
