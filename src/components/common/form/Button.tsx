import React from "react";
import { ButtonStyled } from "./Button.style";

interface ButtonProps {
  buttonContent: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ buttonContent, type = "button" }) => {
  return <ButtonStyled type={type}>{buttonContent}</ButtonStyled>;
};

export default Button;