import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo/homeLogo.png";

const Footer = () => {
  return (
    <div className="bg-[#202020] text-gray-300 mt-20">
      <footer className="container mx-auto p-12 flex flex-col md:flex-row justify-between">
        <div className="flex-1 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <img src={logo} alt="Logo" className="md:h-24 h-10 rounded-full" />
            <h2 className="ml-2 text-xl font-bold text-white">Home Mart</h2>
          </div>
          <p>
            Discover quality outdoor gear and accessories for your adventures.{" "}
            <br />
            Join us in exploring the great outdoors
          </p>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2 text-white">Quick Links</h3>
            <Link to="/" className="block hover:text-white">
              Home
            </Link>
            <Link to="/about-us" className="block hover:text-white">
              About
            </Link>

            <Link to="/products" className="block hover:text-white">
              Shop
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-white">Category</h3>
            <Link to="/products" className="block hover:text-white">
              Jewellry
            </Link>
            <Link to="/products" className="block hover:text-white">
              Crafts
            </Link>
            <Link to="/products" className="block hover:text-white">
              Decoratives
            </Link>
            <Link to="/products" className="block hover:text-white">
              Clothing
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2">Phone : +91 7367889530</p>
            <p className="mb-2">Email : shriaakarshgaya@gmail.com</p>
            <p>Address : Vadodara</p>
          </div>
        </div>
      </footer>
      <div className="border-t border-gray-600 my-8"></div>
      <div className="flex justify-center items-center space-x-4 pb-8">
        <a
          href="https://www.facebook.com/shabd.sinha.90?mibextid=LQQJ4d"
          className="text-gray-300 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
        </a>

        <a
          href="https://www.instagram.com/shabd_sinha/profilecard/?igsh=MWpuOGxvb2dtNDc2Zg=="
          className="text-gray-300 hover:text-red-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <div className="text-center pb-4">
        <p>Home Mart © 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
