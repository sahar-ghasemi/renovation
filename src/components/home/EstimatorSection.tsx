"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EstimatorSection() {
  return (
    <section
      className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center
     justify-center gap-12 lg:gap-20 px-6 lg:px-20 py-16  bg-gradient-to-br 
          from-white to-[#efe8df]"
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
          <span className="text-orange">Stone Renovation Cost</span>
        </h2>

        <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
          Easily calculate an approximate renovation cost by simply entering
          your stone measurements and number of cut-outs.
        </p>

        <button
          className="group inline-flex items-center px-5 py-3 rounded-r-full text-sm font-semibold text-white bg-gradient-to-br 
          from-orange to-gold  hover:from-gold hover:to-orange shadow-lg hover:cursor-pointer "
        >
          <span className="mr-2">Start Estimating</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </motion.div>

      {/* Right - Video or Animated Visual */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2"
      >
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-video border border-gray-200 bg-white">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/renovation-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  );
}
