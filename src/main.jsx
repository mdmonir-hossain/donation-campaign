import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import MainLayout from "./Components/MainLayout/MainLayout";
import Home from "./Components/Pages/Home";

const donationCreateRoute = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>
    ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch('donation.json')
      },
      {
        path: "/donation",
        element: <div>Donation</div>,
      },
      {
        path: "/statistics",
        element: <div>Statistics</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={donationCreateRoute}></RouterProvider>
  </React.StrictMode>
);
