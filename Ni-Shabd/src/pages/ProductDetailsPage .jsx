import Footer from "@/components/Footer";
import ItemCard from "@/components/ItemCard";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const ProductDetailsPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Navbar />
      <div className="py-10 px-6">
        <div className="container mx-auto max-w-5xl bg-white shadow-lg rounded-lg">
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
              <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-lg text-gray-600 mt-2">{product.description}</p>
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
                  >
                    -
                  </button>
                  <input
                    id="quantity"
                    type="number"
                    value={quantity}
                    className="w-16 text-center border-t border-b border-gray-400 outline-none"
                  />
                  <button
                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded-r border-l border-gray-400 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex mt-8 space-x-4">
                <button className="before:ease relative h-10 w-[110px] overflow-hidden border border-green-500 bg-green-600 text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                  <span className="relative z-10">Add to Cart</span>
                </button>
                <button className="before:ease relative h-10 w-[110px] overflow-hidden border border-green-500 bg-green-600 text-white transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                  <span className="relative z-10">Buy Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
  <h1 className="ml-40 text-2xl font-semibold text-gray-800">Related Items</h1>
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
