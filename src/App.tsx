import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import "./global.css";
import SplashScreen from "@/components/screen/SplashScreen";
import { FadeInContainer } from "./App.style";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFadeIn(true);
    }, 700); // 0.7 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {loading && <SplashScreen />}
      <BrowserRouter>
        <FadeInContainer fadeIn={fadeIn}>
          <Router />
        </FadeInContainer>
      </BrowserRouter>
    </div>
  );
}