import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = ({ id, images, name, marketPrice, sellingPrice }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Link to={"/productDetails/" + id}>
      <div className="dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Image Carousel */}
        <div className="relative overflow-hidden group">
          <img
            src={images[currentImageIndex]}
            alt={name}
            className="w-full h-64 object-cover"
            loading="lazy"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

          {/* Arrows */}
          {images.length > 1 && (
  <>
    <button
      onClick={handlePrev}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <i className="fas fa-chevron-left"></i>
    </button>
    <button
      onClick={handleNext}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  </>
)}

          {/* Add to Cart */}
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500">
            Add to Cart
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-center">{name}</h3>
          <div className="flex justify-center items-center mt-2">
            <div className="flex text-yellow-400 text-sm">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
          <p className="text-primary font-bold text-xl mt-2 text-center">
            Rs.{sellingPrice}{" "}
            <span className="text-gray-400 text-sm line-through">
              Rs.{marketPrice}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
