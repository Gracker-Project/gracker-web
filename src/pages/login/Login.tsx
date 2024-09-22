import React, { useState, useEffect } from "react";
import {
  LoginPageLayout,
  Logo,
  CenteredContainer,
  IconWrapper,
  ButtonWrapper,
} from "./Login.style";
import Button from "@/components/common/form/Button";
import logo from "@/assets/logo_black.svg";

const Login: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 800); // 0.8초 후에 버튼 표시

    return () => clearTimeout(buttonTimer);
  }, []);

  return (
    <LoginPageLayout>
      <CenteredContainer>
        <IconWrapper>
          <Logo src={logo} alt="Logo" />
        </IconWrapper>
        <ButtonWrapper visible={showButton}>
          {showButton && <Button buttonContent="로그인 하러가기!" />}
        </ButtonWrapper>
      </CenteredContainer>
    </LoginPageLayout>
  );
};

export default Login;