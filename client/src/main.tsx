import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalculatorPage from "./pages/CalculatorPage/index.tsx";
import React from "react";
import LandingPage from "./pages/LandingPage/index.tsx";
import { PATH } from "./utils/pageRoutes.ts";

const router = createBrowserRouter([
  {
    path: PATH.LANDING,
    element: <LandingPage />,
  },
  {
    path: PATH.CALCULATOR,
    element: <CalculatorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
