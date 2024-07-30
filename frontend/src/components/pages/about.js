import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white w-full">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 font-mono ">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 font-mono">Learn more about our eCommerce platform and our mission.</p>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 font-mono">Frags</h2>
        <p className="mt-4 text-gray-600 font-mono">
          Welcome to Frags, your number one source for all things. We're dedicated to providing you the very best, with an emphasis on quality, customer service, and uniqueness.
        </p>
        <p className="mt-4 text-gray-600 font-mono">
          Frags has come a long way from its beginnings in remote. When Founder first started out, his passion for shopping drove them to start their own business.
        </p>
        <p className="mt-4 text-gray-600 font-mono">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 font-mono">Our Mission</h2>
        <p className="mt-4 text-gray-600 font-mono">
          Our mission is to provide high-quality products that combine performance with value pricing while establishing a successful relationship with our customers and our suppliers.
        </p>
        <p className="mt-4 text-gray-600 font-mono">
          We constantly strive to meet or exceed our customers' needs and expectations of price, service, and selection.
        </p>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 font-mono">Our Team</h2>
        <p className="mt-4 text-gray-600 font-mono">
          We are a team of passionate individuals dedicated to bringing you the best in nothing. Our team works tirelessly to ensure customer satisfaction and to provide innovative solutions to meet your needs.
        </p>
      </div>
      
      <div>
        <h2 className="text-4xl font-bold text-gray-800 font-mono">Contact Us</h2>
        <Link to = '/ContactUs' className = 'mt-4 text-blue-600 font-mono'>Click here to contact us</Link>
      </div>
    </div>
  );
};

export default About
