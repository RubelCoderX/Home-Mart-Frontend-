import { useState } from "react";
import {
  MdMenu,
  MdClose,
  MdDashboard,
  MdPerson,
  MdAdd,
  MdShoppingCart,
  MdStore,
} from "react-icons/md";
import Profile from "./Profile";
import AddItem from "./AddItem";
import Order from "./Order";
import Dashboard from "./Dashboard";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { logOut } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import userApi from "@/redux/features/user/userApi";
import UserProfile from "./User/UserProfile";
import UserOrder from "./User/UserOrder";
import UserDashBoard from "./User/UserDashBoard";

const SellerDashboard = () => {
  const dispatch = useDispatch();
  const { data: userData } = userApi.useGetMeQuery(undefined);

  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  const userRole = userData?.data?.role;

  const renderContent = () => {
    // Check user role and render content accordingly
    if (userRole === "seller") {
      switch (activeSection) {
        case "profile":
          return <Profile />;
        case "addItem":
          return <AddItem />;
        case "orders":
          return <Order />;
        case "products":
          return <ProductManagement />;
        default:
          return <Dashboard />;
      }
    } else {
      // Assuming user role is not seller
      switch (activeSection) {
        case "profile":
          return <UserProfile />;
        case "orders":
          return <UserOrder />;
        default:
          return <UserDashBoard />;
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Mobile Toggle Button */}
      <div className="flex justify-between items-center bg-gray-800 text-white p-4 md:hidden">
        <h1 className="text-xl">Dashboard</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white focus:outline-none"
        >
          {sidebarOpen ? (
            <MdClose className="text-2xl" />
          ) : (
            <MdMenu className="text-2xl" />
          )}
        </button>
      </div>

      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out z-10`}
        >
          <nav className="sticky h-screen top-0">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveSection("dashboard")}
                  className={`flex items-center w-full px-4 py-2 rounded-md ${
                    activeSection === "dashboard"
                      ? "bg-gray-900"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <MdDashboard className="mr-3" />
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("profile")}
                  className={`flex items-center w-full px-4 py-2 rounded-md ${
                    activeSection === "profile"
                      ? "bg-gray-900"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <MdPerson className="mr-3" />
                  Profile
                </button>
              </li>
              {userRole === "seller" && (
                <li>
                  <button
                    onClick={() => setActiveSection("addItem")}
                    className={`flex items-center w-full px-4 py-2 rounded-md ${
                      activeSection === "addItem"
                        ? "bg-gray-900"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    <MdAdd className="mr-3" />
                    Add Item
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() => setActiveSection("orders")}
                  className={`flex items-center w-full px-4 py-2 rounded-md ${
                    activeSection === "orders"
                      ? "bg-gray-900"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <MdShoppingCart className="mr-3" />
                  Orders
                </button>
              </li>
              {userRole === "seller" && (
                <li>
                  <button
                    onClick={() => setActiveSection("products")}
                    className={`flex items-center w-full px-4 py-2 rounded-md ${
                      activeSection === "products"
                        ? "bg-gray-900"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    <MdStore className="mr-3" />
                    Product Management
                  </button>
                </li>
              )}
              <li>
                <Link
                  to="/"
                  className="flex items-center w-full px-4 py-2 rounded-md"
                >
                  <FaHome className="mr-3" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 rounded-md"
                >
                  <FaHome className="mr-3" />
                  LogOut
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-grow p-4 overflow-y-auto max-h-screen transition-all duration-300 ease-in-out ${
            sidebarOpen ? "opacity-80" : "opacity-100"
          }`}
        >
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default SellerDashboard;
