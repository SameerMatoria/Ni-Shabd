import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm">
            We are dedicated to connecting farmers and buyers with fresh, organic produce directly from the source. Empowering agriculture through technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer Support</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-semibold">Email:</span> support@Ni-Shabd.com
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +1 234 567 890
            </li>
            <li>
              <span className="font-semibold">Address:</span> Govind Puram, Ghaziabad
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-600 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; 2024 Ni-Shabd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
