import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./button.style";

interface CommonComponentProps {
  children?: React.ReactNode;
  customStyle?: React.CSSProperties;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    CommonComponentProps {}

const Button = ({ children, ...atr }: ButtonProps) => {
  return <StyledButton {...atr}>{children}</StyledButton>;
};

export default Button;
