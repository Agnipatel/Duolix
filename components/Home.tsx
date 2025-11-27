"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// 🧩 Import all components
import FeaturesPage from "./features/Features";
import Service from "./service/Service";
import Banner from "./banner/Banner";
import WhyChoose from "./WhyChoose/WhyChoose";
import Happy from "./happy/Happy";
import From from "./from/From";
import ProductImageSlider from "./ProductImageSlider/ProductImageSlider.tsx";
import ComingSoonPage from "./Coming/coming";
import ServiceD from "@/app/servicesD/page"

export default function HomePage() {
  const images = ["/servicebanner/h1.jpeg", "/servicebanner/h2.jpeg", "/servicebanner/h3.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🕒 Auto-change banner images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // ⏩ Manual controls (if needed in the future)
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* 🔹 Hero Section with Background Slider */}
      <main className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 transition-all duration-1000">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                priority
                className="object-cover brightness-75"
              />
            </div>
          ))}
        </div>

        {/* Overlay Text */}
        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg text-red-600">
            DUOLIX CHEM & SURFACTANT PVT LTD
          </h1>
          <p className="text-lg md:text-2xl mb-8 drop-shadow-md text-green-700">
            Clean Naturally, Live Purely – Your Eco-Friendly Detergent
            Destination!
          </p>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </main>

      {/* 🔹 Other Sections */}
      <FeaturesPage />
      <Service />
      <Banner />
      <WhyChoose />
      <Happy />
      <From />

      {/* 🔹 Product Image Slider (Home Banner Style) */}
      <div className="my-20">
        <ProductImageSlider
          images={[
            "/product/p2 shop.jpeg",
            "/product/p3 shop.jpeg",
            "/images/sofa.jpg",
            "/product/p4 shop.jpeg",
          ]}
        />
      </div>
      <ComingSoonPage/>
      <ServiceD/>
    </>
  );
}
