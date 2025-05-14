"use client";
import { Phone, Gem } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Topbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconStyle = "w-5 h-5 text-ivory";
  const letters = Array.from(
    " Professional Stone Consultation - Free of Charge! Expert advice for your perfect stone selection."
  );
  return (
    <div
      className={`transition-all duration-500 text-sm text-black
        px-4 py-2 bg-dark-beige border-none font-medium flex justify-between items-center
        ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* »ثبف side: Promotional text */}
      <div className="text-gray flex gap-2 items-center font-semibold text-sm sm:text-base text-right">
        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 1, // مثلا هر ۴ ثانیه یه دور
            repeat: Infinity, // همیشه بچرخه
            repeatType: "loop", // لوپ شه
          }}
        >
          <Gem className="w-5 h-5 text-ivory" />
        </motion.div>
        <span className="mr-2 text-ivory flex ">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: index * 0.05, // هر حرف کمی دیرتر شروع کنه
              }}
              className="text-ivory font-semibold whitespace-pre"
            >
              {letter}
            </motion.span>
          ))}{" "}
        </span>
      </div>
      {/* Right side: Social icons */}
      <div className="flex items-center gap-4">
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          href="tel:+61461575388"
          className="flex items-center gap-1 cursor-pointer"
        >
          <Phone className={iconStyle} />
          <span className="text-ivory hidden sm:inline">+61 461 575 388</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          href="https://wa.me/61461575388"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 cursor-pointer"
        >
          <Phone className={iconStyle} />
          <span className="text-ivory hidden sm:inline">WhatsApp</span>
        </motion.a>
      </div>
    </div>
  );
};

export default Topbar;
