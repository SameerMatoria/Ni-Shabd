import React from "react";

const MiniFooter = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Ni-Shabd All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="#"
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            href="#"
            className="hover:underline"
          >
            Terms of Service
          </a>
          <span>|</span>
          <a
            href="#"
            className="hover:underline"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MiniFooter;
