import React, { useState, useEffect } from 'react';
import axiosInstance from './AxiosInstance';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const [userName, setUserName] = useState([]);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("users/");
        setUserName(response.data);
        const storedUserName = localStorage.getItem("userName");
        const user = response.data.find((user) => user.username === storedUserName);
        if (user) {
          setUserId(user.id);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const userGreeting = userName.find(user => user.id === userId)?.username;

  return (
    <div className='w-full h-full bg-gray-900 flex items-center justify-center'>
      {userGreeting ? (
        <h1 className="text-2xl text-white">Hello, {userGreeting}!</h1>
      ) : (
        <h1 className="text-2xl text-white">Hello, Guest!</h1>
      )}
    </div>
  );
}

export default MainPage;
