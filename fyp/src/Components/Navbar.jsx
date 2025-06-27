import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
<header className="bg-gray-900 flex items-center justify-between border-b border-gray-700 px-10 py-3 text-white">

  <div className="flex items-center gap-8">
    <div className="flex items-center gap-4">
      <div className="w-4 h-4 text-white">
        {/* Logo Icon */}
        <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" />
        </svg>
      </div>
      <h2 className="text-lg font-bold tracking-tight">VoiceWeb</h2>
    </div>

    <nav className="flex items-center gap-9">
      <Link to="/home" className="text-sm font-medium hover:underline">Home</Link>
      <Link to="/feature" className="text-sm font-medium hover:underline">Features</Link>
      <Link to="/feedback" className="text-sm font-medium hover:underline">Feedback</Link>
    </nav>
  </div>

  <div className="flex items-center gap-8">
    <div className="flex h-10 rounded-xl overflow-hidden bg-gray-800">
      <div className="flex items-center justify-center px-3 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-800 text-white placeholder-gray-400 px-4 focus:outline-none"
      />
    </div>
  </div>
</header>

    </div>
  )
}

export default Navbar