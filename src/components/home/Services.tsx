"use client";

import { motion } from "framer-motion";
import { MessagesSquare, Calculator, Home, Paintbrush } from "lucide-react";

const services = [
  {
    icon: <MessagesSquare className="w-8 h-8 text-brown" />,
    title: "Free Consultation",
    desc: "Talk to our experts and find the best solution tailored to your needs.",
    buttonText: "Consult",
  },
  {
    icon: <Calculator className="w-8 h-8 text-brown" />,
    title: "Cost Estimation",
    desc: "Get an accurate online quote in just a few clicks.",
    buttonText: "Estimate",
  },
  {
    icon: <Home className="w-8 h-8 text-brown" />,
    title: "On-Site Visit",
    desc: "We'll visit your place quickly to assess everything in person.",
    buttonText: "Visit",
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-brown" />,
    title: "Custom Design",
    desc: "Receive a unique design tailored to your space and style.",
    buttonText: "Design",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-2 bg-gray bg-light-background">
      <div className="mx-auto px-6 relative">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-12 bg-brown rounded-tr-full rounded-br-full"></div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800">
              What we offer.
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Discover our comprehensive renovation services
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.03,
                rotateX: 1.5,
                rotateY: -1.5,
                transition: { type: "spring", stiffness: 120, damping: 10 },
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 14,
                delay: i * 0.2,
              }}
              viewport={{ once: true }}
              className="relative group p-6 rounded-tr-[100px] rounded-tl-[20px] bg-beige shadow-xl hover:shadow-none transition-all backdrop-blur-md hover:backdrop-blur-none mx-2 my-2"
            >
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-light-background flex items-center justify-center">
                <div className="relative z-10 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  <div className="bg-white rounded-full p-2">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-full">
                {/* متن */}
                <div className="flex-1 pl-[40px]">
                  <h3 className="text-base font-semibold text-neutral-800 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="flex justify-center mt-auto">
                  <button className="w-[160px] py-2 px-4 text-brown rounded-2xl rounded-tr-[60px] hover:bg-brown hover:text-white transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
