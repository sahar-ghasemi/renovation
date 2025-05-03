"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutHero = () => (
  <section className="relative w-full mb-40 h-auto md:h-[60vh]">
    <div className="absolute inset-0 bg-light-background/10" />
    <div className="w-full max-w-7xl xl:max-w-none mx-auto px-4 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full"
        >
          <div className="grid grid-cols-2 h-full gap-4">
            {/* Left column - centered image */}
            <div className="flex items-center">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/assets/images/kitchen5.webp"
                  alt="About Image 2"
                  fill
                  className="object-cover rounded-tl-[50px]"
                />
              </div>
            </div>
            {/* Right column - two stacked images */}
            <div className="flex flex-col justify-between h-full">
              <div className="relative w-3/4 h-[200px] mb-8 mx-auto">
                <Image
                  src="/assets/images/kitchen12.jpg"
                  alt="About Image 1"
                  fill
                  className="object-cover rounded-tr-[50px]"
                />
              </div>
              <div className="relative w-full h-[260px]">
                <Image
                  src="/assets/images/kitchen10.jpg"
                  alt="About Image 3"
                  fill
                  className="object-cover rounded-br-[50px]"
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <p className="text-lg text-brown justify-center mb-2">A BIT</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-9">
            About Maison Stone.
          </h1>
          <p className="text-lg text-[#0a0a0a]/80 mb-8">
            Transforming spaces with precision and passion. Your trusted partner
            for all renovation and remodeling needs.Transforming spaces with
            precision and passion. Your trusted partner for all renovation and
            remodeling needs.Transforming spaces with precision and passion.
          </p>
          <Link
            href="/contact"
            className="group relative inline-block overflow-hidden rounded-2xl rounded-tr-[60px] bg-brown
            text-sm font-semibold text-white px-5 py-3 transition-all duration-300 w-auto"
          >
            <span className="inline-block transition-all duration-300 group-hover:pr-4">
              Contact Us
            </span>
            <ArrowRight
              className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100
              transition-all duration-300 group-hover:right-2"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutHero;
