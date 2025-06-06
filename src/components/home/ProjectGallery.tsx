"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Project {
  id: number;
  title: string;
  beforeImage: string;
  afterImage: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Kitchen Transformation",
    beforeImage: "/assets/images/projects/kitchen-before.png",
    afterImage: "/assets/images/projects/kitchen-after.png",
  },
  {
    id: 2,
    title: "Luxury Bathroom Makeover",
    beforeImage: "/assets/images/projects/kitchen1-before.png",
    afterImage: "/assets/images/projects/kitchen1-after.png",
  },
];

const ProjectGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-light-background py-20">
      <div className="w-full mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Our Project Gallery
            </h2>
          </div>
          <p className="text-lg text-neutral-600 max-w-2xl mt-4">
            Explore our stunning before and after transformations. See how
            we&apos;ve helped homeowners achieve their dream spaces.
          </p>
        </div>
      </div>
      {/* Gallery Slider */}
      <div className="px-6 relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full rounded-2xl overflow-hidden"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="relative w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Before Image */}
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                    <Image
                      src={project.beforeImage}
                      alt={`${project.title} - Before`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute left-0 top-10">
                      <span
                        className="w-35 flex justify-center items-center text-white text-xl font-semibold
                         bg-brown/90 py-3 rounded-tr-[250px]"
                      >
                        Before
                      </span>
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                    <Image
                      src={project.afterImage}
                      alt={`${project.title} - After`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute left-0 top-10">
                      <span
                        className="w-35 flex justify-center items-center text-white text-xl font-semibold
                         bg-brown/90 py-3 rounded-tr-[250px]"
                      >
                        After
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons (New Design - No Background) */}
        <button
          className="swiper-button-prev-custom absolute left-3 top-1/2 -translate-y-1/2 z-10 
                       text-white hover:opacity-75 transition-opacity duration-300"
        >
          <ChevronLeft className="w-14 h-14" strokeWidth={4} />
        </button>
        <button
          className="swiper-button-next-custom absolute right-3 top-1/2 -translate-y-1/2 z-10 
                       text-white hover:opacity-90 transition-opacity duration-300"
        >
          <ChevronRight className="w-14 h-14" strokeWidth={4} />
        </button>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-brown w-8" : "bg-neutral-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
