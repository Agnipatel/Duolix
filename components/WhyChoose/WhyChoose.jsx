"use client";

import { Leaf, Recycle, HandHeart } from "lucide-react";

export default function WhyChoose() {
  const benefits = [
    {
      icon: <Leaf className="w-10 h-10 text-blue-500" />,
      title: "Organic Product",
      description:
        "Organic detergent is made from natural, biodegradable, and non-toxic ingredients derived from plants or minerals.",
    },
    {
      icon: <Recycle className="w-10 h-10 text-blue-500" />,
      title: "Eco-Friendly",
      description:
        "Eco-friendly detergents are sustainable cleaning products designed to minimize environmental harm while cleaning effectively.",
    },
    {
      icon: <HandHeart className="w-10 h-10 text-blue-500" />,
      title: "Gentle on Skin",
      description:
        "Gentle-on-skin detergents are specially formulated for sensitive skin, allergies, and conditions like eczema.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
      {/* Section Header */}
      <p className="text-blue-600 uppercase tracking-wide text-sm sm:text-base font-medium mb-2">
        Our Benefit
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 sm:mb-12">
        Why Choose Duolix
      </h2>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Icon */}
            <div className="mb-4 sm:mb-6">{item.icon}</div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
