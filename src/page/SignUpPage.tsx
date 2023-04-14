import useSignUp from "../hooks/auth/useSignUp";
import SignForm from "../components/common/form/SignForm";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const { userInfo, handleSubmit, handleChange, isValid } = useSignUp();
  return (
    <div className="page">
      <SignForm
        isValid={isValid}
        value={userInfo}
        title="회원가입"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Link to={"/signin"}>로그인 하러 가기</Link>
    </div>
  );
};

export default SignUpPage;
