import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import AdBanner from './AdBanner';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdBanner
          adKey="8c898e2656d67a62b4a7ac26f06aa83b"
          format="iframe"
          height={50}
          width={320}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="space-y-4">
            <Logo white />
            <p className="text-gray-400">
              Your one-stop solution for SEO and content analysis. Empowering creators to achieve better online visibility.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-secondary transition-colors">Tools</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors">Contact</Link></li>
              <li><Link to="/feedback" className="text-gray-400 hover:text-secondary transition-colors">Feedback</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-gray-400 hover:text-secondary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-gray-400 hover:text-secondary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} UtilityBox. All rights reserved. Created by Sumit Kumar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;