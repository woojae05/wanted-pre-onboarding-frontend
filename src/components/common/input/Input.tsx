import React from "react";
import { InputHTMLAttributes } from "react";
import { StyledInput } from "./input.style";

interface CommonComponentProps {
  children?: React.ReactNode;
  customStyle?: React.CSSProperties;
}

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Omit<CommonComponentProps, "children"> {}

const Input = React.forwardRef(
  ({ ...attr }: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <StyledInput ref={ref} {...attr} />;
  }
);

export default Input;
