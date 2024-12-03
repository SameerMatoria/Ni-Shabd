import React from "react";
import { Button } from "./ui/button";

const ItemCard = ({ image, name, price, onAddToCart, onBuyNow }) => {
    return (
        <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-md">
            <img
                src={image}
                alt={name}
                className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{name}</h2>
                <p className="text-xl text-red-500 font-semibold mt-2">${price}</p>
                <div className="flex justify-between mt-4 space-x-4">
                    <button className="before:ease relative h-10 w-[110px] overflow-hidden border border-green-500 bg-green-600 text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                        <span className="relative z-10">Add to Cart</span>
                    </button>
                    <button className="before:ease relative h-10 w-20 overflow-hidden border border-green-500 bg-green-600 text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                        <span className="relative z-10">Buy</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ItemCard;
