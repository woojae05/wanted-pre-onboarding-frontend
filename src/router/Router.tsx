import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import TodoPage from "../page/TodoPage";
import SignUpPage from "../page/SignUpPage";
import SignInPage from "../page/SignInPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Navigate to="/signin" /> },
        { path: "/signin", element: <SignInPage /> },
        { path: "/signup", element: <SignUpPage /> },
        { path: "/todo", element: <TodoPage /> },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default router;
