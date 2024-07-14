import productApi from "@/redux/features/product/productApi";
import Swal from "sweetalert2";
import UpdateProduct from "./updateProduct";
import { ProductListProps } from "@/types";

const ProductList = ({ products }: ProductListProps) => {
  const [deleteProductMutation] = productApi.useDeleteProductMutation();

  const handleDelete = async (productId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        {
          await deleteProductMutation(productId);
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full bg-white rounded-md shadow-md">
        <div className="grid grid-cols-6 gap-4 p-3 border-b bg-gray-100">
          <p className="font-semibold">Product Image</p>
          <p className="font-semibold">Name</p>
          <p className="font-semibold">Price</p>
          <p className="font-semibold">Category</p>
          <p className="font-semibold"></p>
          <p className="font-semibold">Action</p>
          <p className="font-semibold">Action</p>
        </div>
        {products.map((product) => (
          <div
            key={product._id}
            className="grid grid-cols-6 gap-4 p-3 border-b"
          >
            <div className="flex items-center justify-center">
              <img
                src={product.images}
                alt={product.name}
                className="h-12 w-12 object-cover rounded-full"
              />
            </div>
            <p className="flex items-center">{product.name}</p>
            <p className="flex items-center">${product.price}</p>
            <p className="flex items-center">{product.category}</p>
            <div className="flex items-center">
              <UpdateProduct product={product}></UpdateProduct>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => product._id && handleDelete(product._id)}
                className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
