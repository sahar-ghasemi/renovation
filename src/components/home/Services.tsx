"use client";

import { motion } from "framer-motion";
import { MessagesSquare, Calculator, Home, Paintbrush } from "lucide-react";

const services = [
  {
    icon: <MessagesSquare className="w-6 h-6 text-brown mr-2" />,
    title: "Free Consultation",
    desc: "Talk to our experts and find the best solution tailored to your needs.",
  },
  {
    icon: <Calculator className="w-6 h-6 text-brown mr-2" />,
    title: "Cost Estimation",
    desc: "Get an accurate online quote in just a few clicks.",
  },
  {
    icon: <Home className="w-6 h-6 text-brown mr-2" />,
    title: "On-Site Visit",
    desc: "We'll visit your place quickly to assess everything in person.",
  },
  {
    icon: <Paintbrush className="w-6 h-6 text-brown mr-2" />,
    title: "Custom Design",
    desc: "Receive a unique design tailored to your space and style.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-light-background pb-30">
      <div className="w-full max-w-7xl xl:max-w-none mx-auto px-4">
        <div className="flex items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#0a0a0a]"
          >
            What We Offer
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-0 rounded-lg bg-white flex flex-row items-stretch"
            >
              <div className="w-[20px] min-w-[20px] h-[20px] bg-brown rounded-br-full" />
              <div className="flex-1 p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-[#0a0a0a]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[#0a0a0a]/80">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
