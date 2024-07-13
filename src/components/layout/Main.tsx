import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useAppSelector } from "@/redux/hook";

const Main = () => {
  const cart = useAppSelector((state) => state.cart);

  window.onbeforeunload = function (event) {
    if (cart.items.length > 0) {
      event.preventDefault();
      event.returnValue = "";
      return "Are you sure you want to refresh? Your cart data will be lost.";
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
