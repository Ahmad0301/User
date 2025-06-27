import React from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {


    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate("/signup");
    };

    return (
        <div className="min-h-screen bg-[#111418] text-white font-sans flex flex-col items-center justify-center px-4">
            {/* Header */}
            <header className="mb-10 flex items-center gap-4">
                <div className="w-5 h-5 text-white">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                        />
                    </svg>
                </div>
                <h1 className="text-xl font-bold">VoiceApp</h1>
            </header>

            {/* Login Card */}
            <div className="w-full max-w-md bg-[#1a1f24] rounded-xl p-8 shadow-lg">
                <h2 className="text-center text-2xl font-bold mb-6">Welcome back</h2>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="flex">
                        <input
                            type="email"
                            placeholder="Email"
                            className="flex-1 h-14 rounded-l-xl bg-[#1c2126] border border-r-0 border-[#3c4753] text-white placeholder-[#9daab8] px-4 focus:outline-none"
                        />
                        <div className="flex items-center justify-center pr-4 rounded-r-xl border border-l-0 border-[#3c4753] bg-[#1c2126] text-[#9daab8]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z" />
                            </svg>
                        </div>
                    </label>
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label className="flex">
                        <input
                            type="password"
                            placeholder="Password"
                            className="flex-1 h-14 rounded-l-xl bg-[#1c2126] border border-r-0 border-[#3c4753] text-white placeholder-[#9daab8] px-4 focus:outline-none"
                        />
                        <div className="flex items-center justify-center pr-4 rounded-r-xl border border-l-0 border-[#3c4753] bg-[#1c2126] text-[#9daab8]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z" />
                            </svg>
                        </div>
                    </label>
                </div>

                {/* Status */}
                <p className="text-sm text-center text-[#9daab8] mb-4">Voice input active</p>

                {/* Login Button */}
                <div className="flex justify-center mb-4">
                    <button onClick={()=>navigate("/home")} className="h-10 w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide">
                        Login
                    </button>
                </div>

                {/* Links */}
                <div className="text-center space-y-2">
                    <p
                        onClick={() => navigate("/forgot")}
                        className="cursor-pointer text-[#9daab8] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline hover:text-blue-400"
                    >
                        Forgot password?
                    </p>
                    <p
                        onClick={() => navigate("/signup")}
                        className="cursor-pointer text-[#9daab8] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline hover:text-blue-400"
                    >
                        Sign Up
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
