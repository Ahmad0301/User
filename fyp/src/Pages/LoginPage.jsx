import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [intent, setIntent] = useState(null); // 'email', 'password', null
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  const handleCommand = (command) => {
    const lower = command.toLowerCase().trim();

    if (intent === "email") {
      const processed = lower.replace(/\s+/g, "").replace("at", "@").replace("dot", ".");
      setEmail(processed);
      speak("Email set");
      setIntent(null);
      return;
    }

    if (intent === "password") {
      const processed = lower.replace(/\s+/g, "");
      setPassword(processed);
      speak("Password set");
      setIntent(null);
      return;
    }

    // Initial commands
    if (lower.includes("email")) {
      speak("Please say your email");
      setIntent("email");
    } else if (lower.includes("password")) {
      speak("Please say your password");
      setIntent("password");
    } else if (lower.includes("login") || lower.includes("sign in")) {
      if (email && password) {
        speak("Logging in now");
        toast.success("Login successful!");
        navigate("/home");
      } else {
        speak("Email or password missing");
        toast.error("Fill email and password");
      }
    } else if (lower.includes("sign up")) {
      speak("Redirecting to sign up");
      navigate("/signup");
    } else if (lower.includes("forgot")) {
      speak("Redirecting to forgot password");
      navigate("/forgot");
    } else if (lower.includes("show password")) {
      setShowPassword(true);
      speak("Password is now visible");
    } else if (lower.includes("hide password")) {
      setShowPassword(false);
      speak("Password is hidden");
    } else {
      speak("Sorry, I did not understand");
    }
  };

  const startMic = () => {
    if (!recognition) return;
    recognition.start();
    setIsListening(true);
    speak("Voice recognition started");
  };

  const stopMic = () => {
    if (recognition) recognition.stop();
    setIsListening(false);
    speak("Voice recognition stopped");
  };

  useEffect(() => {
    if (!SpeechRecognition) {
      toast.error("Speech Recognition not supported in your browser.");
      return;
    }

    const recog = new SpeechRecognition();
    recog.continuous = true;
    recog.lang = "en-US";

    recog.onresult = (e) => {
      const transcript = e.results[e.results.length - 1][0].transcript;
      handleCommand(transcript);
    };

    recog.onend = () => {
      if (isListening) recog.start(); // continue listening
    };

    setRecognition(recog);
  }, [intent, isListening]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-4">
      <ToastContainer />
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Voice Assistant Login</h2>

        {/* Mic Button */}
        <div className="flex justify-center mb-4">
          <button
            onClick={isListening ? stopMic : startMic}
            className={`px-6 py-2 font-semibold text-white rounded-full transition ${
              isListening ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isListening ? "🛑 Stop Listening" : "🎤 Start Listening"}
          </button>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 h-12 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="you@example.com"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 h-12 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Your password"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={() => handleCommand("login")}
          className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full hover:from-blue-600 hover:to-blue-800"
        >
          Login
        </button>

        {/* Links */}
        <div className="flex justify-between text-sm mt-4 text-blue-600">
          <button onClick={() => handleCommand("forgot password")} className="hover:underline">
            Forgot Password?
          </button>
          <button onClick={() => handleCommand("sign up")} className="hover:underline">
            Sign Up
          </button>
        </div>

        {/* Tips */}
        <div className="text-sm text-center mt-6 text-gray-500">
          <p className="italic">Say: “Email”, “Password”, “Login”, “Sign up”, “Forgot password”</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
