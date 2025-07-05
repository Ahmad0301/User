import React from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f4f6fa] text-[#1f2937] font-sans flex flex-col items-center justify-center px-4">
      <header className="mb-10 flex items-center gap-3">
  <div className="w-6 h-6 text-blue-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2zM11 18.93V22h2v-3.07A8.001 8.001 0 0 0 20 11h-2a6 6 0 0 1-12 0H4a8.001 8.001 0 0 0 7 7.93z" />
    </svg>
  </div>
  <h1 className="text-2xl font-bold text-gray-800">VoiceApp</h1>
</header>
      {/* Signup Card */}
      <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-xl">
        <h2 className="text-center text-2xl font-bold mb-6">Create Account</h2>

        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="input-style" />
          <input type="text" placeholder="Username" className="input-style" />
          <input type="email" placeholder="Email Address" className="input-style" />
          <input type="tel" placeholder="Phone Number" className="input-style" />
          <input type="date" className="input-style" />
          <select className="input-style">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="password" placeholder="Password" className="input-style" />
          <input type="password" placeholder="Confirm Password" className="input-style" />

          <button
            type="submit"
            className="w-full h-10 bg-indigo-600 text-white font-semibold text-sm rounded-full hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p
          onClick={() => navigate("/login")}
          className="cursor-pointer text-gray-600 text-sm text-center mt-4 underline hover:text-indigo-600"
        >
          Already have an account? Sign in
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
