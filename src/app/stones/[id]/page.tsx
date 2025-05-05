"use client";

import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { Shield, Palette, Hammer, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import StoneCard from "@/components/stones/StoneCard";

interface Stone {
  id: number;
  name: string;
  image: string;
  price: number;
  durability: number;
  colorStability: number;
  impactResistance: number;
  category: string;
  trending: boolean;
  popularity?: number;
}

interface SimilarStone extends Omit<Stone, "popularity"> {
  similarity: string[];
}

export default function StoneDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [stone, setStone] = useState<Stone | null>(null);
  const [loading, setLoading] = useState(true);
  const resolvedParams = React.use(params);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const stones: Stone[] = [
      {
        id: 1,
        name: "Mineral Black Galaxy",
        image: "/assets/images/back.jpg",
        price: 120,
        durability: 4.9,
        colorStability: 4.7,
        impactResistance: 4.8,
        category: "mineral",
        trending: true,
      },
      {
        id: 2,
        name: "Mineral Carrara",
        image: "/assets/images/back.jpg",
        price: 95,
        durability: 4.5,
        colorStability: 4.3,
        impactResistance: 4.4,
        category: "mineral",
        trending: false,
      },
      {
        id: 3,
        name: "Mineral Bianco Romano",
        image: "/assets/images/back.jpg",
        price: 110,
        durability: 4.8,
        colorStability: 4.6,
        impactResistance: 4.7,
        category: "mineral",
        trending: true,
      },
      {
        id: 4,
        name: "Porcelain Nero",
        image: "/assets/images/back.jpg",
        price: 130,
        durability: 4.7,
        colorStability: 4.8,
        impactResistance: 4.6,
        category: "porcelain",
        trending: true,
      },
      {
        id: 5,
        name: "Porcelain Calacatta",
        image: "/assets/images/back.jpg",
        price: 105,
        durability: 4.6,
        colorStability: 4.4,
        impactResistance: 4.5,
        category: "porcelain",
        trending: false,
      },
    ];

    const foundStone = stones.find((s) => s.id === parseInt(resolvedParams.id));
    setStone(foundStone || null);
    setLoading(false);
  }, [resolvedParams.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-light-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brown"></div>
      </div>
    );
  }

  if (!stone) {
    return (
      <div className="min-h-screen bg-light-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-800 mb-4">
            Stone not found
          </h1>
          <Link href="/stones" className="text-brown hover:underline">
            Back to Stones
          </Link>
        </div>
      </div>
    );
  }

  // Find similar stones based on category
  const similarStones: SimilarStone[] = [
    {
      id: 1,
      name: "Mineral Black Galaxy",
      image: "/assets/images/back.jpg",
      price: 120,
      durability: 4.9,
      colorStability: 4.7,
      impactResistance: 4.8,
      category: "mineral",
      trending: true,
      similarity: ["category", "trending", "stability", "durability", "impact"],
    },
    {
      id: 2,
      name: "Mineral Carrara",
      image: "/assets/images/back.jpg",
      price: 95,
      durability: 4.5,
      colorStability: 4.3,
      impactResistance: 4.4,
      category: "mineral",
      trending: false,
      similarity: ["category", "stability"],
    },
    {
      id: 3,
      name: "Porcelain Statuario",
      image: "/assets/images/back.jpg",
      price: 110,
      durability: 4.8,
      colorStability: 4.6,
      impactResistance: 4.7,
      category: "porcelain",
      trending: true,
      similarity: ["category", "trending", "durability", "impact"],
    },
    {
      id: 4,
      name: "Porcelain Nero",
      image: "/assets/images/back.jpg",
      price: 130,
      durability: 4.7,
      colorStability: 4.8,
      impactResistance: 4.6,
      category: "porcelain",
      trending: true,
      similarity: ["category", "trending", "stability"],
    },
    {
      id: 5,
      name: "Porcelain Calacatta",
      image: "/assets/images/back.jpg",
      price: 105,
      durability: 4.6,
      colorStability: 4.4,
      impactResistance: 4.5,
      category: "porcelain",
      trending: false,
      similarity: ["category", "durability", "impact"],
    },
  ].filter((s) => s.id !== stone.id);

  return (
    <div className="min-h-screen bg-light-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/stones"
          className="inline-flex items-center text-brown hover:text-brown/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Stones
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src={stone.image}
              alt={stone.name}
              fill
              className="object-cover"
            />
            {stone.trending && (
              <div className="absolute top-4 right-4 bg-brown text-white px-3 py-1 rounded-full text-sm font-semibold">
                Trending
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-neutral-800 mb-2">
                {stone.name}
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-brown mr-2" />
                  <span className="font-semibold">Durability</span>
                </div>
                <div className="text-2xl font-bold text-neutral-800">
                  {stone.durability.toFixed(1)}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Palette className="w-5 h-5 text-brown mr-2" />
                  <span className="font-semibold">Color Stability</span>
                </div>
                <div className="text-2xl font-bold text-neutral-800">
                  {stone.colorStability.toFixed(1)}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Hammer className="w-5 h-5 text-brown mr-2" />
                  <span className="font-semibold">Impact Resistance</span>
                </div>
                <div className="text-2xl font-bold text-neutral-800">
                  {stone.impactResistance.toFixed(1)}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="font-semibold">Category</span>
                </div>
                <div className="text-2xl font-bold text-neutral-800 capitalize">
                  {stone.category}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-neutral-800 mb-4">
                About This Stone
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                {stone.name} is a premium {stone.category} stone known for its
                exceptional durability and beautiful appearance. It&apos;s
                perfect for{" "}
                {stone.category === "mineral"
                  ? "light and airy"
                  : "versatile and unique"}{" "}
                spaces. With a high impact resistance and excellent color
                stability, this stone is an excellent choice for both
                residential and commercial applications.
              </p>
            </div>
          </div>
        </div>

        {/* Similar Stones Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-neutral-800">
              Similar Stones
            </h2>
            <Link
              href="/stones"
              className="text-brown hover:text-brown/80 text-sm font-medium flex items-center"
            >
              View All
              <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
            </Link>
          </div>
          <div className="relative">
            <Swiper
              slidesPerView="auto"
              spaceBetween={16}
              freeMode={true}
              modules={[FreeMode]}
              className="!px-4"
            >
              {similarStones.map((similarStone) => (
                <SwiperSlide key={similarStone.id} className="!w-64">
                  <StoneCard stone={similarStone} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Gradient overlay for better UX */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-light-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
