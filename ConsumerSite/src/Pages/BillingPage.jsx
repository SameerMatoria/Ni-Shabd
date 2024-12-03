import React from "react";

function BillingPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ni-Shabd</h1>
        <hr className="mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Billing Summary */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Billing Summary
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium text-gray-800">$120.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium text-gray-800">$10.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax:</span>
                <span className="font-medium text-gray-800">$8.00</span>
              </div>
              <div className="border-t pt-4 flex justify-between">
                <span className="text-lg font-bold text-gray-700">Total:</span>
                <span className="text-lg font-bold text-gray-800">$138.00</span>
              </div>
            </div>
          </div>

          {/* Right Section: Payment & Shipping Details */}
          <div>
            {/* Payment Method */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Payment Method
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="mb-4 flex-1">
                    <label className="block text-gray-600 font-medium mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4 flex-1">
                    <label className="block text-gray-600 font-medium mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Shipping Details */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Shipping Details
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-2">
                    Address
                  </label>
                  <textarea
                    placeholder="123 Street, City, Country"
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4 flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-600 font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-600 font-medium mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Confirm and Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillingPage;
