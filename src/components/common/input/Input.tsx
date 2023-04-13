import React from "react";
import { InputHTMLAttributes } from "react";
import { StyledInput } from "./input.style";

interface CommonComponentProps {
  children?: React.ReactNode;
  customStyle?: React.CSSProperties;
  disabled?: boolean;
}

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Omit<CommonComponentProps, "children"> {}

const Input = React.forwardRef(
  ({ disabled = false, ...attr }: InputProps, ref) => {
    return <StyledInput ref={ref} disabled={disabled} {...attr} />;
  }
);

export default Input;
