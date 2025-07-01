// src/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaFacebookF, FaXTwitter } from 'react-icons/fa6'; // Assuming you'll install react-icons

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 lg:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <Link href="/" className="flex items-center mb-4">
            {/* Logo for Footer - can be the same as header or a different version */}
            <Image
              src="/images/puggleit-logo.PNG" // You'll need to place your logo here
              alt="Puggle IT Logo"
              width={32} // Adjust width as needed
              height={32} // Adjust height as needed
              className="h-8 w-8 mr-2"
            />
            <span className="text-xl font-bold text-white">Puggle IT</span>
          </Link>
          <p className="text-sm leading-relaxed mb-4">
            Transforming Ideas into Digital Excellence, Elevate Your Online Presence With Our Innovative Solutions And Strategic Digital Services.
          </p>
          <p className="flex items-center text-sm mb-2">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            info@puggleit.com
          </p>
          <p className="flex items-center text-sm">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            08-3001-0814
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-green-500 transition-colors flex items-center">
                <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-green-500 transition-colors flex items-center">
                <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                Services
              </Link>
            </li>
            <li>
              <Link href="/mentorship" className="hover:text-green-500 transition-colors flex items-center">
                <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                Mentorship Program
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-500 transition-colors flex items-center">
                <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-green-500 transition-colors flex items-center">
                <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-green-500 transition-colors flex items-center">
                <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="md:col-span-1 lg:col-span-1">
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              <FaYoutube className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              <FaXTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-12 mt-8 pt-6 border-t border-gray-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Puggle IT. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link href="/privacy-policy" className="hover:text-green-500 transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-green-500 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;