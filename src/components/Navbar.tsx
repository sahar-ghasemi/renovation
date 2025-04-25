"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Stone", href: "/stone" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ x: +1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full z-50 sticky top-0 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center justify-between">
        {/* لوگو */}
        <div className="text-green text-3xl font-bold tracking-wide">
          Crazy Stone
        </div>

        {/* منوی دسکتاپ */}
        <ul className="hidden md:flex gap-6 text-md font-medium justify-center flex-1">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-orange" : "text-gray-700 hover:text-green"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* دکمه دسکتاپ */}
        <div className="hidden md:block">
          <Link href="#stone-menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0px #e5e5e5",
                  "0 0 8px #e5e5e5",
                  "0 0 0px #e5e5e5",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-green text-white px-4 py-1 rounded-md font-bold shadow hover:text-white/90 hover:cursor-pointer"
            >
              Find total cost?
            </motion.button>
          </Link>
        </div>

        {/* آیکون موبایل */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-green font-bold text-2xl">☰</span>
        </div>
      </div>

      {/* منوی موبایل */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-row gap-6 bg-white shadow-md py-4 px-6 rounded-b-xl">
          {/* منوها */}
          <ul className="flex flex-col gap-4 text-lg font-medium flex-1">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)} // 👈 بستن منو با کلیک
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-orange"
                        : "text-gray-700 hover:text-green"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* تصویر کنار منو */}
          <div className="w-full sm:w-1/2">
            <Image
              src="/assets/images/mobile-menu.jpg" // مسیر تصویر رو با فایل واقعی‌ت عوض کن
              alt="Menu Illustration"
              className="w-full h-auto object-cover rounded-xl shadow-md"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
