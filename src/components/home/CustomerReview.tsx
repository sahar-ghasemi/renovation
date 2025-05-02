"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    comment:
      "Bit slow, but worth the wait. Beautiful result. Top-notch service from beginning to end Professional and high-quality work. Love my kitchen countertop!",
    date: "2024/03/05",
    projectType: "Kitchen Countertop",
    avatar: "/assets/images/avatar1.jpg",
  },
  {
    id: 2,
    name: "Michael Brown",
    comment:
      "Top-notch service from beginning to end. Professional and high-quality work. Bit slow, but worth the wait. Beautiful result. The living room looks stunning now. Great craftsmanship!",
    date: "2024/02/10",
    projectType: "Living Room Stone",
    avatar: "/assets/images/avatar1.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    comment:
      "Bit slow, but worth the wait. Beautiful result. Top-notch service from beginning to end. Professional and high-quality work. Love my kitchen countertop!",
    date: "2024/01/25",
    projectType: "Bathroom Vanity",
    avatar: "/assets/images/avatar1.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    comment:
      "Top-notch service from beginning to end. Professional and high-quality work. Love my kitchen countertop! The attention to detail was impressive.",
    date: "2024/03/15",
    projectType: "Fireplace Surround",
    avatar: "/assets/images/avatar1.jpg",
  },
  {
    id: 5,
    name: "Jenna Bernard",
    comment:
      "The team at Renovation did an incredible job with my home renovation project. The level of attention to detail they showed was exceptional.",
    date: "2024/03/05",
    projectType: "Home Renovation",
    avatar: "/assets/images/avatar-jenna.jpg",
  },
];

export default function CustomerReview() {
  const swiperRef = useRef<SwiperType | undefined>(undefined);

  return (
    <section className="w-full bg-light-background py-8 sm:py-12 md:py-16">
      <div className="max-w-[90%] sm:max-w-[92%] md:max-w-[94%] lg:max-w-[96%] 2xl:max-w-[98%] mx-auto px-2 sm:px-3 md:px-4">
        <div className="flex items-center justify-between mb-8 sm:mb-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brown rounded-tr-full rounded-br-full"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 pl-4 sm:pl-6">
            Our Customer Feedback.
          </h2>
          <Image
            src="/assets/images/quote.png"
            alt="quote"
            width={60}
            height={60}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-30"
          />
        </div>

        <div className="relative max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-12 sm:-left-16 md:-left-20 lg:-left-24 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-800" />
          </button>

          <Swiper
            modules={[Navigation, EffectCoverflow, Pagination]}
            effect="fade"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            speed={800}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="px-4"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl min-h-[240px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[320px] xl:min-h-[360px] flex">
                  <div className="w-[35%] sm:w-[32%] md:w-[30%] bg-beige rounded-l-lg rounded-br-[100px] sm:rounded-br-[125px] md:rounded-br-[150px] relative overflow-hidden">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <div className="w-[2px] h-6 bg-brown mr-3 rounded-tr-full rounded-br-full"></div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                            {review.name}
                          </h3>
                        </div>
                        <span className="text-xs sm:text-sm lg:text-base text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-2 sm:mb-4">
                        {review.projectType}
                      </p>
                      <p className="text-gray-700 italic text-base sm:text-lg lg:text-xl leading-relaxed flex-1">
                        &ldquo;{review.comment}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-12 sm:-right-16 md:-right-20 lg:-right-24 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
}
