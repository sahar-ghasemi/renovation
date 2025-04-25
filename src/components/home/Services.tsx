"use client";

import { motion } from "framer-motion";
import { MessagesSquare, Calculator, Home, Paintbrush } from "lucide-react";
import BackgroundImage from "../BackgroundImage";

const services = [
  {
    icon: <MessagesSquare className="w-8 h-8 text-orange" />,
    title: "Free Consultation",
    desc: "Talk to our experts and find the best solution tailored to your needs.",
  },
  {
    icon: <Calculator className="w-8 h-8 text-orange" />,
    title: "Instant Cost Estimation",
    desc: "Get an accurate online quote in just a few clicks.",
  },
  {
    icon: <Home className="w-8 h-8 text-orange" />,
    title: "On-Site Visit",
    desc: "We’ll visit your place quickly to assess everything in person.",
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-orange" />,
    title: "Custom Design",
    desc: "Receive a unique design tailored to your space and style.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-20">
      <BackgroundImage />

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ visibility: "hidden", y: 100, scale: 0 }}
              whileInView={{ visibility: "visible", y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="relative group p-6 rounded-3xl bg-white/15 border border-white/20 shadow-xl hover:shadow-2xl  hover:-translate-y-2"
            >
              {/* Backdrop Blur for each card */}
              <div className="absolute inset-0 z-0  backdrop-blur-sm rounded-3xl"></div>

              <div
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-green to-orange rounded-full flex items-center
               justify-center shadow-md group-hover:scale-110 "
              >
                <div className="bg-white rounded-full p-3">{service.icon}</div>
              </div>
              <div className="mt-12 z-10 relative">
                <h3 className="text-lg font-bold mb-2 text-[#2d2d2d]">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
