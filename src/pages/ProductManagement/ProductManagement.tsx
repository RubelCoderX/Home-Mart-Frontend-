import { TProduct } from "@/types";
import AddProductModal from "./AddProductModal";
import ProductList from "./ProductList";
import productApi from "@/redux/features/product/productApi";

const ProductManagement = () => {
  const { data, isLoading } = productApi.useGetAllProductsQuery({
    search: "",
    sortBy: "",
  });
  const products: TProduct[] = data?.data ?? [];
  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="container mx-auto mt-40">
      <AddProductModal></AddProductModal>
      <div>
        <div className=" w-full  rounded-xl mb-60">
          <ProductList products={products}></ProductList>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
