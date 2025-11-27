"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/lib/servicesData";

export default function WhatWeDo() {
  return (
    <section className="py-2 sm:py-4 md:py-4 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12 px-4">
        <p className="text-blue-600 text-5xl font-semibold uppercase tracking-wide text-sm sm:text-base">
          Our Services
        </p>
       
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-10">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-6 sm:p-8 flex flex-col items-center text-center"
          >
            {/* Image */}
            <div className="relative flex justify-center mb-5 sm:mb-6 w-full">
              <Image
                src={service.image}
                alt={service.title}
                width={250}
                height={150}
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6 line-clamp-3">
              {service.description}
            </p>

            {/* Learn More Button */}
            <Link
              href={`/services/${service.id}`}
              className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-full text-sm sm:text-base transition-all"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
