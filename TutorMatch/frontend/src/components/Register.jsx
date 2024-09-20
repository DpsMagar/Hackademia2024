import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "./AxiosInstance"; // Assume this is set up for axios

const Register = () => {
  const [success, setSuccess] = useState(false);

  // Yup validation schema
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    address: yup.string().required("Address is required"),
    contact: yup.string().required("Contact is required").max(15, "Contact must be at most 15 characters"),
    age: yup.number().required("Age is required").positive().integer(),
    document: yup.mixed().required("Document is required"),
    cover_letter: yup.string().required("Cover letter is required"),
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
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("role", "tutor");
    formData.append("address", data.address);
    formData.append("contact", data.contact);
    formData.append("age", data.age);
    formData.append("document", data.document[0]); // Handling file input
    formData.append("cover_letter", data.cover_letter);

    try {
      await axiosInstance.post("register/tutor/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error registering tutor:", error);
    }
  };

  return (
    <div className="flex mx-auto py-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6">Tutor Registration</h2>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}
            className={`mt-1 block w-full px-4 py-2 border ${errors.username ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
          />
          {errors.username && <p className="mt-2 text-sm text-red-600">{errors.username.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className={`mt-1 block w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
          />
          {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            {...register("address")}
            className={`mt-1 block w-full px-4 py-2 border ${errors.address ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
          />
          {errors.address && <p className="mt-2 text-sm text-red-600">{errors.address.message}</p>}
        </div>

        {/* Contact */}
        <div className="mb-4">
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            {...register("contact")}
            className={`mt-1 block w-full px-4 py-2 border ${errors.contact ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
          />
          {errors.contact && <p className="mt-2 text-sm text-red-600">{errors.contact.message}</p>}
        </div>

        {/* Age */}
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="number"
            id="age"
            {...register("age")}
            className={`mt-1 block w-full px-4 py-2 border ${errors.age ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
          />
          {errors.age && <p className="mt-2 text-sm text-red-600">{errors.age.message}</p>}
        </div>

        {/* Document */}
        <div className="mb-4">
          <label htmlFor="document" className="block text-sm font-medium text-gray-700">
            Upload Document
          </label>
          <input
            type="file"
            id="document"
            {...register("document")}
            className={`mt-1 block w-full px-4 py-2 border ${errors.document ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
          />
          {errors.document && <p className="mt-2 text-sm text-red-600">{errors.document.message}</p>}
        </div>

        {/* Cover Letter */}
        <div className="mb-4">
          <label htmlFor="cover_letter" className="block text-sm font-medium text-gray-700">
            Cover Letter
          </label>
          <textarea
            id="cover_letter"
            {...register("cover_letter")}
            className={`mt-1 block w-full px-4 py-2 border ${errors.cover_letter ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
          />
          {errors.cover_letter && <p className="mt-2 text-sm text-red-600">{errors.cover_letter.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Register
        </button>

        {success && <p className="mt-4 text-sm text-green-600">Tutor registered successfully!</p>}
      </form>
    </div>
  );
};

export default Register;
