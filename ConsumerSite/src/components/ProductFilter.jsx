import React, { useState } from "react";

const ProductFilter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");

  const handleFilterChange = () => {
    onFilterChange({
      category: selectedCategory,
      priceRange,
      rating,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Filter Products</h2>
      {/* Category Filter */}
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">All Categories</option>
          <option value="crops">Crops</option>
          <option value="seeds">Seeds</option>
          {/* <option value="tools">Tools</option> */}
          <option value="dal">Dal</option>
        </select>
      </div>
      {/* Price Filter */}
      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Price Range
        </label>
        <select
          id="price"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Any Price</option>
          <option value="0-100">$0 - $100</option>
          <option value="100-500">$100 - $500</option>
          <option value="500-1000">$500 - $1000</option>
          <option value="1000+">$1000+</option>
        </select>
      </div>
      {/* Rating Filter */}
      <div className="mb-4">
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Minimum Rating
        </label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Any Rating</option>
          <option value="1">1 Star & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="4">4 Stars & Up</option>
        </select>
      </div>
      <button
        onClick={handleFilterChange}
        className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default ProductFilter;
