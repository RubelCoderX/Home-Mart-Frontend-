/* eslint-disable @typescript-eslint/no-explicit-any */
import { setSticky, toggoleMenu } from "@/redux/features/navbar/navbarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import logo from "../../assets/logo/homeLogo.png";
import { useEffect } from "react";
import { HiMenu, HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

import userApi from "@/redux/features/user/userApi";
import { toast } from "sonner";

const Navbar = () => {
  const { data: getMe } = userApi.useGetMeQuery(undefined);
  const dispatch = useAppDispatch();
  const { isMenuOpen, isSticky } = useAppSelector((state) => state.navbar);
  const { totalQuantity } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const [becomeSeller] = userApi.useBecomeASellerMutation();

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      dispatch(setSticky(window.scrollY > 0));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  const user = getMe?.data;
  console.log(user);
  console.log(user?.photoUrl);

  // Become a seller and redirect to the dashboard
  const handleBecomeSeller = async () => {
    try {
      const res = await becomeSeller({}).unwrap();
      toast.success(res.message);
      navigate("/seller"); // Redirect to the seller dashboard after success
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav
        className={`container mx-auto py-4 px-4 md:px-12 flex justify-between items-center transition-all duration-300 ${
          isSticky ? "bg-white shadow-lg" : ""
        }`}
      >
        <div className="flex items-center">
          <Link to="/">
            <img className="h-20 w-24" src={logo} alt="" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link className="hover:text-gray-700 font-semibold" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-700 font-semibold" to="/products">
            Shop
          </Link>
          <Link className="hover:text-gray-700 font-semibold" to="/about-us">
            About Us
          </Link>

          {!user?.role || user.role !== "seller" ? (
            <button
              onClick={handleBecomeSeller}
              disabled={!user}
              className={`inline-block border-2 text-black font-semibold py-1 px-2 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 ${
                !user ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Become A Seller
            </button>
          ) : (
            <Link
              to="/seller"
              className="inline-block border-2 text-black font-semibold py-1 px-2 rounded"
            >
              Dashboard
            </Link>
          )}

          {/* Show profile or login */}
          <div className="relative">
            {user ? (
              <Link to="/seller" className="flex items-center">
                {user.photoUrl && (
                  <img
                    src={user.photoUrl}
                    // alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span className="ml-2">{user.name}</span>
              </Link>
            ) : (
              <Link to="/login" className="hover:text-gray-700">
                <button className="ml-2 border px-4 py-1 border-black hover:bg-blue-700 hover:text-white">
                  Log In
                </button>
              </Link>
            )}
          </div>

          <div className="relative">
            <Link
              to="/cart-items"
              className="text-body text-2xl flex items-center"
            >
              <HiOutlineShoppingCart />
              {totalQuantity > 0 && (
                <div className="bg-red-500 text-white w-6 h-6 text-xs rounded-full flex items-center justify-center -top-2 -right-2 absolute">
                  {totalQuantity}
                </div>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => dispatch(toggoleMenu())}
          className="lg:hidden text-3xl"
        >
          <HiMenu />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="flex flex-col items-start space-y-4 py-4 px-6">
            <Link
              className="block w-full py-2 px-4 hover:bg-gray-100 font-semibold"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block w-full py-2 px-4 hover:bg-gray-100 font-semibold"
              to="/products"
            >
              Shop
            </Link>
            <Link
              className="block w-full py-2 px-4 hover:bg-gray-100 font-semibold"
              to="/about-us"
            >
              About Us
            </Link>

            {!user?.role || user.role !== "seller" ? (
              <button
                onClick={handleBecomeSeller}
                disabled={!user} // Disable the button if the user is not logged in
                className={`inline-block border-2 text-black font-semibold py-1 px-2 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 ${
                  !user ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Become A Seller
              </button>
            ) : (
              <Link
                to="/seller"
                className="inline-block border-2 text-black font-semibold py-1 px-2 rounded"
              >
                Dashboard
              </Link>
            )}

            <div className="relative w-full text-left">
              {user ? (
                <Link to="/profile" className="flex items-center w-full">
                  <img
                    src={user.photoUrl}
                    // alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />

                  <span className="ml-2">{user.name}</span>
                </Link>
              ) : (
                <Link to="/login" className="hover:text-gray-700 w-full">
                  <button className="ml-2 border px-4 py-1 border-black hover:bg-blue-700 hover:text-white">
                    Log In
                  </button>
                </Link>
              )}
            </div>

            <div className="w-full text-left flex items-center">
              <Link
                to="/cart-items"
                className="text-body text-2xl w-full flex items-center"
              >
                <HiOutlineShoppingCart />
                {totalQuantity > 0 && (
                  <div className="ml-2 bg-red-500 text-white w-4 h-4 text-xs rounded-full flex items-center justify-center">
                    {totalQuantity}
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
