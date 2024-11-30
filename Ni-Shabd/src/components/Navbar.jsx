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
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-white hover:text-yellow-600">Home</a></li>
          <li><a href="#products" className="text-white hover:text-yellow-600">Marketplace</a></li>
          <li><a href="#about" className="text-white hover:text-yellow-600">About</a></li>
          <li><a href="#contact" className="text-white hover:text-yellow-600">Contact</a></li>
        </ul>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search crops, tools..."
            className="w-64 px-4 py-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
            Search
          </button>
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
