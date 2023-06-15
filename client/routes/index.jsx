import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Homepage";
import MenuDetailPage from "../pages/MenuDetail";
import Layout from "../pages/LayoutPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menus/:id",
        element: <MenuDetailPage />,
      },
    ],
  },
]);

export default router;
