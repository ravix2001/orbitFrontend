import React from "react";
import { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";

import Navbar from "../components/Navbar";

const Products = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await axios.get(
      "http://localhost:8080/api/product/paginated" // we will replace paginated with featuredProducts later
    );
    console.log(response.data);
    if (response.status == 200) {
      setProducts(response.data.content);
    } else {
      alert("Failed to fetch products");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="featured-section px-5 py-10 text-center">
        <div className="section-header flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">PRODUCTS</h2>
          {/* <a href="#" className="text-primary font-medium hover:underline">
            VIEW ALL
          </a> */}
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                productId={product.productId}
                productName={product.name}
                brand={product.brand}
                description={product.description}
                images={product.images}
                quantity={product.quantity}
                color={product.color}
                size={product.size}
                marketPrice={product.marketPrice}
                sellingPrice={product.sellingPrice}
                numRatings={product.numRatings}
                avgRatings={product.avgRatings}
                categoryName={product.categoryName}
                // productReviews={product.reviews}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
