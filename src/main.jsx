import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./assets/Components/Root/Root";
import Home from "./assets/Components/Home/Home";
import Dashboard from "./assets/Components/Dashboard/Dashboard";
import Statistics from "./assets/Components/Statistics/Statistics";
import ProductButtons from "./assets/Components/ProductButtons/ProductButtons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "category",
        element: <ProductButtons></ProductButtons>,
        loader: () => fetch("/gadget.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
