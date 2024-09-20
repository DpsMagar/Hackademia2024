import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "../components/AxiosInstance";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Define validation schema using yup
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Submit function to handle the form submission
  const onSubmit = async (data) => {
    setError(""); // Reset error state
    try {
      const response = await axiosInstance.post("/login/", {
        username: data.username,
        password: data.password,
      });

      // Handle success, for example, storing token in localStorage
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      setSuccess(true);
      console.log("Login successful:", response.data);
      
      // Navigate to home page after successful login
      navigate("/   "); // Adjust the path as necessary

    } catch (error) {
      console.error("Login error:", error);
      // Handle specific error messages based on response
      if (error.response) {
        if (error.response.data) {
          const errorMessage = error.response.data.error || "An error occurred. Please try again.";
          setError(errorMessage);
        } else {
          setError("An error occurred during login. Please try again.");
        }
      } else {
        setError("Network error. Please check your connection.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">Login successful!</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username field */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}
            className={`mt-1 block w-full px-4 py-2 border ${errors.username ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.username && <p className="text-red-600 mt-2">{errors.username.message}</p>}
        </div>

        {/* Password field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className={`mt-1 block w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.password && <p className="text-red-600 mt-2">{errors.password.message}</p>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
