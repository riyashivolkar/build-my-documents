"use client"; // Ensure this component is a Client Component

import React, { Suspense } from "react";
import Step2Suspense from "@/app/components/Talk-to-lawyer/Booking/step2Suspense";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Step2Suspense />
    </Suspense>
  );
};

export default Page;
