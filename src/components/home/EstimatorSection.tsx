"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function EstimatorSection() {
  return (
    <>
      <section
        className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center
justify-center gap-10 lg:gap-20 px-2 lg:px-6 py-16 bg-background"
      >
        {/* Left - Text Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-warm-gray mb-4 leading-snug">
            Instantly Estimate Your <br />
            <span className="text-brown">Stone Renovation Cost.</span>
          </h2>

          <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
            Easily calculate an approximate renovation cost by simply entering
            your stone measurements and number of cut-outs.
          </p>

          <button
            className="flex items-center gap-2 rounded-2xl rounded-tr-[60px] bg-brown/90
              text-sm font-semibold text-white px-5 py-3 transition-all duration-300 hover:cursor-pointer 
              hover:bg-brown shadow-[0_8px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_4px_0_0_rgba(0,0,0,0.2)]"
          >
            <span>Start Estimating</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Right - Video or Animated Visual */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 ml-auto mr-0"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_0_0_rgba(0,0,0,0.2)] aspect-video border border-gray-200 bg-white rounded-tl-[170px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover bg-gray-100"
            >
              <source src="assets/videos/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </section>
    </>
  );
}
