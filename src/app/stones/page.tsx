"use client";
import StoneCard, { Stone } from "./StoneCard";
import { motion } from "framer-motion";

const stones: Stone[] = [
  {
    name: "Granite Black",
    images: [
      "/assets/images/stone1-1.jpg",
      "/assets/images/stone1-2.jpg",
      "/assets/images/stone1-3.jpg",
      "/assets/images/stone1-4.jpg",
      "/assets/images/stone1-5.jpg",
    ],
  },
  {
    name: "Marble White",
    images: [
      "/assets/images/stone2-1.jpg",
      "/assets/images/stone2-2.jpg",
      "/assets/images/stone2-3.jpg",
    ],
  },
  {
    name: "Travertine Classic",
    images: ["/assets/images/stone3-1.jpg", "/assets/images/stone3-2.jpg"],
  },
  {
    name: "Onyx Gold",
    images: [
      "/assets/images/stone4-1.jpg",
      "/assets/images/stone4-2.jpg",
      "/assets/images/stone4-3.jpg",
    ],
  },
  {
    name: "Limestone Grey",
    images: ["/assets/images/stone5-1.jpg", "/assets/images/stone5-2.jpg"],
  },
];

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
