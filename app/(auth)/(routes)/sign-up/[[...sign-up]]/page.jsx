"use client";
import { SignUp, SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Upload, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react"; // Import useState to manage component state

export default function Page() {
  // State to toggle between SignIn and SignUp components
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev); // Toggle between SignUp and SignIn
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-50"></div>
                <Upload className="h-8 w-8 text-blue-400 relative" />
              </div>
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                QuickBox
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {isSignUp ? "Welcome to QuickBox" : "Welcome back"}
            </h2>
            <p className="text-gray-400">{isSignUp ? "Sign up to your account to continue" : "Sign in to your account to continue"}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card md:p-6 p-1"
          >
            {/* Display SignUp or SignIn based on the state */}
            {isSignUp ? <SignUp /> : <SignIn />}

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                {isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={toggleForm} // Toggle form when clicked
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Sign In
                    </button>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <button
                      onClick={toggleForm} // Toggle form when clicked
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
