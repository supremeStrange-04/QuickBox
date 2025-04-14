import React, { useState } from "react";
import { Upload } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition"></div>
              <Upload className="h-7 w-7 text-blue-400 relative" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              QuickBox
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="/upload"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Upload
            </a>
            <a
              href=".footer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact Us
            </a>
            <button className="bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25">
              {" "}
              <a href="/sign-up">Get Started</a>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } z-50 bg-gray-900/85 sm:hidden text-white text-center absolute top-18 left-0 right-0 py-4 px-6 backdrop-blur-lg rounded-b-lg`}
      >
        <a
          href="#features"
          className="block text-gray-300 hover:text-white py-2"
        >
          Home
        </a>
        <a href="/upload" className="block text-gray-300 hover:text-white py-2">
          Upload
        </a>
        <a href=".footer" className="block text-gray-300 hover:text-white py-2">
          About
        </a>
        <a
          href="#pricing"
          className="block text-gray-300 hover:text-white py-2"
        >
          Contact Us
        </a>
        <button className="w-[45%] bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25">
          <a href="/sign-up">Get Started</a>
        </button>
      </div>
    </div>
  );
}

export default Header;
