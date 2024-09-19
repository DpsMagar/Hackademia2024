import React from 'react';
import Navbar from './Navbar';
import bg from '../Images/background.jpeg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      className="relative flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
      }}
    >
      <Navbar className="absolute top-0 left-0 w-full" />
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-gray-900 bg-opacity-70 p-12 rounded-lg shadow-2xl text-center transform transition-transform duration-300 hover:scale-105">
          <h1 className="text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
            Welcome to Tutor Match
          </h1>
          <p className="text-xl text-white mb-8">
            Discover, connect, and grow with fellow learners and tutors.
          </p>
          <Link
            to="/register"
            className="bg-yellow-500 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-yellow-600 hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-6 text-center absolute bottom-0 left-0 w-full">
        &copy; {new Date().getFullYear()} Tutor Match. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
