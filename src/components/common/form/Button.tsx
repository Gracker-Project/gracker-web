import React from "react";
import { ButtonStyled } from "./Button.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonContent: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ buttonContent, type = "button", ...rest }) => {
  return <ButtonStyled type={type} {...rest}>{buttonContent}</ButtonStyled>;
};

export default Button;