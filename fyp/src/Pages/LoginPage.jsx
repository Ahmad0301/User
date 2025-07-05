import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Simulate API request delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        // Simulated success (replace with actual API call)
        toast.success("Logged in successfully!");
        navigate("/home");
      } catch (error) {
        toast.error("Login failed. Try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans flex flex-col items-center justify-center px-4">
      <ToastContainer />

      {/* Header */}
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


      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl">
        <h2 className="text-center text-2xl font-semibold mb-6">Welcome Back</h2>

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="you@example.com"
              className={`w-full h-12 px-4 rounded-lg border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-2 focus:ring-blue-400 focus:outline-none`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-xs text-red-600 mt-1">{formik.errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <div className="flex">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Enter your password"
                className={`flex-1 h-12 px-4 rounded-l-lg border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-xs text-red-600 mt-1">{formik.errors.password}</div>
            )}
          </div>

          {/* Remember Me + Forgot */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="remember"
                onChange={formik.handleChange}
                checked={formik.values.remember}
                className="accent-blue-600"
              />
              Remember me
            </label>
            <button
              type="button"
              onClick={() => navigate("/forgot")}
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full h-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-full transition duration-300 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:from-blue-600 hover:to-blue-800"
            }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Voice Input Status */}
        <p className="text-sm text-center text-gray-500 mt-4 italic">🎤 Voice input active</p>

        {/* Social Logins */}
        <div className="mt-6 space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full hover:bg-gray-50">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full hover:bg-gray-50">
            <img src="https://www.svgrepo.com/show/452234/apple.svg" alt="Apple" className="w-5 h-5" />
            Continue with Apple
          </button>
        </div>

        {/* Sign Up */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-xs text-gray-500 text-center">
        &copy; {new Date().getFullYear()} VoiceApp. All rights reserved.
      </footer>
    </div>
  );
};

export default LoginPage;
