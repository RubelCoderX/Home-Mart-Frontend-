import BecomeASeller from "@/components/Dashboard/BecomeASeller";
import Home from "@/components/Home/Home/Home";
import Main from "@/components/layout/Main";
import Login from "@/components/Login/Login";
import Register from "@/components/Register/Register";
import AboutUs from "@/pages/AboutUs/AboutUs";
import CartPage from "@/pages/CartPage/CartPage";

import OrderComplete from "@/pages/OrderComplete/OrderComplete";
import SuccessPage from "@/pages/OrderComplete/SeccessPage";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import Products from "@/pages/Products/Products";

import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

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
        element: (
          <ProtectedRoutes>
            <CartPage></CartPage>
          </ProtectedRoutes>
        ),
      },
      {
        path: "order-complete",
        element: <OrderComplete></OrderComplete>,
      },
      {
        path: "success",
        element: <SuccessPage></SuccessPage>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "seller",
    element: (
      <ProtectedRoutes>
        <BecomeASeller />
      </ProtectedRoutes>
    ),
  },
]);

export default router;
