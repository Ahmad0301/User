import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    // Clear auth/session here if needed
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Logo & Nav */}
      <div className="flex items-center gap-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-blue-600 w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2zM11 18.93V22h2v-3.07A8.001 8.001 0 0 0 20 11h-2a6 6 0 0 1-12 0H4a8.001 8.001 0 0 0 7 7.93z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">VoiceApp</h2>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/home" className="text-sm text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/feature" className="text-sm text-gray-700 hover:text-blue-600 font-medium">Features</Link>
          <Link to="/feedback" className="text-sm text-gray-700 hover:text-blue-600 font-medium">Feedback</Link>
          <Link to="/help" className="text-sm text-gray-700 hover:text-blue-600 font-medium">Help</Link>
        </nav>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-300">
          <div className="px-3 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 text-sm text-gray-800 px-3 focus:outline-none"
          />
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <img
            src="https://i.pravatar.cc/32?img=23"
            alt="User"
            className="w-8 h-8 rounded-full cursor-pointer border-2 border-blue-500"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
