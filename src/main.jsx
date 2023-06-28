import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthLayout from "./Components/AuthLayout/AuthLayout";
import { RouterProvider } from "react-router-dom";
import route from "./Components/RouteLayout/Route";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthLayout>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
      </QueryClientProvider>
    </AuthLayout>
  </React.StrictMode>
);
