"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-200">

      {/* HEADER SECTION */}
      <section className="w-full bg-green-100 dark:bg-green-900 py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Duolix</h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto">
            Duolix Chem & Surfactant Pvt Ltd – A responsible and transparent
            detergent company delivering eco-friendly, skin-safe, and
            market-friendly products for Indian households.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto py-16 md:py-20 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          Who We Are
        </h2>

        <p className="text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
          At Duolix, we believe in crafting products that are not only powerful
          in cleaning but also safe for people and the environment. From
          detergents to bathing solutions, our mission is to deliver natural,
          biodegradable, and skin-friendly alternatives to traditional chemical-based
          products.
          <br /><br />
          Founded with the goal of making everyday cleaning healthier and more
          eco-conscious, Duolix has grown into a trusted name backed by quality,
          transparency, and innovation.
        </p>
      </section>

      {/* IMAGE SLIDER SECTION */}
      <section className="py-16 md:py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Our Work & Production
          </h2>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            spaceBetween={20}
            className="rounded-xl shadow-xl"
          >
            <SwiperSlide>
              <Image
                src="/servicebanner/s1.jpeg"
                alt="Slide 1"
                width={1200}
                height={600}
                className="rounded-xl w-full h-auto"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/servicebanner/s2.jpeg"
                alt="Slide 2"
                width={1200}
                height={600}
                className="rounded-xl w-full h-auto"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/servicebanner/s6.jpeg"
                alt="Slide 3"
                width={1200}
                height={600}
                className="rounded-xl w-full h-auto"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Working Hours */}
      <section className="bg-white dark:bg-zinc-900 py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Working Hours & Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

            <div className="p-6 bg-gray-100 dark:bg-zinc-800 rounded-xl shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Open All Days</h3>
              <p className="text-base md:text-lg">Monday to Sunday</p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-zinc-800 rounded-xl shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Online Support</h3>
              <p className="text-base md:text-lg">24 Hours Available</p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-zinc-800 rounded-xl shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Offline Support</h3>
              <p className="text-base md:text-lg">24 Hours Available</p>
            </div>

          </div>
        </div>
      </section>

      {/* ADDRESS (Empty but Responsive) */}
      <section className="max-w-6xl mx-auto py-16 md:py-20 px-4 md:px-6"></section>
    </div>
  );
}
