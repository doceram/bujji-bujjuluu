import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Journey from "./components/Journey";
import EnvelopeReal from "./components/EnvelopeReal";
import HeartsRain from "./components/HeartsRain";
import Letter from "./components/Letter";
import SurpriseButton from "./components/SurpriseButton";

function App() {
  const [step, setStep] = useState("landing");

  useEffect(() => {
    if (step === "hearts") {
      const timer = setTimeout(() => {
        setStep("letter");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <>
      {step === "landing" && <Landing onStart={() => setStep("journey")} />}
      {step === "journey" && <Journey onFinish={() => setStep("envelope")} />}
      {step === "envelope" && <EnvelopeReal onOpen={() => setStep("hearts")} />}
      {step === "hearts" && <HeartsRain />}
      {step === "letter" && <Letter />}

      <SurpriseButton />
    </>
  );
}

export default App;
