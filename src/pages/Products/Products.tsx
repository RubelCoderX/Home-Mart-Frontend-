/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import productApi from "@/redux/features/product/productApi";
import { useCallback, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "../ProductCard/ProductCard";
import { TProduct } from "@/types";
import { useLocation } from "react-router-dom";

const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const query = useQuery();
  const category = query.get("category") || "";
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const { data, isLoading } = productApi.useGetAllProductsQuery({
    search: searchTerm,
    sortBy,
    category,
  });

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
    }, 800),
    []
  );

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
        <div>
          <label
            htmlFor="search"
            className="block text-sm font-medium mb-2 text-gray-700"
          >
            Search by name or description
          </label>
          <input
            id="search"
            type="search"
            defaultValue={searchTerm}
            onChange={(e) => debouncedSearch(e.target.value)}
            placeholder="Search..."
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label
            htmlFor="sort"
            className="block text-sm font-medium mb-2 text-gray-700"
          >
            Sort by price
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border rounded-md w-full"
          >
            <option value="">All</option>
            <option value="1">Price: Low to High</option>
            <option value="-1">Price: High to Low</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-500">No products found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product._id} {...product} delay={index * 300} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
