"use client";
import React, { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-ivory text-[#0a0a0a] relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute -bottom-160 -left-90 w-250 h-250 bg-gradient-to-br from-orange/40 to-orange/10 rounded-full opacity-30 z-0 blur-[100px]"></div>
      <div className="absolute -bottom-140 -left-70 w-200 h-200 bg-gradient-to-br from-orange/20 to-orange/5 rounded-full opacity-20 z-0 blur-[80px]"></div>
      <div className="absolute -bottom-120 -left-50 w-150 h-150 bg-gradient-to-br from-orange/10 to-orange/0 rounded-full opacity-15 z-0 blur-[60px]"></div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-orange"
            >
              Renovation Pro
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#0a0a0a] leading-relaxed"
            >
              Transforming spaces with precision and passion. Your trusted
              partner for all renovation and remodeling needs.
            </motion.p>
            <motion.div className="flex space-x-4" variants={itemVariants}>
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover="hover"
                  variants={iconVariants}
                  className="relative group"
                >
                  <Link
                    href={social.href}
                    className="p-3 rounded-full bg-white/80 shadow-lg hover:shadow-orange/20 transition-all duration-300 flex items-center justify-center w-12 h-12"
                  >
                    <social.icon
                      size={20}
                      className="text-orange group-hover:text-[#cc5500] group-hover:scale-110 transition-all duration-300"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-semibold text-orange"
            >
              Quick Links
            </motion.h3>
            <motion.ul variants={containerVariants} className="space-y-3">
              {[
                { text: "Our Services", href: "/services" },
                { text: "Projects", href: "/projects" },
                { text: "About Us", href: "/about" },
                { text: "Contact", href: "/contact" },
                { text: "Blog", href: "/blog" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    className="text-[#0a0a0a] hover:text-orange transition-colors flex items-center group"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 bg-orange rounded-full mr-2"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-semibold text-orange"
            >
              Our Services
            </motion.h3>
            <motion.ul variants={containerVariants} className="space-y-3">
              {[
                { text: "Kitchen Renovation", href: "/services/kitchen" },
                { text: "Bathroom Remodeling", href: "/services/bathroom" },
                { text: "Interior Design", href: "/services/interior" },
                { text: "Exterior Renovation", href: "/services/exterior" },
                { text: "Custom Projects", href: "/services/custom" },
              ].map((service, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={service.href}
                    className="text-[#0a0a0a] hover:text-orange transition-colors flex items-center group"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 bg-orange rounded-full mr-2"
                      whileHover={{ scale: 1.5 }}
                    />
                    {service.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-semibold text-orange"
            >
              Contact Us
            </motion.h3>
            <motion.ul variants={containerVariants} className="space-y-4">
              {[
                {
                  icon: Phone,
                  text: "+1 (555) 123-4567",
                },
                {
                  icon: Mail,
                  text: "info@renovationpro.com",
                },
                {
                  icon: MapPin,
                  text: "123 Renovation St, Design City",
                },
              ].map((contact, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="p-3 rounded-full bg-white/80 shadow-lg group-hover:shadow-orange/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <contact.icon
                      size={18}
                      className="text-orange group-hover:text-[#cc5500]"
                    />
                  </motion.div>
                  <span className="text-[#0a0a0a] group-hover:text-orange transition-colors">
                    {contact.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p whileHover={{ scale: 1.02 }} className="text-[#0a0a0a]">
              © {currentYear} Renovation Pro. All rights reserved.
            </motion.p>
            <motion.div className="flex space-x-6" variants={containerVariants}>
              {[
                { text: "Privacy Policy", href: "/privacy" },
                { text: "Terms of Service", href: "/terms" },
                { text: "Cookie Policy", href: "/cookies" },
              ].map((link, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-[#0a0a0a] hover:text-orange transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
