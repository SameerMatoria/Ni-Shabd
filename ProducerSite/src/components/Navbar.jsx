import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 px-10">
      <div className="flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-lg font-bold text-gray-800">Portal Ni-Shabd</div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li className="hover:text-gray-900">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="hover:text-gray-900">
            <a href="/income">Income</a>
          </li>
          <li className="hover:text-gray-900">
            <a href="/crops">Crops</a>
          </li>
          <li className="hover:text-gray-900">
            <a href="/profile">Profile</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded border-gray-400"
          onClick={() => {
            const menu = document.getElementById("mobileMenu");
            menu.classList.toggle("hidden");
          }}
        >
          <svg
            className="fill-current h-3 w-3 text-gray-800"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobileMenu" className="hidden md:hidden bg-white">
        <ul className="flex flex-col space-y-2 p-4 text-gray-700">
          <li>
            <a href="/dashboard" className="hover:text-gray-900">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/income" className="hover:text-gray-900">
              Income
            </a>
          </li>
          <li>
            <a href="/crops" className="hover:text-gray-900">
              Crops
            </a>
          </li>
          <li>
            <a href="/profile" className="hover:text-gray-900">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
