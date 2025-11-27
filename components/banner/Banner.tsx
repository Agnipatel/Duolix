"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-[420px] sm:h-[450px] md:h-[380px] lg:h-[420px] xl:h-[460px]">
      {/* Background Image */}
      <Image
        src="/servicebanner/h4.jpeg"
        alt="Banner Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Wrapper */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16 gap-10 md:gap-0">

        {/* LEFT SIDE — TEXT */}
        <div className="text-white max-w-lg md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-lg sm:text-xl font-medium">Repair Services</p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Up to <span className="text-red-500">70% off</span> All Bathing Shop & Detergent
          </h2>

          <Link
            href="/products"
            className="inline-block mt-2 sm:mt-4 bg-red-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Explore More
          </Link>
        </div>

        {/* RIGHT SIDE — YOUTUBE VIDEO */}
        <div className="w-full md:w-auto flex justify-center">
          <div className="w-[280px] h-[160px] sm:w-[320px] sm:h-[180px] md:w-[360px] md:h-[200px] lg:w-[420px] lg:h-[240px] rounded-lg overflow-hidden shadow-lg border-2 border-white/40">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0OsDNcQ6fAM"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
