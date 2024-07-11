import Home from "@/components/Home/Home/Home";
import Main from "@/components/layout/Main";
import AboutUs from "@/pages/AboutUs/AboutUs";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";

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
        path: "product-details",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

export default router;
