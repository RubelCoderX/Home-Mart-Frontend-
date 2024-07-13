import { setSticky, toggoleMenu } from "@/redux/features/navbar/navbarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import logo from "../../assets/logo/camper_logo.png";

// import menuicon from react icons
import { HiMenu, HiOutlineShoppingCart, HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { isMenuOpen, isSticky } = useAppSelector((state) => state.navbar);
  const { totalQuantity } = useAppSelector((state) => state.cart);

  // function for making navbar sticky when scrolling
  useEffect(() => {
    const handleScroll = () => {
      dispatch(setSticky(window.scrollY > 0));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mb-40 bg-white shadow-md">
      <nav
        className={`container mx-auto py-4 px-4 md:px-12 flex justify-between items-center transition-all duration-300 ${
          isSticky ? "bg-white shadow-lg" : ""
        }`}
      >
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 md:h-20" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <Link className="hover:text-gray-700" to="/products">
            Products
          </Link>
          <Link className="hover:text-gray-700" to="/product-management">
            Product Management
          </Link>
          <Link className="hover:text-gray-700" to="/about-us">
            About Us
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full py-1 px-4"
            />
            <button className="absolute right-2 top-2 text-gray-400">
              <HiSearch />
            </button>
          </div>
          <div className="relative">
            <Link
              to="/cart-items"
              className="text-body text-2xl flex items-center"
            >
              <HiOutlineShoppingCart />
              {totalQuantity > 0 && (
                <div className="ml-2 bg-red-500 text-white w-4 h-4 text-xs rounded-full flex items-center justify-center -top-2 -right-2 absolute">
                  {totalQuantity}
                </div>
              )}
            </Link>
          </div>
        </div>
        <button
          onClick={() => dispatch(toggoleMenu())}
          className="lg:hidden text-3xl"
        >
          <HiMenu />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="flex flex-col items-start space-y-4 py-4 px-6">
            <Link
              className="block w-full py-2 px-4 hover:bg-gray-100"
              to="/product-details"
            >
              Product Details
            </Link>
            <Link
              className="block w-full py-2 px-4 hover:bg-gray-100"
              to="/product-management"
            >
              Product Management
            </Link>
            <Link
              className="block w-full py-2 px-4 hover:bg-gray-100"
              to="/about-us"
            >
              About Us
            </Link>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full py-1 px-4 w-full"
              />
              <button className="absolute right-4 top-2 text-gray-400">
                <HiSearch />
              </button>
            </div>
            <Link
              to="/cart-items"
              className="text-body text-2xl w-full text-left flex items-center"
            >
              <HiOutlineShoppingCart />{" "}
              <span className="bg-red-600">({totalQuantity})</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
