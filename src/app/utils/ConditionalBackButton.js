"use client";

import { usePathname } from "next/navigation";
import BackButton from "../components/BackButton";

const ConditionalBackButton = () => {
  const pathname = usePathname();

  // Render BackButton if the current path is not the homepage
  if (pathname === "/") {
    return null; // Don't show the back button on the homepage
  }

  return <BackButton />;
};

export default ConditionalBackButton;
