"use client";

import { use } from "react"; // ✅ new React 19 hook
import Image from "next/image";
import Link from "next/link";
import { productsDatas } from "@/lib/productdiscount";
import { calcDiscountedPrice } from "@/lib/helpers";
import { useState } from "react";

export default function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  // ✅ Unwrap the params
  const { slug } = use(params);

  const [couponCode, setCouponCode] = useState("");
  const [activeDiscount, setActiveDiscount] = useState<number | undefined>();
  const [flatDiscount, setFlatDiscount] = useState<number>(0);

  const service = productsDatas.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-800">Service Not Found</h1>
        <Link href="/saop" className="text-teal-600 hover:underline mt-4 block">
          ← Back to Services
        </Link>
      </div>
    );
  }
  

  // ✅ Example coupons (you can move to backend or DB)
  const coupons: Record<string, { type: "percent" | "flat"; value: number }> = {
    WELCOME10: { type: "percent", value: 10 },
    FLAT50: { type: "flat", value: 50 },
  };

  // ✅ Apply coupon logic
  function applyCoupon(code: string) {
    const normalized = code.trim().toUpperCase();
    const rule = coupons[normalized];
    if (!rule) {
      alert("❌ Invalid coupon code");
      return;
    }

    if (rule.type === "percent") {
      setActiveDiscount(rule.value);
      setFlatDiscount(0);
    } else {
      setActiveDiscount(undefined);
      setFlatDiscount(rule.value);
    }

    alert(`✅ Coupon ${normalized} applied successfully!`);
  }

  // ✅ Discounted price
  let { discountedPrice, savings } = calcDiscountedPrice(service.price, activeDiscount);
  if (flatDiscount > 0) {
    const finalPrice = Math.max(service.price - flatDiscount, 0);
    savings = flatDiscount;
    discountedPrice = finalPrice;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="text-teal-600 hover:underline mb-5 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ✅ Product Image */}
        <div>
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-md">
            <Image
              src={service.image}
              alt={service.brand}
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* ✅ Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {service.brand}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
            {service.description}
          </p>

          {/* ✅ Price and Discount */}
          <div className="mt-6">
            {activeDiscount || flatDiscount ? (
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-teal-600">
                  ${discountedPrice}
                </span>
                <span className="line-through text-gray-400 text-xl">
                  ${service.price}
                </span>
                <span className="text-sm bg-red-500 text-white px-3 py-1 rounded-full">
                  {activeDiscount
                    ? `${activeDiscount}% OFF`
                    : `$${flatDiscount} OFF`}
                </span>
              </div>
            ) : (
              <div className="text-4xl font-bold text-teal-600">
                ${service.price}
              </div>
            )}
            {(activeDiscount || flatDiscount) && (
              <p className="text-sm text-gray-500 mt-1">
                You save ${savings}
              </p>
            )}
          </div>

          {/* ✅ Coupon input */}
          <div className="mt-8">
            <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
              Have a coupon?
            </label>
            <div className="flex gap-2">
              <input
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon (e.g., WELCOME10)"
                className="flex-1 border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-gray-200 px-3 py-2 rounded"
              />
              <button
                onClick={() => applyCoupon(couponCode)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded transition"
              >
                Apply
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Example coupons: WELCOME10 (10% off), FLAT50 ($50 off)
            </p>
          </div>

          {/* ✅ Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
              Add to Cart
            </button>
            <button className="border border-gray-400 hover:border-teal-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
