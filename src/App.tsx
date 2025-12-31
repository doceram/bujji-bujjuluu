import { useState } from "react";
import Landing from "./components/Landing";
import Journey from "./components/Journey";
// import EnvelopeOpen from "./components/EnvelopeOpen";
import EnvelopeReal from "./components/EnvelopeReal";
import HeartsRain from "./components/HeartsRain";
import Letter from "./components/Letter";
import SurpriseButton from "./components/SurpriseButton";

function App() {
  const [step, setStep] = useState("landing");

  return (
    <>
      {step === "landing" && <Landing onStart={() => setStep("journey")} />}
      {step === "journey" && <Journey onFinish={() => setStep("envelope")} />}
      {step === "envelope" && <EnvelopeReal onOpen={() => setStep("hearts")} />}
      {step === "hearts" && (
        <>
          <HeartsRain />
          {setTimeout(() => setStep("letter"), 4000)}
        </>
      )}
      {step === "letter" && <Letter />}

      {/* Music button always available */}
      <SurpriseButton />
    </>
  );
}

export default App;
