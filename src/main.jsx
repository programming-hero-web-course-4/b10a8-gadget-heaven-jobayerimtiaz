import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./assets/Components/Root/Root";
import Home from "./assets/Components/Home/Home";
import Dashboard from "./assets/Components/Dashboard/Dashboard";
import Statistics from "./assets/Components/Statistics/Statistics";
import ProductButtons from "./assets/Components/ProductButtons/ProductButtons";
import ProductDetails from "./assets/Components/ProductDetails/ProductDetails";
import Cart from "./assets/Components/Cart/Cart";
import Wishlist from "./assets/Components/Wishlist/Wishlist";
import { ToastContainer } from "react-toastify";
import GadgetDoctor from "./assets/Components/GadgetDoctor/GadgetDoctor";
import { HelmetProvider } from "react-helmet-async";

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
        path: "gadgets/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/gadget.json"),
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true,
            element: <Cart></Cart>,
            loader: () => fetch("/gadget.json"),
          },
          {
            path: "cart",
            element: <Cart></Cart>,
            loader: () => fetch("/gadget.json"),
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
            loader: () => fetch("/gadget.json"),
          },
        ],
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/gadget.json"),
      },
      // {
      //   path: "category",
      //   element: <ProductButtons></ProductButtons>,
      //   loader: () => fetch("/gadget.json"),
      // },
      {
        path: "gadgetDoctor",
        element: <GadgetDoctor></GadgetDoctor>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" autoClose={1000}></ToastContainer>
  </StrictMode>
);
