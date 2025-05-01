"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Main Content */}
      <div className="relative max-w-screen mx-auto py-10 h-full">
        <div className="relative h-full">
          {/* Left Content - Behind */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-beige rounded-tr-[300px] p-12 shadow-lg w-[65%] min-h-[600px] absolute left-0"
          >
            {/* Flex container with vertical line and text */}
            <div className="flex items-start">
              {/* Vertical line */}
              <div className="w-[2px] h-[300px] bg-gray-600 mr-5 ml-[80px]" />

              {/* Text content */}
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                  Modern Interior
                  <br />
                  Design Service
                </h1>
                <p className="text-lg text-neutral-800 mb-8">
                  Transform your space into a stunning modern sanctuary with our
                  expert interior design services.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-brown text-white rounded-lg font-medium"
                >
                  Explore Now
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Overlapping */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-[80px] right-0 w-[50%] min-h-[450px] rounded-bl-[300px] shadow-xl"
            style={{
              backgroundImage: "url(/assets/images/kitchen8.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
}
