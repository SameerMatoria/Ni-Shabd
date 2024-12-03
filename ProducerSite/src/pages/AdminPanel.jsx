import React from "react";
import { FaChartLine, FaProductHunt, FaDollarSign, FaTruck } from "react-icons/fa";

const AdminPanel = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        {/* Page Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Farmer Admin Panel</h1>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">
            Add Product
          </button>
        </header>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total Income */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaDollarSign className="text-green-500 text-4xl mr-4" />
            <div>
              <p className="text-gray-600">Total Income</p>
              <h3 className="text-2xl font-bold">$15,000</h3>
            </div>
          </div>

          {/* Products Sold */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaProductHunt className="text-blue-500 text-4xl mr-4" />
            <div>
              <p className="text-gray-600">Products Sold</p>
              <h3 className="text-2xl font-bold">450</h3>
            </div>
          </div>

          {/* Active Listings */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaChartLine className="text-purple-500 text-4xl mr-4" />
            <div>
              <p className="text-gray-600">Active Listings</p>
              <h3 className="text-2xl font-bold">25</h3>
            </div>
          </div>

          {/* Pending Orders */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaTruck className="text-yellow-500 text-4xl mr-4" />
            <div>
              <p className="text-gray-600">Pending Orders</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Recent Transactions</h2>
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Date</th>
                <th className="px-4 py-2 border-b">Product</th>
                <th className="px-4 py-2 border-b">Amount</th>
                <th className="px-4 py-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">2024-12-01</td>
                <td className="px-4 py-2 border-b">Tomatoes</td>
                <td className="px-4 py-2 border-b">$500</td>
                <td className="px-4 py-2 border-b text-green-600">Completed</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">2024-11-30</td>
                <td className="px-4 py-2 border-b">Wheat</td>
                <td className="px-4 py-2 border-b">$300</td>
                <td className="px-4 py-2 border-b text-yellow-500">Pending</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default AdminPanel;
