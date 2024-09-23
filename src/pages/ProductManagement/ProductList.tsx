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
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product Image
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="bg-white border-b">
              <td className="px-6 py-4">
                <img
                  src={product.images}
                  alt={product.name}
                  className="h-16 w-16 object-cover rounded"
                />
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                {product.name}
              </td>
              <td className="px-6 py-4">Rs. {product.price}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">{product.stock}</td>
              <td className="px-6 py-4 flex space-x-4">
                <UpdateProduct product={product} />
                <span
                  onClick={() => product._id && handleDelete(product._id)}
                  className="text-red-500 cursor-pointer hover:text-red-600"
                >
                  <MdDeleteOutline className="text-3xl cursor-pointer" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
