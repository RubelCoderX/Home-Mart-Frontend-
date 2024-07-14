/* eslint-disable @typescript-eslint/no-explicit-any */
import productApi from "@/redux/features/product/productApi";
import { GoArrowRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProducts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { data, error, isLoading } = productApi.useGetAllProductsQuery({
    search: "",
    sortBy: "",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  const features = data?.data?.slice(0, 4);
  return (
    <div>
      <div className="best-selling-products">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Products Collection
          </h2>
          <Link
            to="/products"
            className="flex items-center text-primary hover:text-primary-dark"
          >
            <span className="mr-2">See All</span>
            <GoArrowRight className="text-xl" />
          </Link>
        </div>

        <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features &&
            features.map((product: any, index: any) => (
              <ProductCard {...product} key={index}></ProductCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
