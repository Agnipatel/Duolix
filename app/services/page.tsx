"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/servicesData1";
import { Star, ShoppingCart } from "lucide-react";

export default function ServicePage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">
          Our Services
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We provide end-to-end technology solutions that empower your business
          to grow and succeed in the digital era.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-2xl transition-all overflow-hidden p-5 border border-gray-100 dark:border-gray-700"
          >
            {/* IMAGE */}
            <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">{service.slug || "adidas"}</p>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h2>

              {/* STARS */}
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* PRICE + CART */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-xl font-semibold text-teal-600">${service.slug || 78}</span>
                <Link
                  href={`/services/${service.slug}`}
                  className="p-3 rounded-full bg-teal-100 text-teal-700 hover:bg-teal-600 hover:text-white transition"
                >
                  <ShoppingCart className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
