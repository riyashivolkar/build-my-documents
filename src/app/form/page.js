"use client"; // Ensure this component is a Client Component

import React, { Suspense } from "react";
import Form from "../components/Form";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Form />
    </Suspense>
  );
};

export default Page;
