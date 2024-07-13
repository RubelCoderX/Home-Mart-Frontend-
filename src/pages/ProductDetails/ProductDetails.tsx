import { useParams } from "react-router-dom";
import productApi from "@/redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { setProduct } from "@/redux/features/product/productSlice";
import { addToCart } from "@/redux/features/cartSlice/carSlice";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

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

  const handleAddToCart = (product) => {
    const cartItem = cartItems.find((item) => item._id === product.data._id);
    if (!cartItem || (cartItem && cartItem.quantity < product.stock)) {
      dispatch(addToCart(product.data));
      toast.success("Product added to cart!", { position: "top-center" });
    } else {
      toast.error("Product is out of stock or limit reached!", {
        position: "top-right",
      });
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
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={product?.data.images} // Assuming the first image is to be displayed
            alt={product?.data.name}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-3xl font-bold mb-4">{product?.data.name}</h2>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-xl mr-2">
              ★ {product?.data.rating}
            </span>
            <a href="#reviews" className="text-blue-500 underline">
              {product?.data.reviewCount} reviews
            </a>
          </div>
          <p className="text-md text-gray-700 mb-4">
            {product?.data.description}
          </p>
          <div className=" space-y-4">
            <p className="text-2xl text-gray-800">${product?.data.price}</p>
            <p className="text-md text-gray-700">
              Stock: {product?.data.stock}
            </p>
          </div>
          <p className="text-md text-gray-700 mb-6">
            Category: {product?.data.category}
          </p>

          <button
            onClick={() => handleAddToCart(product)}
            disabled={cartItem?.quantity >= product?.data.stock}
            className={`px-6 py-3 rounded-md text-white ${
              cartItem?.quantity >= product?.data.stock
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            {cartItem?.quantity >= product?.data.stock
              ? "Out of Stock"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
