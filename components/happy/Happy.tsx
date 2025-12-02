"use client";
import { useEffect, useState } from "react";
import { Package, ShoppingBag, Star, Users } from "lucide-react"; // product-related icons

export default function ProductStats() {
  const statsData = [
    {
      label: "Products Soap",
      end: 1200,
      icon: <ShoppingBag className="w-10 h-10 text-green-500 mb-4" />,
    },
    {
      label: "Product Categories",
      end: 25,
      icon: <Package className="w-10 h-10 text-green-500 mb-4" />,
    },
    {
      label: "Customer Reviews",
      end: 580,
      icon: <Star className="w-10 h-10 text-green-500 mb-4" />,
    },
    {
      label: "Happy Buyers",
      end: 980,
      icon: <Users className="w-10 h-10 text-green-500 mb-4" />,
    },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const timers = statsData.map((stat, index) => {
      let start = 0;
      const end = stat.end;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
        if (start === end) clearInterval(timer);
      }, stepTime);

      return timer;
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-16 bg-gray-200">
      <h2 className="text-3xl font-semibold text-green-500 mb-8">
        Product Performance
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, index) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center p-6 bg-gray-400 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {stat.icon}
            <h3 className="text-5xl font-bold text-red-600">{counts[index]}+</h3>
            <p className="text-lg mt-2 text-red-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
