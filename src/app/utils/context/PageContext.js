"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(pathname === "/");

  useEffect(() => {
    setIsHomePage(pathname === "/");
  }, [pathname]);

  return (
    <PageContext.Provider value={{ isHomePage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
