// src/app/utils/ScrollToTop.js
"use client"; // Make this a client component

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, [pathname]); // Trigger when pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
