// src/components/Header.tsx
'use client'; // This directive is necessary for client-side interactivity like the mobile menu toggle.

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4 lg:py-6 lg:px-12 border-b border-gray-800">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* Replace with your actual logo image path */}
          {/* Assuming your logo is in public/images/puggleit-logo.png */}
          <Image
            src="/puggleit-logo.PNG"
            alt="Puggle IT Logo"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
            className="h-10 w-10 mr-2"
          />
          <span className="text-2xl font-bold">Puggle IT</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 items-center text-lg">
          <Link href="/about" className="hover:text-green-500 transition-colors">
            About Us
          </Link>
          <Link href="/services" className="hover:text-green-500 transition-colors">
            Services
          </Link>
          <Link href="/mentorship" className="hover:text-green-500 transition-colors">
            Mentorship Program
          </Link>
          <Link href="/contact" className="hover:text-green-500 transition-colors">
            Contact Us
          </Link>
          <Link href="/careers" className="hover:text-green-500 transition-colors">
            Careers
          </Link>
          <Link href="/blog" className="hover:text-green-500 transition-colors">
            Blog
          </Link>
          <Link href="/contact">
            <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full font-semibold transition-colors duration-300">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 text-xl mt-10">
          <Link href="/about" className="hover:text-green-500 transition-colors" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="/services" className="hover:text-green-500 transition-colors" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/mentorship" className="hover:text-green-500 transition-colors" onClick={() => setIsOpen(false)}>
            Mentorship Program
          </Link>
          <Link href="/contact" className="hover:text-green-500 transition-colors" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
          <Link href="/careers" className="hover:text-green-500 transition-colors" onClick={() => setIsOpen(false)}>
            Careers
          </Link>
          <Link href="/blog" className="hover:text-green-500 transition-colors" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full font-semibold transition-colors duration-300 mt-4">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;