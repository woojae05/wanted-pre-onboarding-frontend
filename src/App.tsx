// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthChecker from "./components/common/authChecker/Authchecker";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <AuthChecker>
      <Outlet />
    </AuthChecker>
  );
}

export default App;
