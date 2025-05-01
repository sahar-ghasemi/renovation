"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative  bg-light-background overflow-hidden">
      {/* Main Content */}
      <div className="relative max-w-screen mx-auto py-10 h-full">
        <div className="relative h-full min-h-[500px]">
          {/* Text content - Above all */}
          <div className="absolute top-24 left-0 z-10 flex items-start">
            <div className="w-[2px] h-[250px] bg-gray-600 ml-[80px]" />
            <div className="ml-5 max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Premium Stone
                <br />
                Renovation Services
              </h1>
              <p className="text-lg text-neutral-800 mb-8">
                Transform your space with our expert stone renovation services,
                combining elegance and durability for timeless beauty.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-brown text-white rounded-tr-[100px] rounded-bl-[100px] font-medium hover:bg-brown/90 transition-all shadow-[0_8px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_4px_0_0_rgba(0,0,0,0.2)]"
              >
                Get a Quote
              </motion.button>
            </div>
          </div>

          {/* Left Content - Behind */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-beige rounded-tr-[300px] p-12 shadow-lg w-[65%] min-h-[500px]"
            style={{ position: "absolute", left: 0 }}
          />

          {/* Right Content - Overlapping */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[50%] min-h-[400px] rounded-bl-[300px] shadow-xl"
            style={{
              position: "absolute",
              top: "80px",
              right: 0,
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
