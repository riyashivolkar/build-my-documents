import React from "react";
import Hero from "../components/Hero";
import LeadsForm from "../components/LeadsForm/LeadsForm";
import Steps from "../components/Steps";
import Association from "../components/digital/Association";

const page = () => {
  return (
    <div>
      <Hero />
      <LeadsForm />
      <Steps />
      <Association />
    </div>
  );
};

export default page;
