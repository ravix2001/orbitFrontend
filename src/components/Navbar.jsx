import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-5 py-5 bg-white text-gray-800 dark:bg-gray-800 dark:text-white shadow-md sticky top-0 z-50 ">
        <div className="text-2xl font-bold">ORBIT</div>
        <ul className="flex space-x-8">
          <li className="relative transition-transform duration-300 hover:scale-108">
            <a href="/" className="nav-link font-medium hover:text-rose-400">
              Home
            </a>
          </li>
          <li className="relative transition-transform duration-300 hover:scale-108">
            <a href="/men" className="nav-link font-medium hover:text-rose-400">
              Men
            </a>
          </li>
          <li className="relative transition-transform duration-300 hover:scale-108">
            <a href="/women" className="nav-link font-medium hover:text-rose-400">
              Women
            </a>
          </li>
          <li className="relative transition-transform duration-300 hover:scale-108">
            <a href="/category" className="nav-link font-medium hover:text-rose-400">
              Category
            </a>
          </li>
          <li className="relative transition-transform duration-300 hover:scale-108">
            <a href="/shop" className="nav-link font-medium hover:text-rose-400">
              Shop
            </a>
          </li>
          <li className="relative transition-transform duration-300 hover:scale-108">
            <a href="/sale" className="nav-link font-medium hover:text-rose-400">
              Sale
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-5">
          <a
            href="#"
            className="hover:text-rose-400 transition-all duration-300 hover:-translate-y-1"
          >
            <i className="fas fa-search text-xl" />
          </a>
          <a
            href="#"
            className="hover:text-rose-400 transition-all duration-300 hover:-translate-y-1"
          >
            <i className="fas fa-shopping-cart text-xl" />
          </a>
          <a
            href="#"
            className="hover:text-rose-400 transition-all duration-300 hover:-translate-y-1"
          >
            <i className="fas fa-user text-xl" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
