import React from 'react';
import { useNavigate } from 'react-router-dom';

const TutorOrUser = () => {
  const navigate = useNavigate();

  const handleStudentClick = () => {
    navigate('/userregister'); // Navigate to student registration
  };

  const handleTutorClick = () => {
    navigate('/tutorregister'); // Navigate to tutor registration
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Platform</h1>
      <p className="mb-4">Please select your role:</p>
      
      <div className="flex space-x-4">
        <button
          onClick={handleStudentClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Register as Student
        </button>
        
        <button
          onClick={handleTutorClick}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Register as Tutor
        </button>
      </div>
    </div>
  );
};

export default TutorOrUser;
