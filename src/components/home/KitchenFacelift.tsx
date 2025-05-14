"use client";

import Image from "next/image";

const KitchenFacelift = () => {
  return (
    <section className="w-full py-16 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 px-5">
        {/* Text Section */}
        <div className="md:w-1/2 w-full text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-6">
            Upgrade Your Kitchen with Stunning Stone Surfaces!
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Transform your kitchen in just a few days with luxurious stone
            countertops and surfaces—no demolition, no hassle!
            <br />
            Our expert team replaces your old benchtops with premium stone,
            giving your kitchen a fresh, modern look at a fraction of the cost
            of a full renovation.
            <br />
            Enjoy a beautiful, durable, and easy-to-clean kitchen that will
            impress for years to come.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-brown/10">
            <Image
              src="/assets/images/both-in-one.webp"
              alt="Kitchen Before and After"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitchenFacelift;
