"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutStory = () => (
  <section className="mb-15  w-full bg-light-background">
    <div className="w-full max-w-7xl xl:max-w-none mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="min-h-[260px] flex flex-col justify-center bg-beige w-full pl-5"
        >
          {/* Brown line and heading */}
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-brown rounded-tr-full rounded-br-full mr-3" />
            <h2 className="text-3xl font-bold text-[#0a0a0a]">Our Story</h2>
          </div>
          <p className="text-[#0a0a0a]/80 leading-relaxed">
            Founded with a vision to revolutionize the renovation industry,
            Maison Stone has been at the forefront of delivering exceptional
            craftsmanship and innovative design solutions. Our journey began
            with a simple mission: to transform ordinary spaces into
            extraordinary living environments.
          </p>
        </motion.div>
        <div className="w-full h-[260px]">
          <Image
            src="/assets/images/story.webp"
            alt="Our Story"
            fill={false}
            width={1920}
            height={260}
            className="object-cover w-full h-full rounded-br-[200px]"
            style={{ objectPosition: "center 60%" }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutStory;
