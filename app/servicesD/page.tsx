// app/services/page.tsx
import Link from "next/link";
import Image from "next/image";
import { productsDatas } from "@/lib/productdiscount";
import { calcDiscountedPrice } from "@/lib/helpers";

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Products Discount</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsDatas.map((p) => {
          const { discountedPrice } = calcDiscountedPrice(p.price, p.discountPercent);
          return (
            <Link key={p.id} href={`/servicesD/${p.slug}`} className="block">
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                <div className="relative w-full h-56">
                  <Image src={p.image} alt={p.brand} fill className="object-cover" />
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{p.brand}</h3>
                    {p.discountPercent ? (
                      <span className="text-sm bg-red-500 text-white px-2 py-1 rounded-full">
                        {p.discountPercent}% OFF
                      </span>
                    ) : null}
                  </div>

                  <p className="text-sm text-gray-600 mt-2">{p.description}</p>

                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="text-xl font-bold text-teal-600">${discountedPrice}</span>
                    {p.discountPercent ? (
                      <span className="text-sm line-through text-gray-400">${p.price}</span>
                    ) : null}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
