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
  const [selectedCategory, setSelectedCategory] = useState<string>(category);
  const [priceRange, setPriceRange] = useState<number>(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const { data, isLoading } = productApi.useGetAllProductsQuery({
    search: searchTerm,
    sortBy,
    category: selectedCategory,
    price: priceRange,
  });

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
    }, 800),
    []
  );

  const products = data?.data as TProduct[];

  return (
    <div>
      <div className="relative w-full h-80">
        {/* <img
          src={cartBanner}
          alt="Cart Banner"
          className="object-cover w-full h-full"
        /> */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Your Shopping Cart</h1>
        </div>
      </div>
      <div className="container mx-auto p-6 mt-40">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Products</h1>
          <button
            onClick={() => {
              setSearchTerm("");
              setSortBy("");
              setSelectedCategory("");
              setPriceRange(0);
            }}
            className="border-2 hover:text-white text-black py-1 px-4 rounded hover:bg-blue-600 transition duration-300"
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

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Filter by category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border rounded-md w-full"
            >
              <option value="">All Categories</option>
              <option value="Decorative">Decorative</option>
              <option value="clothes">clothes</option>
              <option value="jewellery">jewellery</option>
              <option value="craft">craft</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="priceRange"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Filter by price range
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full mb-2"
            />

            <div className="flex justify-between text-sm text-gray-600">
              <span>Rs{priceRange}</span>
              <span>Rs.{1000}</span>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : products?.length === 0 ? (
          <div className="text-center text-gray-500">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.map((product, index) => (
              <ProductCard key={product._id} {...product} delay={index * 50} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
