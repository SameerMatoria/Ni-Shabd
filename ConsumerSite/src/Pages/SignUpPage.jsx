import MiniFooter from "@/components/MiniFooter";
import React from "react";

const SignUpPage = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Create a new Account
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Create a password"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Already have an account?{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Log In
                        </a>
                    </p>
                </div>
            </div>
            <MiniFooter />
        </div>
    );
};

export default SignUpPage;
