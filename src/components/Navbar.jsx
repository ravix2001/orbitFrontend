import React, { useState, useRef } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
      // navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center px-5 py-4 bg-white text-gray-900 dark:bg-gray-800 dark:text-white shadow-md sticky top-0 z-50">
        {/* Left: Brand */}
        <div className="text-2xl font-bold z-10">ORBIT</div>

        {/* Center: Navigation Links */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 z-0">
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

        {/* Right: Search, Cart, User */}
        <div className="flex items-center space-x-5 relative z-10">
          <div ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 h-9 w-64 mr-3 text-sm rounded-full border border-gray-900 dark:border-white focus:outline-none dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="hover:text-rose-400 transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fas fa-search text-xl" />
              </button>
            </form>
          </div>
          <a
            href="#"
            className="hover:text-rose-400 transition-all duration-300 hover:-translate-y-1"
          >
            <i className="fas fa-shopping-cart text-xl" />
          </a>
          <a
            href="/login"
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
