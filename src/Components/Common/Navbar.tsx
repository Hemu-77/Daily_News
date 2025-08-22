"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useCategory } from "@/Context/CategoryContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {setCategory} = useCategory()

  const categories = [
    "Business",
    "Sports",
    "Technology",
    "Entertainment",
    "International",
    "Science",
    "Travel",
    "General",
    "Health & Fitness",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Left - Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Center - Logo (styled) */}
        <div className="flex-1 flex justify-center">
          <h1 className="text-2xl font-extrabold tracking-wide text-blue-600">
            Capital <span className="text-gray-900">Hub</span>
          </h1>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gray-900 text-white p-4 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Section */}
        <div className="flex justify-between items-center mb-6">
          {/* Language Toggle */}
          <div className="flex gap-2 border rounded-md overflow-hidden text-sm">
            <button className="px-3 py-1 bg-gray-700">English</button>
            <button className="px-3 py-1 hover:bg-gray-700">हिंदी</button>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Categories */}
        <nav className="flex flex-col gap-3 text-gray-300">
          <p className="uppercase text-xs text-gray-400">Categories</p>
          {categories.map((cat) => (
             <button
             key={cat}
             onClick={() => {
               setCategory(cat);
               setIsOpen(false);
             }}
             className="text-left hover:text-white transition-colors"
           >
             {cat}
           </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
