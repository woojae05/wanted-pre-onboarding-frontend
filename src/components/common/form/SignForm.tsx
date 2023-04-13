import React, { useRef } from "react";
import { FormData } from "../../../types/form/formData.type";
import Input from "../input/Input";
import { Container } from "./signForm.style";
import { useForm } from "../../../hooks/useForm";

interface SignFormProps {
  value: FormData;
  title: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}

const SignForm = ({
  value,
  title,
  handleSubmit,
  handleChange,
  isValid,
}: SignFormProps) => {
  const signButtonTestId: { [key: string]: string } = {
    로그인: "signin-button",
    회원가입: "signup-button",
  };
  const { emaliRef } = useForm();
  return (
    <Container>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          ref={emaliRef}
          value={value.email}
          type="text"
          name="email"
          placeholder="test@gmail.com"
          data-testid="email-input"
          onChange={handleChange}
        />
        <Input
          value={value.password}
          type="password"
          name="password"
          placeholder="**********"
          data-testid="password-input"
          onChange={handleChange}
        />
        <Input
          type="submit"
          data-testid={signButtonTestId[title]}
          value={title}
          disabled={!isValid}
        />
      </form>
    </Container>
  );
};

export default SignForm;
