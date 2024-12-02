import React from "react";
import Footer from "@/Customer Comp/Footer";
import Navbar from "@/Customer Comp/Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />

      {/* About Us Section */}
      <section className="py-10 px-6">
        <div className="container mx-auto max-w-5xl bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            Welcome to our platform! We are dedicated to providing high-quality agricultural products that support farmers and gardeners in their endeavors.
          </p>
        </div>
        <hr className="my-8 border-gray-300" />
      </section>

      {/* Our Story Section */}
      <section className="py-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          <p className="text-lg text-gray-600 mt-4">
            We started with a simple goal: to make agriculture more accessible and sustainable for farmers of all sizes. Our journey began with providing top-quality seeds and tools and has now expanded to a broad range of agricultural products.
          </p>
        </div>
        {/* <hr className="my-8 border-gray-300" /> */}
      </section>

      {/* Vision and Values Section */}
      <section className="py-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision & Values</h2>
          <p className="text-lg text-gray-600 mt-4">
            Our vision is to be a leader in sustainable agriculture, providing the best products to help farmers grow more efficiently and responsibly. We believe in transparency, quality, and environmental sustainability.
          </p>
        </div>
        {/* <hr className="my-8 border-gray-300" /> */}
      </section>

      {/* Team Section */}
      <section className="py-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-gray-800">Meet the Team</h2>
          <div className="flex space-x-6 mt-6">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <img src="team-member1.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full border shadow-md" />
              <h3 className="mt-2 text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <img src="team-member2.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full border shadow-md" />
              <h3 className="mt-2 text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">COO</p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <img src="team-member3.jpg" alt="Team Member 3" className="w-24 h-24 rounded-full border shadow-md" />
              <h3 className="mt-2 text-xl font-semibold text-gray-800">Alice Brown</h3>
              <p className="text-gray-600">Head of Product</p>
            </div>
          </div>
        </div>
        {/* <hr className="my-8 border-gray-300" /> */}
      </section>

      {/* Our Products Section */}
      <section className="py-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-gray-800">What We Offer</h2>
          <p className="text-lg text-gray-600 mt-4">
            We offer a wide range of agricultural products, including high-quality crops, tools, and seeds to help farmers succeed in their farming ventures.
          </p>
        </div>
        {/* <hr className="my-8 border-gray-300" /> */}
      </section>

      {/* Sustainability Section */}
      <section className="py-10 px-6">
        <div className="container mx-auto max-w-5xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Impact & Sustainability</h2>
          <p className="text-lg text-gray-600 mt-4">
            At the core of our business is sustainability. We strive to ensure that all our products are sourced responsibly and that our operations contribute positively to the environment.
          </p>
        </div>
        <hr className="my-8 border-gray-300" />
      </section>

      {/* Contact Section */}
      <section className="py-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-lg text-gray-600 mt-4">
            Have questions or want to know more about our products? Contact us at <a href="mailto:info@yourcompany.com" className="text-blue-500">info@yourcompany.com</a>.
          </p>
        </div>
        <hr className="my-8 border-gray-300" />
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
