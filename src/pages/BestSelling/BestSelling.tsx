/* eslint-disable @typescript-eslint/no-explicit-any */
import productApi from "@/redux/features/product/productApi";
import AOS from "aos";
import "aos/dist/aos.css";

import "./BestSelling.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import ProductCard from "../ProductCard/ProductCard";
const BestSelling = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { data, error, isLoading } =
    productApi.useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  const products = data?.data?.slice(0, 3);
  console.log(products);

  return (
    <div className="best-selling-products">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">Recommended Products</h2>
        <Link
          to="/products"
          className="flex items-center text-primary hover:text-primary-dark"
        >
          <span className="mr-2">See All</span>
          <GoArrowRight className="text-xl" />
        </Link>
      </div>
      <div className="products-grid">
        {products?.map((product: any, index: any) => (
          <ProductCard
            {...product}
            key={index}
            delay={index * 300}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
