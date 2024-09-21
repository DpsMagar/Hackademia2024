import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-gray-100 p-4 border-b border-gray-300">
        <div className="text-2xl font-bold">Tootle Link</div>
        <nav>
          <div className="flex space-x-4">
            <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            <Link to="/whichone" className="text-blue-600 hover:underline">Register</Link>
          </div>
        </nav>
      </header>

      <div className="p-6">
        <h1 className="text-3xl font-semibold">Welcome to Tootle Link</h1>
       
      </div>
    </>
  );
};

export default LandingPage;
