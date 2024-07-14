import productApi from "@/redux/features/product/productApi";
import { CategoryType } from "@/types";

import { GoArrowRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

const CategoriesProduct = () => {
  const navigate = useNavigate();
  const { data } = productApi.useGetAllProductsQuery({
    search: "",
    sortBy: "",
  });

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="categories-product-section py-8 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Top Categories</h2>
          <Link
            to="/products"
            className="flex items-center text-primary hover:text-primary-dark"
          >
            <span className="mr-2">See All</span>
            <GoArrowRight className="text-xl" />
          </Link>
        </div>

        <div className="flex flex-wrap   justify-center sm:justify-start items-center">
          {data?.data.map((category: CategoryType) => (
            <div
              key={category.id}
              className="category-card flex flex-col items-center text-center cursor-pointer m-4"
              onClick={() => handleCategoryClick(category.category)}
            >
              <img
                src={category.images}
                alt={category.category}
                className="category-icon w-16 h-16 mb-2 rounded-full"
              />
              <h3 className="text-lg font-semibold">{category.category}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesProduct;
