"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    comment:
      "Bit slow, but worth the wait. Beautiful result.Top-notch service from beginning to end Professional and high-quality work. Love my kitchen countertop!",
    date: "2024/03/05",
    projectType: "Kitchen Countertop",
    avatar: "/assets/images/avatar1.jpg",
  },

  {
    id: 2,
    name: "Michael Brown",
    comment:
      "Top-notch service from beginning to end.Professional and high-quality work.Bit slow, but worth the wait. Beautiful result.Top-notch service from beginning to end Love my kitchen countertop!The living room looks stunning now. Great craftsmanship!",
    date: "2024/02/10",
    projectType: "Living Room Stone",
    avatar: "/assets/images/avatar1.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    comment:
      "Bit slow, but worth the wait. Beautiful result.Top-notch service from beginning to end.Professional and high-quality work. Love my kitchen countertop!",
    date: "2024/01/25",
    projectType: "Bathroom Vanity",
    avatar: "/assets/images/avatar1.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    comment:
      "Top-notch service from beginning to end.Professional and high-quality work. Love my kitchen countertop!Top-notch service from beginning to end.Professional and high-quality work. Love my kitchen countertop!",
    date: "2024/03/15",
    projectType: "Fireplace Surround",
    avatar: "/assets/images/avatar1.jpg",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    comment:
      "Professional and high-quality work. Love my kitchen countProfessional and high-quality work. Love my kitchen countertop!Professional and high-quality work. Love my kitchen countertop!ertop!",
    date: "2024/03/05",
    projectType: "Kitchen Countertop",
    avatar: "/assets/images/avatar1.jpg",
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Customer Reviews
        </h2>

        <Swiper
          modules={[FreeMode, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.25,
          }}
          className="py-4"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="swiper-slide-transform">
              <div
                className="relative h-[400px] bg-cover bg-center p-6 
                rounded-tl-[50px] rounded-br-[50px]  flex flex-col items-center
                 justify-center text-center transition-all duration-300"
                style={{
                  backgroundImage: "url('/assets/images/card-background.jpg')",
                }}
              >
                <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mb-4">
                  {review.avatar ? (
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full rounded-full object-cover"
                      width={80}
                      height={80}
                    />
                  ) : (
                    <span className="text-2xl font-bold text-white">
                      {review.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  {review.name}
                </h3>
                <p className="text-sm text-orange mb-2">{review.projectType}</p>
                <p className="text-gray-600 italic mb-3">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
