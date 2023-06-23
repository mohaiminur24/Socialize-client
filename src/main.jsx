import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthLayout from "./Components/AuthLayout/AuthLayout";
import { RouterProvider } from "react-router-dom";
import route from "./Components/RouteLayout/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthLayout>
      <RouterProvider router={route}/>
    </AuthLayout>
  </React.StrictMode>
);
