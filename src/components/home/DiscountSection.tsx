"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";

const DiscountSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you, ${name} ${email}! You will be notified about discounts.`);
    // Here you can handle the form submission (e.g., save to a database or send it to a server)
  };

  return (
    <section className="w-full bg-light-background">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section - 75% width */}
        <div className="w-full lg:w-[75%] bg-beige p-8 lg:p-16">
          <div className="max-w-3xl ml-auto mr-16">
            <div className="relative">
              <div className="absolute left-0 top-0 h-[110px] w-[4px] bg-brown rounded-tr-full rounded-br-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-4 pl-8">
                Stay Updated on Our Discounts!
              </h2>
              <p className="text-neutral-600 mb-8 text-lg pl-8">
                Sign up to receive exclusive offers and updates on upcoming
                discounts. Be the first to know about our special promotions and
                savings.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <div className="flex-1 flex flex-col sm:flex-row gap-4 w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 p-3 rounded-md border border-gray-200 text-black min-w-[180px] focus:outline-none focus:ring-2 focus:ring-brown/50 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 p-3 rounded-md border border-gray-200 text-black min-w-[180px] focus:outline-none focus:ring-2 focus:ring-brown/50 focus:border-transparent"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                  required
                />
              </div>
              <button
                type="submit"
                className="group relative inline-block overflow-hidden rounded-2xl 
                rounded-tr-[60px] bg-brown text-sm font-semibold text-white px-5 py-3
                 transition-all duration-300 w-auto hover:bg-brown/90 hover:shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:cursor-pointer"
              >
                <span className="inline-block transition-all duration-300">
                  Subscribe Now
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Right Section - 25% width */}
        <div className="hidden lg:block w-full lg:w-[25%] bg-beige relative rounded-br-[180px]">
          <div className="w-[55%] h-[250px] rounded-br-[100px] bg-beige absolute left-1/2 -translate-x-1/2 top-0 overflow-hidden">
            <Image
              src="/assets/images/kitchen8.jpg"
              alt="Kitchen renovation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
