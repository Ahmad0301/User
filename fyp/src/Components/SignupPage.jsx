import React from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

    const navigate = useNavigate();

    const handleLoginClick= ()=>{
        navigate("/login");
    }

  return (
    <div className="relative flex min-h-screen flex-col bg-[#111418] overflow-x-hidden font-sans">
      <div className="flex flex-col h-full grow">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#293038] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="w-4 h-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight">Voice Web</h2>
          </div>
        </header>

        {/* Form Section */}
        <div className="flex flex-1 justify-center px-4 lg:px-40 py-5">
          <div className="flex flex-col w-full max-w-[512px] py-5">
            <h2 className="text-white text-[28px] font-bold text-center px-4 pb-3 pt-5">
              Create your account
            </h2>

            {/* Name Input */}
            <div className="flex flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col flex-1">
                <div className="flex w-full items-stretch rounded-xl">
                  <input
                    type="text"
                    placeholder="Name"
                    className="flex-1 h-14 bg-[#293038] text-white placeholder-[#9daab8] px-4 border-none rounded-l-xl focus:outline-none"
                  />
                  <div className="flex items-center justify-center pr-4 bg-[#293038] text-[#9daab8] rounded-r-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>

            {/* Email Input */}
            <div className="flex flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col flex-1">
                <div className="flex w-full items-stretch rounded-xl">
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 h-14 bg-[#293038] text-white placeholder-[#9daab8] px-4 border-none rounded-l-xl focus:outline-none"
                  />
                  <div className="flex items-center justify-center pr-4 bg-[#293038] text-[#9daab8] rounded-r-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>

            {/* Password Input */}
            <div className="flex flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col flex-1">
                <div className="flex w-full items-stretch rounded-xl">
                  <input
                    type="password"
                    placeholder="Password"
                    className="flex-1 h-14 bg-[#293038] text-white placeholder-[#9daab8] px-4 border-none rounded-l-xl focus:outline-none"
                  />
                  <div className="flex items-center justify-center pr-4 bg-[#293038] text-[#9daab8] rounded-r-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>

            {/* Sign Up Button */}
            <div className="flex px-4 py-3">
              <button className="w-full h-10 bg-[#197ce5] text-white text-sm font-bold tracking-wide rounded-full hover:bg-[#156ad0] transition">
                Sign up
              </button>
            </div>

            {/* Sign In Link */}
            <p onClick={() => navigate("/login")} className="cursor-pointer text-[#9daab8] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline hover:text-blue-400">
              Already have an account? Sign in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
