import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
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
            <Link to="/home" className="block hover:text-white">
              Home
            </Link>
            <Link to="/about" className="block hover:text-white">
              About
            </Link>
            <Link to="/amenities" className="block hover:text-white">
              Amenities
            </Link>
            <Link to="/shop" className="block hover:text-white">
              Shop
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-white">Category</h3>
            <Link to="/product" className="block hover:text-white">
              Jewellry
            </Link>
            <Link to="/product" className="block hover:text-white">
              Crafts
            </Link>
            <Link to="/product" className="block hover:text-white">
              Decoratives
            </Link>
            <Link to="/product" className="block hover:text-white">
              Clothing
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-white">Contact Info</h3>
            <p className="block">name@example.com</p>
            <p className="block">489 5th Avenue New York NY 10014</p>
            <p className="block">0 800 567 890 00</p>
          </div>
        </div>
      </footer>
      <div className="border-t border-gray-600 my-8"></div>
      <div className="flex justify-center items-center space-x-4 pb-8">
        <a
          href="#"
          className="text-gray-300 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-red-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-red-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={24} />
        </a>
      </div>
      <div className="text-center pb-4">
        <p>Camper Shop © 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
