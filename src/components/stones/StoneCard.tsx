"use client";

import Image from "next/image";
import { Shield, Palette, Hammer, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Stone {
  id: number;
  name: string;
  defaultImage: string;
  hoverImage: string;
  price: number;
  popularity: number;
  durability: number;
  colorStability: number;
  impactResistance: number;
  category: "mineral" | "porcelain";
  trending: boolean;
  color: string;
}

interface StoneCardProps {
  stone: Stone;
}

export default function StoneCard({ stone }: StoneCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link href={`/stones/${stone.id}`}>
      <div
        className="relative bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-64">
          <Image
            // src={stone.defaultImage}
            src="/assets/images/back.jpg"
            alt={stone.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-all duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            // src={stone.hoverImage}
            src="/assets/images/kitchen12.jpg"
            alt={`${stone.name} - hover`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-all duration-300 absolute top-0 left-0 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute top-2 right-2 flex gap-2">
            {stone.trending && (
              <div className="bg-brown text-white px-3 py-1 rounded-full text-xs font-semibold">
                Trending
              </div>
            )}
          </div>
          <div className="absolute bottom-2 right-2">
            <button
              onClick={handleFavoriteClick}
              className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200"
            >
              <Heart
                className={`w-5 h-5 transition-colors duration-200 ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-neutral-400"
                }`}
              />
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-neutral-800 mb-3">
            {stone.name}
          </h3>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center justify-between bg-neutral-50 px-3 py-2 rounded-lg">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-brown mr-2" />
                <span className="text-sm font-medium text-neutral-700">
                  Durability
                </span>
              </div>
              <span className="text-sm font-semibold text-neutral-800">
                {stone.durability.toFixed(1)}
              </span>
            </div>
            <div className="flex items-center justify-between bg-neutral-50 px-3 py-2 rounded-lg">
              <div className="flex items-center">
                <Palette className="w-4 h-4 text-brown mr-2" />
                <span className="text-sm font-medium text-neutral-700">
                  Color Stability
                </span>
              </div>
              <span className="text-sm font-semibold text-neutral-800">
                {stone.colorStability.toFixed(1)}
              </span>
            </div>
            <div className="flex items-center justify-between bg-neutral-50 px-3 py-2 rounded-lg">
              <div className="flex items-center">
                <Hammer className="w-4 h-4 text-brown mr-2" />
                <span className="text-sm font-medium text-neutral-700">
                  Impact
                </span>
              </div>
              <span className="text-sm font-semibold text-neutral-800">
                {stone.impactResistance.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
