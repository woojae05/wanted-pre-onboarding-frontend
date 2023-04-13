import SignForm from "../components/common/form/SignForm";
import useSignIn from "../hooks/auth/useSignIn";

const SignInPage = () => {
  const { isValid, formData, handleChange, handleSubmit } = useSignIn();
  return (
    <div>
      <SignForm
        value={formData}
        isValid={isValid}
        title={"로그인"}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignInPage;
