import { Suspense } from "react";
import Experts from "./components/Experts";
import Hero from "./components/Hero";
import LeadsForm from "./components/LeadsForm/LeadsForm";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <div className="bg-white">
      <Suspense>
        <Experts />
      </Suspense>
      <Hero />
      <LeadsForm />
      <Steps />
    </div>
  );
}
