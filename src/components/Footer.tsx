import React from 'react';
import { Building2, Globe, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-xl font-bold">Project</span>
                <span className="text-xl font-bold text-blue-400">Invest</span>
                <Globe className="h-4 w-4 text-amber-400" />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting investors with premium international real estate opportunities across global markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About Us</a></li>
              <li><a href="/properties" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Properties</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Investment Advisory</span></li>
              <li><span className="text-gray-300">Property Management</span></li>
              <li><span className="text-gray-300">Market Analysis</span></li>
              <li><span className="text-gray-300">Legal Support</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">info@projectinvest.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Project Invest. All rights reserved. | Connecting global investors with premium real estate opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;