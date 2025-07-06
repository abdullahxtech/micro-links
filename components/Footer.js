"use client"
import Link from "next/link";
import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-blue-500/30 pt-5">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo & Tagline */}
        <div className="flex items-center space-x-1 text-xl font-bold">
          <FaLink className="text-sky-400" />
          <span className="text-white">Micro</span>
          <span className="text-sky-400">Links</span>
        </div>
        <p className="text-gray-400 text-center md:text-left">
          Shorten smarter. Build memorable links with MicroLinks.
        </p>

        {/* Right: Navigation & Social */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex space-x-4 text-sm">
            <Link href="/" className="hover:text-sky-400 transition">Home</Link>
            <Link href="/about" className="hover:text-sky-400 transition">About</Link>
            <Link href="/shorten" className="hover:text-sky-400 transition">Try Now</Link>
          </div>
          <div className="flex space-x-4 text-xl mt-2 md:mt-0">
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-sky-400 transition" />
            </Link>
            <Link href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-sky-400 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-600 border-t border-blue-500/20 py-4">
        © {new Date().getFullYear()} MicroLinks. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
