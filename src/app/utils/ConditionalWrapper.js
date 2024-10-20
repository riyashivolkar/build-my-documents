// src/app/utils/ConditionalWrapper.js
"use client";

import { usePageContext } from "../utils/context/PageContext";

const ConditionalWrapper = ({ children }) => {
  const { isHomePage } = usePageContext();

  if (!isHomePage) {
    return null;
  }

  return <>{children}</>;
};

export default ConditionalWrapper;
