import Footer from "@/Customer Comp/Footer";
import ItemCard from "@/Customer Comp/ItemCard";
import Navbar from "@/Customer Comp/Navbar";
import ProductFilter from "@/Customer Comp/ProductFilter"; // Import the ProductFilter component
import React, { useState } from "react";

const ProductDetailsPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [filters, setFilters] = useState({}); // State to hold filter criteria

  const handleFilterChange = (filterData) => {
    setFilters(filterData);
    console.log("Filters applied:", filterData); // Replace this with actual filtering logic
  };

  return (
    <>
      <Navbar />
      <div className="py-10 px-6">
        <div className="container mx-auto max-w-7xl bg-white shadow-lg rounded-lg flex flex-col lg:flex-row">
          {/* Filter Section */}
          <div className="lg:w-1/4 p-6 border-r border-gray-200">
            <ProductFilter onFilterChange={handleFilterChange} />
          </div>

          {/* Product Details Section */}
          <div className="lg:w-3/4 p-6">
            <div className="flex flex-col lg:flex-row">
              {/* Product Image */}
              <div className="lg:w-1/2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg w-full h-96 object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="lg:w-1/2 p-6">
                <h1 className="text-2xl font-bold text-gray-800">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                  {product.description}
                </p>
                <p className="text-xl font-semibold text-red-500 mt-4">
                  ${product.price}
                </p>

                {/* Quantity Selector */}
                <div className="mt-6">
                  <label htmlFor="quantity" className="block text-gray-700">
                    Quantity:
                  </label>
                  <div className="mt-2 flex items-center">
                    <button
                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded-l border-r border-gray-400 hover:bg-gray-300"
                      onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                    >
                      -
                    </button>
                    <input
                      id="quantity"
                      type=""
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(Number(e.target.value), 1))
                      }
                      className="w-16 text-center border-t border-b border-gray-400 outline-none"
                    />
                    <button
                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded-r border-l border-gray-400 hover:bg-gray-300"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex mt-8 space-x-4">
                  <button className="relative h-10 w-[110px] overflow-hidden border border-green-500 bg-green-600 text-white transition-all transform hover:bg-green-700  focus:outline-none">
                    <span className="relative z-10">Add to Cart</span>
                  </button>
                  <button className="relative h-10 w-[110px] overflow-hidden border border-green-500 bg-green-600 text-white transition-all transform hover:bg-green-700  focus:outline-none">
                    <span className="relative z-10">Buy Now</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items Section */}
      <div>
        <h1 className="ml-40 text-2xl font-semibold text-gray-800">
          Related Items
        </h1>
        <div className="flex justify-center items-center mt-10 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetailsPage;
