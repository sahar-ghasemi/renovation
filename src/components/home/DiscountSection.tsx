"use client";
import React, { useState } from "react";

const DiscountSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name} ${email}! You will be notified about discounts.`);
    // Here you can handle the form submission (e.g., save to a database or send it to a server)
  };

  return (
    <div className="w-full p-4 bg-[#d6c7b0] text-black text-center rounded-md shadow-lg">
      <h2 className="text-lg font-semibold mb-2">
        Stay Updated on Our Discounts!
      </h2>
      <p className="mb-4">
        Sign up to receive exclusive offers and updates on upcoming discounts.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center"
      >
        <input
          type="text"
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mr-2 p-2 rounded-md bg-white text-black"
          required
        />
        <input
          type="email"
          placeholder="Inter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mr-2 p-2 rounded-md  bg-white text-black"
          required
        />
        <button
          type="submit"
          className="bg-[#a86442] p-2 rounded-md text-white hover:bg-light-oran"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default DiscountSection;
