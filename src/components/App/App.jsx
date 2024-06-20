import { useState } from "react";
import FeedbackSection from "../FeedbackSection/FeedbackSection.jsx";
import Header from "../Header/Header.jsx";
import IntroSection from "../IntroSection/IntroSection.jsx";
import TabsSections from "../TabsSections/TabsSections.jsx";
import TeachingSection from "../TeachingSection/TeachingSection.jsx";
import TubButtonSection from "../TubButtonSection/TubButtonSection.jsx";
import "./App.css";

export default function App() {
  const [tab, setTab] = useState('feedback')

  return (
    <>
      <Header />
      <main>
        <IntroSection />

        <TabsSections active={tab} onChange={(current) => setTab(current)}/>

        {tab === "main" && (
          <>
            <TeachingSection />
            <TubButtonSection />
          </>
        )}

        {tab === "feedback" && <FeedbackSection />}
      </main>
    </>
  );
}
