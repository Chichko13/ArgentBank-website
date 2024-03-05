import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./pages/layout";
import ErrorPage from "./pages/error";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import User from "./pages/user";
import { login } from "./api/loginApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
        action: login,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);

// Redux
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
