import product1 from "../../assets/productImg/product1.avif";
import product2 from "../../assets/productImg/product2.avif";
import product3 from "../../assets/productImg/product3.avif";
import product4 from "../../assets/productImg/proudct4.avif";
import "./BestSelling.css";
const BestSelling = () => {
  const products = [
    {
      image: product1,
      title: "Camper Model A",
      description: "Compact and efficient camper for quick getaways.",
      price: "$29,999",
    },
    {
      image: product2,
      title: "Camper Model B",
      description: "Spacious camper with modern amenities.",
      price: "$39,999",
    },
    {
      image: product3,
      title: "Camper Model C",
      description: "Luxury camper with premium features.",
      price: "$49,999",
    },
    {
      image: product4,
      title: "Camper Model D",
      description: "Economical camper with essential features.",
      price: "$19,999",
    },
  ];
  return (
    <div className="best-selling-products">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Best Selling/Recommended Products
      </h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="text-2xl font-semibold">{product.title}</h3>
              <p className="text-md">{product.description}</p>
              <p className="text-xl font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more-container text-center mt-6">
        <a
          href="/products"
          className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-300"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default BestSelling;
