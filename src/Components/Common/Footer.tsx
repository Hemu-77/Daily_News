"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Left: Logo + company */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            {/* Replace this div with your <Image /> */}
            <div className="bg-red-600 w-8 h-8 rounded flex items-center justify-center text-white font-bold">
              i
            </div>
            <span className="text-xl font-semibold">CapitalHub</span>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            CapitalHub Pvt. Ltd.<br />©COPYRIGHT 2025
          </p>
        </div>

        {/* Middle: Links */}
        <div className="mb-6 md:mb-0 flex flex-col space-y-2 text-sm text-center md:text-left">
          <a href="#" className="hover:text-white">Contact Us</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policies</a>
        </div>

        {/* Right: Social icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
