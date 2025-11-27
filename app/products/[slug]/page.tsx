import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/lib/product1";
import ProductImageSlider from "@/components/ProductImageSlider/ProductImageSlider.tsx"; // ✅ don't include .tsx in import


export default function ServiceDetailsPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // ✅ Find matching service
  const service = productsData.find((s) => s.slug === slug);
 

   console.log("slug:", slug);
  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Service Not Found
        </h1>
        <Link
          href="/services"
          className="text-red-500 hover:underline mt-4 block"
        >
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      {/* ✅ Back link */}
      <Link
        href="/services"
        className="text-red-500 hover:underline mb-5 inline-block"
      >
        ← Back to Services
      </Link>

      {/* ✅ Product Image Slider */}
      <ProductImageSlider
        images={[
          service.image, // main image
          "/product/p2 shop.jpeg",
          "/product/p3 shop.jpeg",
          "/images/sofa.jpg",
        ]}
      />

      {/* ✅ Product Info */}
      <div className="mt-10">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          {service.brand}
        </h1>

        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300 capitalize">
          {service.slug.replace(/-/g, " ")}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
          {service.description}
        </p>

        <p className="text-2xl font-bold text-teal-600">${service.price}</p>
      </div>
    </section>
  );
}
