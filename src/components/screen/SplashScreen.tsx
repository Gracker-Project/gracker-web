import React from "react";
import { SplashContainer, Logo } from "./SplashScreen.style";
import logo from "@/assets/logo_black.svg";

const SplashScreen: React.FC = () => {
  return (
    <SplashContainer>
      <Logo src={logo} alt="Logo" />
    </SplashContainer>
  );
};

export default SplashScreen;