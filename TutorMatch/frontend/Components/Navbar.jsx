import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
  }, []);

  const handleLogout = () => {
    sessionStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="text-3xl font-bold">
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            Tutor Match
          </Link>
        </div>

        {/* Navigation Links Section */}
        <div className="flex items-center space-x-6">
          <Link to="/about" className="hover:text-blue-400 transition duration-300">
            About
          </Link>
          {!isLoggedIn ? (
            <div className="flex space-x-4">
              <Link
                to="/register"
                className="py-2 px-4 rounded bg-blue-600 hover:bg-blue-500 transition duration-300"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="py-2 px-4 rounded bg-blue-600 hover:bg-blue-500 transition duration-300"
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="relative group">
              <button className="py-2 px-4 rounded bg-blue-600 hover:bg-blue-500 transition duration-300">
                User Menu
              </button>
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-gray-800 rounded shadow-lg">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-blue-600 transition duration-300"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
