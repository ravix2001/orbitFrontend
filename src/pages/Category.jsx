import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Product from "../components/Product";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      fetchProductsByCategory(selectedCategoryId);
    }
  }, [selectedCategoryId]);

  async function fetchCategories() {
    try {
      const response = await axios.get("http://localhost:8080/api/category");
      if (response.status === 200) {
        setCategories(response.data);
      } else {
        alert("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  async function fetchProductsByCategory(categoryId) {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/product/category/${categoryId}`
      );
      if (response.status === 200) {
        setProducts(response.data);
      } else {
        alert("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <>
      <Navbar />

      <div className="px-5 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategoryId === category.id
                    ? "bg-primary text-white"
                    : "bg-white text-primary border-primary"
                } hover:bg-primary hover:text-white transition`}
                onClick={() => setSelectedCategoryId(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="featured-section text-center">
          <div className="section-header flex justify-between items-center mb-10">
            <h2 className="text-2xl font-semibold">
              {selectedCategoryId
                ? `Products in ${categories.find((c) => c.id === selectedCategoryId)?.name}`
                : "Select a category to view products"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  productId={product.productId}
                  name={product.name}
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
                  productReviews={product.reviews}
                />
              ))
            ) : (
              <p className="col-span-full text-gray-500">
                {selectedCategoryId ? "No products found in this category." : ""}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
