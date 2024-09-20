import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 flex text-white shadow-lg">
<div className="w-full flex items-center py-4 px-6">
        {/* Left Side - Tutor Match */}
        <div className="flex items-center">
          <Link
            to="/"
            className="text-3xl font-bold hover:text-blue-400 transition duration-300"
          >
            Tutor Meett
          </Link>
        </div>

        {/* Right Side - Other Items */}
        <div className="flex items-center space-x-4">
          <Link
            to="/about"
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/register"
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;