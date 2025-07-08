import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const LoginPage = () => {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [intentState, setIntentState] = useState(null); // "email", "password", null

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
    onSubmit: async () => {
      toast.success("Logged in successfully!");
      speak("Logging in now");
      navigate("/home");
    },
  });

  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  const handleIntent = (text) => {
    const lower = text.toLowerCase().trim();

    if (intentState === "email") {
      const email = lower.replace(/\s+/g, "").replace("at", "@");
      formik.setFieldValue("email", email);
      speak("Email added");
      setIntentState(null);
      return;
    }

    if (intentState === "password") {
      formik.setFieldValue("password", lower.replace(/\s+/g, ""));
      speak("Password added");
      setIntentState(null);
      return;
    }

    if (lower.includes("email")) {
      speak("Okay, say your email");
      setIntentState("email");
    } else if (lower.includes("password")) {
      speak("Okay, say your password");
      setIntentState("password");
    } else if (lower.includes("log in") || lower.includes("sign in") || lower.includes("submit")) {
      speak("Logging in");
      formik.handleSubmit();
    } else if (lower.includes("sign up") || lower.includes("register")) {
      speak("Redirecting to signup");
      navigate("/signup");
    } else if (lower.includes("forgot") || lower.includes("reset password")) {
      speak("Redirecting to forgot password");
      navigate("/forgot");
    } else {
      speak("Sorry, I did not understand");
    }
  };

  const startMic = () => {
    if (!recognition) return;
    recognition.start();
    setIsListening(true);
    speak("Voice activated");
  };

  const stopMic = () => {
    if (recognition) recognition.stop();
    setIsListening(false);
    speak("Voice stopped");
  };

  useEffect(() => {
    if (!SpeechRecognition) {
      toast.error("Speech Recognition not supported");
      return;
    }

    const recog = new SpeechRecognition();
    recog.continuous = true;
    recog.lang = "en-US";

    recog.onresult = (e) => {
      const command = e.results[e.results.length - 1][0].transcript;
      handleIntent(command);
    };

    recog.onend = () => {
      if (isListening) recog.start();
    };

    setRecognition(recog);
  }, [intentState]);

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

        {/* Mic Control */}
        <div className="text-center mb-4">
          <button
            onClick={isListening ? stopMic : startMic}
            className={`text-white px-4 py-2 rounded-full text-sm font-medium transition ${
              isListening ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isListening ? "🛑 Stop Mic" : "🎤 Start Mic"}
          </button>
        </div>

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
            <input
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter your password"
              className={`w-full h-12 px-4 rounded-lg border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-2 focus:ring-blue-400 focus:outline-none`}
            />
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
            className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-full transition duration-300 hover:from-blue-600 hover:to-blue-800"
          >
            Login
          </button>
        </form>

        {/* Voice Input Status */}
        <p className="text-sm text-center text-gray-500 mt-4 italic">
          {isListening ? "🎤 Listening for your commands..." : "🛑 Mic is off"}
        </p>

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

