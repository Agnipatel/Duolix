"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { productsData } from "@/lib/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProductsPage() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 bg-white relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Featured Products</h2>
        <p className="text-gray-500 mt-2 text-lg">
          Summer Collection – New Modern Design
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Left Arrow */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-green-100 hover:bg-green-200 p-3 rounded-full shadow-md z-10"
        >
          <ChevronLeft className="text-green-600" size={24} />
        </button>

        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {productsData.map((product) => (
            <SwiperSlide key={product.id}>
              <Link href={`/product/${product.id}`}>
                <div className="bg-white border border-green-100 rounded-3xl p-5 shadow-sm hover:shadow-lg transition duration-300 flex flex-col">
                  <div className="flex justify-center mb-6">
                    <Image
                      src={product.image}
                      alt={product.slug}
                      width={250}
                      height={250}
                      className="object-contain rounded-xl"
                    />
                  </div>

                  <p className="text-gray-400 text-sm">{product.brand}</p>
                  <h3 className="font-semibold text-lg text-gray-900 mt-1">
                    {product.slug}
                  </h3>

                  <div className="flex items-center mt-2 text-yellow-500">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-semibold text-green-600">
                      {product.price}
                    </p>
                    <button className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition">
                      <ShoppingCart className="text-green-600" size={20} />
                    </button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-green-100 hover:bg-green-200 p-3 rounded-full shadow-md z-10"
        >
          <ChevronRight className="text-green-600" size={24} />
        </button>
      </div>
    </section>
  );
}
