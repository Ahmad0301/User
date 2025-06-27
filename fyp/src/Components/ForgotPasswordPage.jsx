import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111418] text-white font-sans px-4">
      <div className="w-full max-w-md bg-[#1a1f24] rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <p className="text-sm text-[#9daab8] mb-4 text-center">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        {/* Email Field */}
        <div className="mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-12 px-4 rounded-xl bg-[#293038] text-white placeholder-[#9daab8] border-none focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition">
            Send Reset Link
          </button>
        </div>

        {/* Back to login */}
        <p
          onClick={handleBackToLogin}
          className="text-sm text-center text-[#9daab8] underline cursor-pointer hover:text-blue-400"
        >
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
