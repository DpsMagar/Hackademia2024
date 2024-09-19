import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import logo from '../Images/dp.jpg'; 

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const userLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(userLoggedIn);
    };

    checkStatus();
    const intervalId = setInterval(checkStatus, 1000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${isLoggedIn ? 'logged-in' : 'logged-out'} scrollable-container`}>
      <header className="bg-gray-900 shadow-md py-4 px-6 flex items-center justify-between relative">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {!isLoggedIn && (
            <Link
              to="/register"
              className="hover:text-white text-yellow-400 hover:bg-blue-700 hover:font-medium py-2 px-4 rounded transition duration-300 font-sans"
            >
              Register
            </Link>
          )}
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-900 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Recipe App. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
