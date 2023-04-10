import React, { ChangeEvent } from "react";

interface InputPorps {
  value: string;
  dataTestId: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, dataTestId, value, onChange }: InputPorps) => {
  return (
    <input
      data-testid={dataTestId}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
