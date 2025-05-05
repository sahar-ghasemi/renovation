"use client";

import { Search, Filter } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: {
    category: string;
    trending: boolean;
    durability: number;
    colorStability: number;
    impactResistance: number;
  }) => void;
}

export default function SearchBar({
  onSearch,
  onFilterChange,
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    trending: false,
    durability: 0,
    colorStability: 0,
    impactResistance: 0,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleFilterChange = (
    key: keyof typeof filters,
    value: string | number | boolean
  ) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search stones..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown/20 focus:border-brown"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          {/* Category Filter */}
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown/20 focus:border-brown"
          >
            <option value="">All Categories</option>
            <option value="mineral">Mineral</option>
            <option value="porcelain">Porcelain</option>
          </select>

          {/* Trending Filter */}
          <button
            onClick={() => handleFilterChange("trending", !filters.trending)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              filters.trending
                ? "bg-brown text-white"
                : "bg-neutral-100 text-neutral-600"
            }`}
          >
            <Filter className="w-4 h-4" />
            Trending
          </button>

          {/* Durability Filter */}
          <select
            value={filters.durability}
            onChange={(e) =>
              handleFilterChange("durability", Number(e.target.value))
            }
            className="px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown/20 focus:border-brown"
          >
            <option value="0">All Durability</option>
            <option value="4.5">4.5+</option>
            <option value="4.7">4.7+</option>
            <option value="4.9">4.9+</option>
          </select>

          {/* Color Stability Filter */}
          <select
            value={filters.colorStability}
            onChange={(e) =>
              handleFilterChange("colorStability", Number(e.target.value))
            }
            className="px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown/20 focus:border-brown"
          >
            <option value="0">All Color Stability</option>
            <option value="4.5">4.5+</option>
            <option value="4.7">4.7+</option>
            <option value="4.9">4.9+</option>
          </select>

          {/* Impact Resistance Filter */}
          <select
            value={filters.impactResistance}
            onChange={(e) =>
              handleFilterChange("impactResistance", Number(e.target.value))
            }
            className="px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown/20 focus:border-brown"
          >
            <option value="0">All Impact Resistance</option>
            <option value="4.5">4.5+</option>
            <option value="4.7">4.7+</option>
            <option value="4.9">4.9+</option>
          </select>
        </div>
      </div>
    </div>
  );
}
