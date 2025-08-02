import React from "react";

const Coupon = () => {
  return (
    <>
      {/* Coupon Section */}
      <div
        className="coupon-section p-10 text-center mx-5 my-8 rounded-xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-4">10% OFF Discount</h2>
        <div className="coupon-box bg-gradient-to-br from-gray-50 to-gray-200 p-6 rounded-lg inline-block my-5 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 shadow-md">
          <p className="text-lg font-medium text-gray-800">
            Use code: <span className="font-bold text-rose-500">SALE10</span>
          </p>
          <p className="text-gray-600 mt-2">Valid until December 31, 2025</p>
        </div>
        <p className="text-lg mb-6">
          Subscribe to get 10% OFF on all purchases
        </p>
        <div className="email-subscribe flex justify-center mt-5">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 border border-gray-300 rounded-l-full w-80 focus:outline-none focus:border-primary transition-colors duration-300"
          />
          <button className="bg-rose-500 text-white px-6 py-3 rounded-r-full font-medium hover:bg-rose-600 transition-colors duration-300">
            EMAIL ME
          </button>
        </div>
      </div>
    </>
  );
};

export default Coupon;
