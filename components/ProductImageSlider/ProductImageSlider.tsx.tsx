"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ProductImageSliderProps {
  images: string[];
}

export default function ProductImageSlider({ images }: ProductImageSliderProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
       Gallery Products
      </h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
              <div className="relative w-full h-64">
                <Image
                  src={img}
                  alt={`Product ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Product {index + 1}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Premium quality eco-friendly product.
                </p>
             
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
