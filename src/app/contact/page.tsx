"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-light-background py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Get Your Free Consultation
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Transform your space with our expert guidance. Book your free
            consultation today and take the first step towards your dream
            renovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
              Request Your Free Consultation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brown/50 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brown/50 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brown/50 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brown/50 focus:border-transparent"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="kitchen">Kitchen Renovation</option>
                  <option value="bathroom">Bathroom Renovation</option>
                  <option value="living">Living Room</option>
                  <option value="outdoor">Outdoor Space</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brown/50 focus:border-transparent"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="group relative inline-block overflow-hidden rounded-2xl rounded-tr-[60px] bg-brown text-sm font-semibold text-white px-5 py-3 transition-all duration-300 w-full"
              >
                <span className="inline-block transition-all duration-300 group-hover:pr-4">
                  Request Free Consultation
                </span>
                <ArrowRight className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:right-2" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                Why Choose Our Consultation?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-brown/10 p-2 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brown" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">
                      Expert Guidance
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Get professional advice from our experienced stone
                      specialists
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brown/10 p-2 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brown" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">
                      Customized Solutions
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Receive personalized recommendations for your specific
                      needs
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brown/10 p-2 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brown" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">
                      No Obligation
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Free consultation with no pressure to commit
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brown/10 p-2 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-brown" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">
                      Quick Response
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      We&apos;ll get back to you within 24 hours
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-brown/5 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-neutral-600 mb-6">
                Our team of experts is ready to help you create the perfect
                stone renovation for your home. Book your free consultation
                today and take the first step towards your dream space.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm text-neutral-500">Call us directly</p>
                  <a
                    href="tel:+61461575388"
                    className="text-lg font-semibold text-neutral-900 hover:text-brown transition-colors"
                  >
                    +61 461 575 388
                  </a>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-neutral-500">Email us</p>
                  <a
                    href="mailto:info@maisonstone.com"
                    className="text-lg font-semibold text-neutral-900 hover:text-brown transition-colors"
                  >
                    info@maisonstone.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
