"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Shield,
  Palette,
  Hammer,
} from "lucide-react";
import StoneCard from "@/components/stones/StoneCard";

interface Stone {
  id: number;
  name: string;
  image: string;
  price: number;
  popularity: number;
  durability: number;
  colorStability: number;
  impactResistance: number;
  category: "mineral" | "porcelain";
  trending: boolean;
  color: string;
}

// Sample stone data - you can replace this with your actual data
const stones: Stone[] = [
  {
    id: 1,
    name: "Mineral Black Galaxy",
    image: "/assets/images/stones/black-galaxy.jpg",
    price: 120,
    popularity: 4.8,
    durability: 4.9,
    colorStability: 4.7,
    impactResistance: 4.8,
    category: "mineral",
    trending: true,
    color: "black",
  },
  {
    id: 2,
    name: "Mineral Carrara",
    image: "/assets/images/stones/carrara.jpg",
    price: 95,
    popularity: 4.6,
    durability: 4.5,
    colorStability: 4.3,
    impactResistance: 4.4,
    category: "mineral",
    trending: false,
    color: "white",
  },
  {
    id: 3,
    name: "Mineral Bianco Romano",
    image: "/assets/images/stones/bianco-romano.jpg",
    price: 110,
    popularity: 4.7,
    durability: 4.8,
    colorStability: 4.6,
    impactResistance: 4.7,
    category: "mineral",
    trending: true,
    color: "white",
  },
  {
    id: 4,
    name: "Porcelain Nero",
    image: "/assets/images/stones/nero-marquina.jpg",
    price: 130,
    popularity: 4.9,
    durability: 4.7,
    colorStability: 4.8,
    impactResistance: 4.6,
    category: "porcelain",
    trending: true,
    color: "black",
  },
  {
    id: 5,
    name: "Porcelain Calacatta",
    image: "/assets/images/stones/santa-cecilia.jpg",
    price: 105,
    popularity: 4.5,
    durability: 4.6,
    colorStability: 4.4,
    impactResistance: 4.5,
    category: "porcelain",
    trending: false,
    color: "mixed",
  },
];

const filterOptions = [
  { id: "popular", label: "Most Popular", icon: <Star className="w-4 h-4" /> },
  {
    id: "trending",
    label: "Trending",
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    id: "price-high",
    label: "Price: High to Low",
    icon: <DollarSign className="w-4 h-4" />,
  },
  {
    id: "price-low",
    label: "Price: Low to High",
    icon: <DollarSign className="w-4 h-4" />,
  },
  {
    id: "durability",
    label: "Most Durable",
    icon: <Shield className="w-4 h-4" />,
  },
  {
    id: "color-stability",
    label: "Color Stability",
    icon: <Palette className="w-4 h-4" />,
  },
  {
    id: "impact-resistance",
    label: "Impact Resistance",
    icon: <Hammer className="w-4 h-4" />,
  },
];

const categoryOptions = [
  { id: "all", label: "All Categories" },
  { id: "mineral", label: "Mineral" },
  { id: "porcelain", label: "Porcelain" },
];

export default function StonesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("popular");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredStones, setFilteredStones] = useState(stones);

  useEffect(() => {
    let result = [...stones];

    // Apply search filter
    if (searchQuery) {
      result = result.filter((stone) =>
        stone.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      result = result.filter((stone) => stone.category === selectedCategory);
    }

    // Apply sorting filter
    switch (selectedFilter) {
      case "popular":
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case "trending":
        result = result.filter((stone) => stone.trending);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "durability":
        result.sort((a, b) => b.durability - a.durability);
        break;
      case "color-stability":
        result.sort((a, b) => b.colorStability - a.colorStability);
        break;
      case "impact-resistance":
        result.sort((a, b) => b.impactResistance - a.impactResistance);
        break;
    }

    setFilteredStones(result);
  }, [searchQuery, selectedFilter, selectedCategory]);

  return (
    <div className="min-h-screen bg-light-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-beige py-4 px-6 rounded-tr-[200px] rounded-sm mb-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-[4px] h-12 bg-brown rounded-tr-full rounded-br-full"></div>
              <h1 className="text-4xl font-bold text-neutral-800">
                Stone Collection.
              </h1>
            </div>
            <p className="text-lg text-neutral-600 ml-5">
              Discover our premium selection of natural stones
            </p>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search stones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brown/50 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="appearance-none pl-10 pr-8 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brown/50 focus:border-transparent bg-white"
            >
              {filterOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="relative">
            <Palette className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pl-10 pr-8 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brown/50 focus:border-transparent bg-white"
            >
              {categoryOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Stone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredStones.map((stone) => (
              <motion.div
                key={stone.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StoneCard stone={stone} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
