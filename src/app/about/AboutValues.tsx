"use client";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, User } from "lucide-react";

const AboutValues = () => (
  <section className=" bg-light-background pb-30 ">
    <div className="w-full max-w-7xl xl:max-w-none mx-auto px-4">
      {/* Brown line and heading */}

      <div className="flex items-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#0a0a0a] "
        >
          Our Values
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Quality",
            description:
              "We never compromise on quality, ensuring every project meets our high standards.",
            icon: <CheckCircle className="w-6 h-6 text-brown mr-2" />,
          },
          {
            title: "Innovation",
            description:
              "Constantly evolving and adopting new techniques to deliver cutting-edge solutions.",
            icon: <Sparkles className="w-6 h-6 text-brown mr-2" />,
          },
          {
            title: "Customer Focus",
            description:
              "Your satisfaction is our priority, and we work closely with you throughout the process.",
            icon: <User className="w-6 h-6 text-brown mr-2" />,
          },
        ].map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-0 rounded-lg bg-white flex flex-row items-stretch"
          >
            {/* Left: Brown bar */}
            <div className="w-[6px] min-w-[6px] h-full bg-brown rounded-tr-full rounded-br-full" />
            {/* Right: Content */}
            <div className="flex-1 p-6 ">
              <div className="flex items-center mb-4">
                {value.icon}
                <h3 className="text-xl font-semibold text-[#0a0a0a]">
                  {value.title}
                </h3>
              </div>
              <p className="text-[#0a0a0a]/80">{value.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutValues;
