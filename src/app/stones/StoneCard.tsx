"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface Stone {
  id: number;
  name: string;
  images: string[];
}

export default function StoneCard({ stone }: { stone: Stone }) {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <Link
      href={`/stones/${stone.id}`}
      className="relative group bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col items-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] focus:outline-none focus:ring-2 focus:ring-orange-400"
      style={{ textDecoration: "none" }}
    >
      <div className="w-full aspect-square relative">
        <Swiper
          spaceBetween={8}
          slidesPerView={1}
          className="h-full"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {stone.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                // src={img}
                src="/assets/images/card-background.jpg"
                width={600}
                height={600}
                alt={stone.name + " " + (idx + 1)}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105 rounded-t-lg"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Left Arrow */}
        {stone.images.length > 1 && (
          <button
            className="absolute  border-none hover:cursor-pointer left-3 top-1/2 -translate-y-1/2 z-10 p-0.5 rounded-full bg-gradient-to-br
             from-orange-400/80 to-yellow-300/80 shadow-lg border border-white/60 backdrop-blur-md opacity-0
              group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:shadow-xl w-7 h-7 flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              swiperRef.current?.slidePrev();
            }}
            tabIndex={-1}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 text-white drop-shadow-[0_2px_8px_rgba(245,150,29,0.5)]" />
          </button>
        )}
        {/* Right Arrow */}
        {stone.images.length > 1 && (
          <button
            className="absolute border-none hover:cursor-pointer right-3 top-1/2 -translate-y-1/2 z-10 p-0.5 rounded-full bg-gradient-to-br from-orange-400/80 to-yellow-300/80 shadow-lg border border-white/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:shadow-xl w-7 h-7 flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              swiperRef.current?.slideNext();
            }}
            tabIndex={-1}
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 text-white drop-shadow-[0_2px_8px_rgba(245,150,29,0.5)]" />
          </button>
        )}
      </div>
      {/* Stone name below the slider */}
      <div className="p-3 text-center">
        <span className="font-semibold text-gray-800 text-sm">
          {stone.name}
        </span>
      </div>
    </Link>
  );
}
