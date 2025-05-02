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

export default function PreviousCustomerReviews() {
  return (
    <section className="py-16 bg-light-background w-full">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between px-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Customer Feedback.
          </h2>
          <Image
            src="/assets/images/quote.png"
            alt="quote"
            width={60}
            height={60}
            className="w-10 h-10 mr-[20px] opacity-30"
          />
        </div>

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
          className="w-full"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="w-full">
              <div
                className="relative bg-white p-6 
                rounded-lg shadow-lg flex flex-col items-start
                text-left transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4 w-full">
                  <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center overflow-hidden">
                    {review.avatar ? (
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-white">
                        {review.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {review.projectType}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-2">
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
