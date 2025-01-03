import React, { useState } from 'react';  // Import useState for managing state
import Navbar from '../shared/Navbar'; // Correct import path
import { Label } from '../ui/label'; // Correct import path
import { Input } from '../ui/input'; // Correct import path for Input component
import { RadioGroup } from '../ui/radio-group'; // Make sure these are working properly

const Signup = () => {
  // State to manage the input fields and selected role
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: '',
    role: '',  // Default role is ''
    file: ""
  });

  // Handle input field changes
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });  // Update state
  };

  // Handle file input change
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });  // Update file
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          action=""
          className="w-full max-w-md border border-gray-200 rounded-lg p-8 bg-white shadow-xl space-y-6"
        >
          <h1 className="font-bold text-3xl text-center text-[#F83002] mb-6">
            Sign Up
          </h1>

          {/* Full Name Field */}
          <div className="my-4">
            <Label className="text-lg font-medium">Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter your full name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F83002] focus:border-[#F83002]"
            />
          </div>

          {/* Email Field */}
          <div className="my-4">
            <Label className="text-lg font-medium">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F83002] focus:border-[#F83002]"
            />
          </div>

          {/* Mobile Number Field */}
          <div className="my-4">
            <Label className="text-lg font-medium">Mobile Number</Label>
            <Input
              type="tel"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="00000 00000"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F83002] focus:border-[#F83002]"
            />
          </div>

          {/* Password Field */}
          <div className="my-4">
            <Label className="text-lg font-medium">Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F83002] focus:border-[#F83002]"
            />
          </div>

          {/* Radio Group for Employer or Labourer */}
          <div className="my-4">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"  // Radio buttons must share the same name
                  value="Employer" // Radio button for Employer
                  checked={input.role === "Employer"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Employer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"  // Radio buttons must share the same name
                  value="Labourer"
                  checked={input.role === "Labourer"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Labourer</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Profile Picture Upload */}
          <div className='flex items-center gap-2'>
            <Label>Profile</Label>
            <Input
              type="file"
              name="file"
              onChange={changeFileHandler} // File input handler
              className="cursor-pointer"
              accept="image/*"  // Only accept image files
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F83002] text-white py-3 mt-4 rounded-md hover:bg-[#e02401] transition-colors duration-300 text-lg"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-[#F83002] hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
