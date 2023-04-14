import { Link } from "react-router-dom";
import SignForm from "../components/common/form/SignForm";
import useSignIn from "../hooks/auth/useSignIn";

const SignInPage = () => {
  const { isValid, formData, handleChange, handleSubmit } = useSignIn();
  return (
    <div className="page">
      <SignForm
        value={formData}
        isValid={isValid}
        title={"로그인"}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Link to={"/signup"}>회원가입 하러 가기</Link>
    </div>
  );
};

export default SignInPage;
