import React, { useState } from 'react';  // Import useState for managing state
import Navbar from '../shared/Navbar'; // Correct import path
import { Label } from '../ui/label'; // Correct import path
import { Input } from '../ui/input'; // Correct import path for Input component

const Login = () => {
  // State to manage the selected role
  const [input, setInput] = useState({
    phoneNumber: "",
    password: '',
    role: '',  // Default role is ''
    file: ""  // If you need to manage files
  });

  // Handle input changes
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });  // Update input state
  };

  // Handle role change
  const handleRoleChange = (e) => {
    setInput({ ...input, role: e.target.value });  // Update the role state
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
            Login
          </h1>

          {/* Mobile Number Field */}
          <div className="my-4">
            <Label className="text-lg font-medium">Mobile Number</Label>
            <Input
              type="tel"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="Enter your Phone Number"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F83002] focus:border-[#F83002]"
            />
          </div>

          {/* Password Field */}
          <div className="my-4">
            <Label className="text-lg font-medium">Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Enter your password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F83002] focus:border-[#F83002]"
            />
          </div>

          {/* Radio Group for Employer or Labourer */}
          <div className="my-4">
            <Label className="text-lg font-medium">I am a</Label>
            <div className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Employer"
                  checked={input.role === 'Employer'}
                  onChange={handleRoleChange} // Update role state when selected
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Employer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Labourer"
                  checked={input.role === 'Labourer'}
                  onChange={handleRoleChange} // Update role state when selected
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Labourer</Label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F83002] text-white py-3 mt-4 rounded-md hover:bg-[#e02401] transition-colors duration-300 text-lg"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{' '}
            <a href="/signup" className="text-[#F83002] hover:underline">
              Signup
            </a>
          </p>
        </form>
      </div>    
    </div>
  );
};

export default Login;
