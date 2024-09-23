import { TProduct } from "@/types";
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
    <div className="container mx-auto">
      <div className="w-full rounded-xl mb-60">
        <div className="max-h-screen overflow-y-auto md:max-h-none">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
