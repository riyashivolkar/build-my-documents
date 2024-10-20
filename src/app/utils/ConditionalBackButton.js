"use client";

import { usePathname } from "next/navigation";
import BackButton from "../components/BackButton";

const ConditionalBackButton = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return <BackButton />;
};

export default ConditionalBackButton;
