"use client";
import React from "react";
import { notFound } from "next/navigation";
import { stones, Stone } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function StoneDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const stone = stones.find((s: Stone) => s.id === Number(id));
  if (!stone) return notFound();

  return (
    <main className="max-w-6xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-8 items-start">
      {/* Left: Image slider */}
      <div className="w-full md:w-1/2">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          className="rounded-2xl shadow-xl"
        >
          {stone.images.map((img: string, idx: number) => (
            <SwiperSlide key={idx}>
              <Image
                src={img}
                width={600}
                height={600}
                alt={stone.name + " " + (idx + 1)}
                className="object-cover w-full aspect-square rounded-2xl"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Right: Info */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-2">
          {stone.name}{" "}
          <span className="text-base font-normal text-gray-400">
            (ID: {id})
          </span>
        </h1>
        <p className="text-gray-600 leading-relaxed">
          This is a sample description for <b>{stone.name}</b>. You can add more
          details about the stone, its properties, best use cases, and any other
          information you want to show here. This section is fully customizable.
        </p>
      </div>
    </main>
  );
}
