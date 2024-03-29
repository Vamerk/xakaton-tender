import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import DefaultLayout from "./layout/DefaultLayout";

import Dashboard from "./views/dashboard/index.jsx";
import Analytics from "./views/dashboard/Analytics.jsx";
import Tender from "./views/dashboard/Tender.jsx";
import Profile from "./views/dashboard/Profile.jsx";
import Settings from "./views/dashboard/Settings.jsx";
import Login from "./views/auth/Login.jsx";
import Register from "./views/auth/Register.jsx";
import ForgotPassword from "./views/auth/ForgotPassword.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "analytics",
            element: (
              <DefaultLayout>
                <Analytics />
              </DefaultLayout>
            ),
          },
          {
            path: "tenders",
            element: (
              <DefaultLayout>
                <Tender />
              </DefaultLayout>
            ),
          },
          {
            path: "profile",
            element: (
              <DefaultLayout>
                <Profile />
              </DefaultLayout>
            ),
          },
          {
            path: "settings",
            element: (
              <DefaultLayout>
                <Settings />
              </DefaultLayout>
            ),
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
