import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./page/MainPage";
import TodoPage from "./page/TodoPage";
import SignUpPage from "./page/SignUpPage";
import SignInPage from "./page/SignInPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "signup",
      element: <SignUpPage />,
    },
    {
      path: "signin",
      element: <SignInPage />,
    },
    {
      path: "/todo",
      element: <TodoPage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
