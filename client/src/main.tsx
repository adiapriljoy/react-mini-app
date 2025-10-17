import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalculatorPage from "./pages/CalculatorPage/index.tsx";
import React from "react";
import LandingPage from "./pages/LandingPage/index.tsx";
import { PATH } from "./utils/pageRoutes.ts";
import MainLayout from "./layout/MainLayout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import TodoPage from "./pages/TodoPage/index.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: PATH.LANDING,
        element: <LandingPage />,
      },
      {
        path: PATH.CALCULATOR,
        element: <CalculatorPage />,
      },
      {
        path: PATH.TODO,
        element: <TodoPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
