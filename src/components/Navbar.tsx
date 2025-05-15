"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Stones", href: "/stones" },
  { label: "Blog", href: "/blog" },
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
    <nav
      className={`w-full z-50 sticky top-0 transition-all duration-300 px-2 ${
        scrolled
          ? "bg-light-background/70 backdrop-blur shadow-md"
          : "bg-light-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center justify-between">
        <div className="text-back text-3xl font-bold tracking-wide">
          Maison Stone
        </div>

        <ul className="hidden md:flex gap-6 text-md font-medium justify-center flex-1">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-brown" : "text-gray-700 hover:text-brown"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="w-[230px]">
          <button
            className="group relative inline-block overflow-hidden rounded-2xl rounded-tr-[60px] bg-brown
           text-sm font-semibold text-white px-5 py-3 transition-all duration-300 w-auto"
          >
            <span className="inline-block transition-all duration-300 group-hover:pr-4">
              Book Free Consultation
            </span>
            <ArrowRight
              className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100
             transition-all duration-300 group-hover:right-2"
            />
          </button>
        </div>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-warm-gray font-bold text-3xl">☰</span>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-row gap-6 bg-white shadow-md py-4 px-6 rounded-b-xl">
          <ul className="flex flex-col gap-4 text-lg font-medium flex-1">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`transition-colors duration-300 ${
                      isActive ? "text-brown" : "text-gray-700 hover:text-brown"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="w-full sm:w-1/2 px-4">
            <Image
              src="/assets/images/mobile-menu.jpg"
              alt="Menu Illustration"
              className="w-full h-auto object-cover rounded-xl shadow-md"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
