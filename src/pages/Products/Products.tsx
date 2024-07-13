/* eslint-disable @typescript-eslint/no-explicit-any */
import productApi from "@/redux/features/product/productApi";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "../ProductCard/ProductCard";
import { TProduct } from "@/types";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const { data, error, isLoading } = productApi.useGetAllProductsQuery({
    search: searchTerm,
    sortBy,
  });

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  const products = data?.data as TProduct[];

  return (
    <div className="container mx-auto p-6 mt-40">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Products</h1>
        <button
          onClick={() => {
            setSearchTerm("");
            setSortBy("");
          }}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
        >
          Clear Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name or description"
          className="p-2 border rounded-md"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">All</option>
          <option value="1">Price: Low to High</option>
          <option value="-1">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product: TProduct, index) => (
          <ProductCard key={index} {...product} delay={index * 300} />
        ))}
      </div>
    </div>
  );
};

export default Products;
