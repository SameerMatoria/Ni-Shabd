import IncomeCard from "@/components/IncomeCard";
import PieChartComponent from "@/components/PieChartComponent";
import React from "react";
import { FaDollarSign, FaChartLine, FaSeedling, FaShoppingCart } from "react-icons/fa";

function MainPanel() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Farmer Income Dashboard</h1>
        <p className="text-lg text-gray-500">Track your income, sales, and performance.</p>
      </header>

      {/* Dashboard Overview */}
      <div className="flex flex-wrap gap-4">
        {/* Left Section: Pie Chart */}
        <div className="flex-1 min-w-[300px]">
          <PieChartComponent />
        </div>

        {/* Right Section: Income Cards */}
        <div className="flex-1 min-w-[300px] space-y-4">
          <IncomeCard
            title="Total Income"
            value="$120,000"
            icon={<FaDollarSign />}
            bgColor="bg-green-500"
          />
          <IncomeCard
            title="Total Sales"
            value="450 Products"
            icon={<FaShoppingCart />}
            bgColor="bg-blue-500"
          />
          <IncomeCard
            title="Pending Payments"
            value="$5,000"
            icon={<FaDollarSign />}
            bgColor="bg-yellow-500"
          />
          <IncomeCard
            title="Completed Orders"
            value="400"
            icon={<FaChartLine />}
            bgColor="bg-purple-500"
          />
        </div>
      </div>

      {/* Income Summary Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Monthly Income Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Monthly Income Summary</h3>
          <div className="flex items-center mb-4">
            <FaDollarSign className="text-2xl text-green-500" />
            <span className="ml-2 text-lg">This Month: $5,000</span>
          </div>
          <div className="flex items-center">
            <FaSeedling className="text-2xl text-orange-500" />
            <span className="ml-2 text-lg">Growth: 12%</span>
          </div>
        </div>

        {/* Sales Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Sales Details</h3>
          <div className="flex items-center mb-4">
            <FaShoppingCart className="text-2xl text-purple-500" />
            <span className="ml-2 text-lg">Total Sales: 450</span>
          </div>
          <div className="flex items-center">
            <FaDollarSign className="text-2xl text-red-500" />
            <span className="ml-2 text-lg">Pending Sales: 25</span>
          </div>
        </div>

        {/* Completed Orders Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Completed Orders</h3>
          <div className="flex items-center mb-4">
            <FaChartLine className="text-2xl text-blue-500" />
            <span className="ml-2 text-lg">Total Orders: 400</span>
          </div>
          <div className="flex items-center">
            <FaSeedling className="text-2xl text-green-500" />
            <span className="ml-2 text-lg">Orders Delivered: 380</span>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span>Sold "Organic Wheat" to Customer A.</span>
            <span className="text-gray-500 text-sm">2 hours ago</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Payment of $1,000 received for "Tomato Harvest".</span>
            <span className="text-gray-500 text-sm">5 hours ago</span>
          </li>
          <li className="flex justify-between items-center">
            <span>New order for "Cabbage" received from Customer B.</span>
            <span className="text-gray-500 text-sm">1 day ago</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Order #5678 shipped to Customer C.</span>
            <span className="text-gray-500 text-sm">2 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainPanel;
