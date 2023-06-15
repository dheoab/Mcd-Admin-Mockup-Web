import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage";
import NavbarMcd from "../src/components/Navbar";
import DashboardPage from "../src/pages/Dashboard";
import AddMenuPage from "../src/pages/AddMenusPage";
import Layout from "../src/pages/Layout";
import EditMenuPage from "../src/pages/EditMenuPage";
import CategoryPage from "../src/pages/CategoryPage";
import AddCategoryPage from "../src/pages/AddCategoryPage";
import EditCategoryPage from "../src/pages/EditCategoryPage";
import RegisterPage from "../src/pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/addmenu",
        element: <AddMenuPage />,
      },
      {
        path: "/menu/:menuId",
        element: <EditMenuPage />,
      },
      {
        path: "/categories",
        element: <CategoryPage />,
      },
      {
        path: "/addcategory",
        element: <AddCategoryPage />,
      },
      {
        path: "/category/:categoryId",
        element: <EditCategoryPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  },
]);

export default router;
