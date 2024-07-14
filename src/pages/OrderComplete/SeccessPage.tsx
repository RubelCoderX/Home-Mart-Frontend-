import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="container mx-auto mt-40 text-center">
      <h1 className="text-2xl font-bold mb-6">Order Placed Successfully!</h1>
      <p className="mb-6">
        Thank you for your purchase. Your order has been placed successfully.
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
