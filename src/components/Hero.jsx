import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative h-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Fashion Sale"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in-scale">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SUMMER SALE</h1>
            <p className="text-xl mb-6">Up to 50% off on selected items</p>
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
