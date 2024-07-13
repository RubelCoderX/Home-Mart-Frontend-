<button
  onClick={() => handleAddToCart(product)}
  disabled={cartItem?.quantity >= product.stock}
  className={`px-4 py-2 rounded-md text-white ${
    cartItem?.quantity >= product.stock
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-blue-500 hover:bg-blue-700"
  }`}
>
  {cartItem?.quantity >= product.stock ? "Out of Stock" : "Add to Cart"}
</button>;

const handleAddToCart = (product: TProduct) => {
  const cartItem = cartItems.find((item) => item.id === product.id);
  if (!cartItem || (cartItem && cartItem.quantity < product.stock)) {
    dispatch(addToCart(product));
  }
};
const cartItem = cartItems.find((item) => item.id === product.id);
