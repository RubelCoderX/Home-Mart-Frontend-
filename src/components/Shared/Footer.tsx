import { Link } from "react-router-dom";
import logo from "../../assets/logo/camper_logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <footer className="container mx-auto p-5 text-black flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="md:h-20 h-10 rounded-full" />
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full md:w-auto">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h1 className="font-bold mb-2">Customer Care</h1>
            <div>
              <Link to="/product-details" className="block mb-1">
                Product Details
              </Link>
              <Link to="/product-details" className="block mb-1">
                Product Details
              </Link>
              <Link to="/product-details" className="block mb-1">
                Product Details
              </Link>
            </div>
          </div>
          <div className="mb-4 md:mb-0 md:mr-8">
            <h1 className="font-bold mb-2">Services</h1>
            <div>
              <Link to="/product-details" className="block mb-1">
                Service 1
              </Link>
              <Link to="/product-details" className="block mb-1">
                Service 2
              </Link>
              <Link to="/product-details" className="block mb-1">
                Service 3
              </Link>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <h1 className="font-bold mb-2">Customer Care</h1>
            <div>
              <Link to="/product-details" className="block mb-1">
                Product Details
              </Link>
              <Link to="/product-details" className="block mb-1">
                Product Details
              </Link>
              <Link to="/product-details" className="block mb-1">
                Product Details
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
