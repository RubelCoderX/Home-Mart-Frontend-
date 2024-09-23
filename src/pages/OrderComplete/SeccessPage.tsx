import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const SuccessPage = () => {
  const orderId = "123456";
  return (
    <div className="container mx-auto mt-40 text-center bg-gray-800 p-10 text-white">
      <div className="flex justify-center mb-4">
        {" "}
        {/* Centering the icon */}
        <FaCheckCircle className="text-green-500 text-6xl" />
      </div>
      <h1 className="text-2xl font-bold mb-6">Order Placed Successfully!</h1>
      <p className="mb-2">
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      <p className="mb-6">
        Your order ID is: <strong>{orderId}</strong>
      </p>
      <Link to="/products">
        <button className="px-6 py-3 rounded bg-blue-500 text-white">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default SuccessPage;
