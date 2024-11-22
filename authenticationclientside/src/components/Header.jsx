import React from 'react';
import logo from '../assets/logo.jpg'; // Assuming this is the correct path for your logo
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Importing icons from react-icons
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src={logo}
            alt="Logo" 
            className="h-10 w-10 object-contain" 
          />
          <h1 className="text-2xl font-semibold text-gray-800">ShopMate</h1>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link to="/" className="text-lg font-medium text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/shop" className="text-lg font-medium text-gray-700 hover:text-blue-500">
            Shop
          </Link>
          <Link to="/about" className="text-lg font-medium text-gray-700 hover:text-blue-500">
            About Us
          </Link>
          <Link to="/contact" className="text-lg font-medium text-gray-700 hover:text-blue-500">
            Contact
          </Link>
        </nav>

        {/* Cart and User Icons */}
        <div className="flex space-x-6">
          {/* Cart Icon */}
          <div className="relative">
            <Link to="/cart" className="text-lg font-medium text-gray-700 hover:text-blue-500">
              <FaShoppingCart size={30} /> {/* Use React Icons directly */}
              {/* Cart count (hardcoded for now, you can pass it dynamically) */}
              <span className="absolute top-0 right-0 inline-block w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full text-center">
                3
              </span>
            </Link>
          </div>
          
          {/* User Icon */}
          <Link to="/login" className="text-lg font-medium text-gray-700 hover:text-blue-500">
            <FaUser size={25} /> {/* Use React Icons directly */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
