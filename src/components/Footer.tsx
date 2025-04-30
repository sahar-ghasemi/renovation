"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-ivory to-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Renovation Pro
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Transforming spaces with precision and passion. Your trusted
              partner for all renovation and remodeling needs.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} className="text-gray-600" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} className="text-gray-600" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
              >
                <Twitter size={20} className="text-gray-600" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} className="text-gray-600" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-gray-800 transition-colors"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-gray-800 transition-colors"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-gray-800 transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-gray-800 transition-colors"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-gray-800 transition-colors"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/kitchen"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-gray-800 transition-colors"></span>
                  Kitchen Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bathroom"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-gray-800 transition-colors"></span>
                  Bathroom Remodeling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/interior"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-gray-800 transition-colors"></span>
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/exterior"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-gray-800 transition-colors"></span>
                  Exterior Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom"
                  className="text-gray-600 hover:text-gray-800 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 group-hover:bg-gray-800 transition-colors"></span>
                  Custom Projects
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-white shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Phone size={18} className="text-gray-600" />
                </div>
                <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-white shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Mail size={18} className="text-gray-600" />
                </div>
                <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  info@renovationpro.com
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-white shadow-sm group-hover:shadow-md transition-all duration-300">
                  <MapPin size={18} className="text-gray-600" />
                </div>
                <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  123 Renovation St, Design City
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600">
              © {currentYear} Renovation Pro. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
