import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-700 border-b-2 border-green-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <a href="#home">Ni-Shabd</a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#home" className="text-white hover:text-yellow-600">Home</a></li>
          <li><a href="#products" className="text-white hover:text-yellow-600">Marketplace</a></li>
          <li><a href="#about" className="text-white hover:text-yellow-600">About</a></li>
          <li><a href="#contact" className="text-white hover:text-yellow-600">Contact</a></li>
        </ul>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search crops, tools..."
              className="w-64 px-4 py-2 pl-10 border border-green-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="button"
              className="absolute inset-y-0 left-3 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m2.65-5.65a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>
            </button>
          </div>
        </div>


        {/* Icons */}
        <div className="flex items-center space-x-4">
          <a href="#cart" className="text-white hover:text-yellow-600">
            🛒 Cart
          </a>
          <a href="#account" className="text-white hover:text-yellow-600">
            👤 Account
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
