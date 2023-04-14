import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../../utils/localStorage";

interface AuthCheckerProps {
  children: React.ReactNode;
}

const AuthChecker = ({ children }: AuthCheckerProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (getLocalStorage("token")) {
      (pathname === "/" || pathname === "/signin" || pathname === "/signup") &&
        navigate("/todo");
    } else {
      pathname === "/todo" && navigate("/signin");
    }
  }, [pathname, navigate]);

  return <>{children}</>;
};

export default AuthChecker;
