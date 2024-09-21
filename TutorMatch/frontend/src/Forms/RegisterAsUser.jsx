import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "../components/AxiosInstance";
import { useNavigate } from "react-router-dom";

const RegisterAsUser = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Yup validation schema
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"), // Changed 'user' to 'username'
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username); // Ensure 'username' is appended
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("role", "student");
    try {
      await axiosInstance.post("register/student/", formData);
      setSuccess(true);
      navigate("/user/dashboard");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="flex mx-auto py-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6">Student Registration</h2>

        {/* Username */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username")} // Changed 'user' to 'username'
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm`}
          />
          {errors.username && (
            <p className="mt-2 text-sm text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm`}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm`}
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm`}
          />
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Register
        </button>

        {success && (
          <p className="mt-4 text-sm text-green-600">
            User registered successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default RegisterAsUser;
