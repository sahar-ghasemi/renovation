"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PreviousHero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Image
        src="/assets/images/kitchen12.jpg"
        alt="Kitchen Background"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#f5f0e1]">Elevate Your Home</span>{" "}
          <br className="hidden md:block" /> With Timeless Stone Design
        </motion.h1>

        <motion.p
          className="text-white text-lg md:text-xl max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Premium stone renovation crafted for elegance, durability, and style.
          Trusted by homeowners across Melbourne.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <button className="bg-gold/90 text-black px-6 py-3 rounded-md font-semibold hover:bg-gold transition cursor-pointer">
            Get a Free Quote
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-orange hover:border-none hover:text-black transition cursor-pointer">
            View Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
