"use client";
import StoneCard from "./StoneCard";
import { motion } from "framer-motion";
import { stones, Stone } from "./data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

export default function StonesPage() {
  return (
    <main className="py-10 px-4 w-full">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Available Stones
      </h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {stones.map((stone, idx) => (
          <motion.div key={idx} variants={item}>
            <StoneCard stone={stone} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
