import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const donationCreateRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <section>
        <div>nav</div>
        <Outlet></Outlet>
      </section>
    ),
    children: [
      {
        path: "/",
        element: <div>Home</div>,
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
