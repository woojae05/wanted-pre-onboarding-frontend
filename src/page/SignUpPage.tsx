import useSignUp from "../hooks/auth/useSignUp";
import SignForm from "../components/common/form/SignForm";

const SignUpPage = () => {
  const { userInfo, handleSubmit, handleChange, isValid } = useSignUp();
  return (
    <div>
      <SignForm
        isValid={isValid}
        value={userInfo}
        title="회원가입"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default SignUpPage;
