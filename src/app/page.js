import Hero from "./components/Hero";
import LeadsForm from "./components/LeadsForm";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <LeadsForm />
      <Steps />
    </div>
  );
}
