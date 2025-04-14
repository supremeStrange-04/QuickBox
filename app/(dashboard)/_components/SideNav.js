"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Upload, Files, CreditCard, LogOut, Menu } from "lucide-react";
import { useClerk } from '@clerk/clerk-react';

export default function SideNav() {
  const { signOut } = useClerk(); 
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "flex items-center space-x-3 px-4 py-2 rounded-md text-gray-300 hover:bg-gray-700 transition-all";
  const activeClass = "bg-gray-700 text-white font-semibold";

  return (
    <>
      {/* Hamburger Button for mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-gray-800/80 hover:bg-gray-700 transition"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Mobile overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-gray-900 transition-transform duration-300 transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}
      >
        <div className="p-4 flex items-center space-x-3 mb-6">
          <Upload className="h-6 w-6 text-blue-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            QuickBox
          </span>
        </div>

        <nav className="space-y-2 px-4">
          <Link
            href="/files"
            className={`${linkClass} ${
              pathname === "/files" ? activeClass : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Files className="h-5 w-5" />
            <span>My Files</span>
          </Link>
          <Link
            href="/upload"
            className={`${linkClass} ${
              pathname === "/upload" ? activeClass : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Upload className="h-5 w-5" />
            <span>Upload</span>
          </Link>
          <Link
            href="/upgrade"
            className={`${linkClass} ${
              pathname === "/upgrade" ? activeClass : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            <CreditCard className="h-5 w-5" />
            <span>Upgrade</span>
          </Link>
        </nav>

        <div className="border-t border-gray-700 mt-auto px-4 pt-4 pb-6">
          <button
            className={`${linkClass} w-full`}
            onClick={() => {
              signOut({ redirectUrl: '/' }); // Sign the user out
              setIsOpen(false); // Close the menu if necessary
            }}
          >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
}
