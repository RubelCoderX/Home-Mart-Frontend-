import Home from "@/components/Home/Home/Home";
import Main from "@/components/layout/Main";
import AboutUs from "@/pages/AboutUs/AboutUs";
import CartPage from "@/pages/CartPage/CartPage";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import Products from "@/pages/Products/Products";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "product-management",
        element: <ProductManagement></ProductManagement>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "cart-items",
        element: <CartPage></CartPage>,
      },
    ],
  },
]);

export default router;
