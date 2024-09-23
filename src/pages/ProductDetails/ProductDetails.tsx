/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import productApi from "@/redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";
import { setProduct } from "@/redux/features/product/productSlice";
import { addToCart } from "@/redux/features/cartSlice/carSlice";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const {
    data: product,
    error,
    isLoading,
  } = productApi.useGetProductByIdQuery(id);

  useEffect(() => {
    if (product) {
      dispatch(setProduct(product));
    }
  }, [product, dispatch]);

  const handleAddToCart = (product: any) => {
    const cartItem = cartItems.find((item) => item._id === product.data._id);
    if (!cartItem || (cartItem && cartItem.quantity < product.stock)) {
      dispatch(addToCart(product.data));
      toast.success("Product added to cart!", { position: "top-center" });
    } else {
      toast.error(
        "Product added to cart only once. You can add more quantity!",
        {
          position: "top-center",
        }
      );
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const cartItem = cartItems.find((item) => item._id === product?.data._id);

  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      {/* Product container */}
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-6 lg:space-x-8 space-y-6 lg:space-y-0">
        {/* Product image */}
        <div className="lg:w-1/2">
          <img
            src={product?.data.images} // Assuming the first image is to be displayed
            alt={product?.data.name}
            className="w-full h-96 object-cover rounded-lg shadow-md mb-4"
          />
        </div>
        {/* Product details */}
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-4xl font-semibold text-gray-800">
            {product?.data.name}
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-2xl">
              ★ {product?.data.rating}
            </span>
            <a href="#reviews" className="text-blue-500 underline">
              {product?.data.reviewCount} reviews
            </a>
          </div>
          <p className="text-gray-600">{product?.data.description}</p>

          <div className="space-y-4">
            <p className="text-3xl text-gray-900 font-bold">
              Rs. {product?.data.price}
            </p>
            <p className="text-md text-gray-700">
              Stock: {product?.data.stock}
            </p>

            {/* Conditionally render size for clothes category */}
            {product?.data.category === "Clothes" && (
              <div className="flex items-center space-x-2">
                <p className="text-md text-gray-700">Size:</p>
                <div className="flex space-x-4 cursor-pointer">
                  {["S", "M", "L", "XL"].map((size) => (
                    <span
                      key={size}
                      className={`px-4 py-2 border rounded-md text-sm ${
                        selectedSize === size
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-700"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <p className="text-md text-gray-700">
            Category: {product?.data.category}
          </p>

          {/* Add to Cart button */}
          <button
            onClick={() => handleAddToCart(product)}
            disabled={!cartItem?.quantity >= product?.data.stock}
            className={`px-6 py-3 rounded-md text-white ${
              !cartItem?.quantity >= product?.data.stock
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            {!cartItem?.quantity >= product?.data.stock
              ? "Out of Stock"
              : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Additional product information (Reviews, Policies, etc.) */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Additional Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Shipping Policy</h4>
            <p className="text-gray-600">
              All products are shipped within 3-5 business days.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Return Policy</h4>
            <p className="text-gray-600">
              Returns are accepted within 30 days of purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
