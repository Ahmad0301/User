import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleBackToLogin = () => {
    navigate("/");
  };

  const handleSendLink = () => {
    // Simulate email sent
    setShowPopup(true);
    // Hide after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 font-sans px-4 relative">
      {/* Popup Message */}
      {showPopup && (
        <div className="absolute top-5 w-full max-w-sm mx-auto p-4 bg-green-100 text-green-800 border border-green-300 rounded-md shadow-lg text-center z-50">
          ✅ Reset link has been sent to your email!
        </div>
      )}

      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2zM11 18.93V22h2v-3.07A8.001 8.001 0 0 0 20 11h-2a6 6 0 0 1-12 0H4a8.001 8.001 0 0 0 7 7.93z" />
    </svg>
          <h2 className="text-2xl font-bold text-gray-800">Forgot Password</h2>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Enter your email below and we'll send you a reset link.
          </p>
        </div>

        {/* Email Field */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none transition"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            onClick={handleSendLink}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-300"
          >
            Send Reset Link
          </button>
        </div>

        {/* Back to login */}
        <p
          onClick={handleBackToLogin}
          className="text-sm text-center text-blue-600 cursor-pointer hover:underline mt-4"
        >
          &larr; Back to Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
