import productApi from "@/redux/features/product/productApi";
import Swal from "sweetalert2";
import UpdateProduct from "./updateProduct";
import { ProductListProps } from "@/types";
import { MdDeleteOutline } from "react-icons/md";

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
        await deleteProductMutation(productId);
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full bg-white rounded-md shadow-md">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 p-3 border-b bg-gray-100">
          <p className="font-semibold col-span-1 sm:col-span-2 md:col-span-1">
            Product Image
          </p>
          <p className="font-semibold col-span-1">Name</p>
          <p className="font-semibold col-span-1">Price</p>
          <p className="font-semibold col-span-1">Category</p>
          <p className="font-semibold col-span-1">Stock</p>
          <p className="font-semibold col-span-2 sm:col-span-1">Actions</p>
        </div>
        {products.map((product) => (
          <div
            key={product._id}
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 p-3 border-b"
          >
            <div className="flex items-center justify-center col-span-2 sm:col-span-2 md:col-span-1">
              <img
                src={product.images}
                alt={product.name}
                className="h-16 w-16 object-cover rounded-full"
              />
            </div>
            <p className="flex items-center col-span-1 font-semibold">
              {product.name}
            </p>
            <p className="flex items-center col-span-1">${product.price}</p>
            <p className="flex items-center col-span-1 font-semibold">
              {product.category}
            </p>
            <p className="flex items-center col-span-1">{product.stock}</p>
            <div className="flex items-center col-span-2 sm:col-span-2 md:col-span-1 space-x-4">
              <UpdateProduct product={product} />
              <span
                onClick={() => product._id && handleDelete(product._id)}
                className="px-2 py-1 bg-red-500 text-2xl text-white rounded-md hover:bg-red-600 cursor-pointer"
              >
                <MdDeleteOutline />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
