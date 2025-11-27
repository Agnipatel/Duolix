// app/services/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/servicesData1";

export default async function ServiceDetailsPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  // If not found, show a fallback message
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

  // ✅ Main service detail section
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <Link
        href="/services"
        className="text-red-500 hover:underline mb-5 inline-block"
      >
        ← Back to Services
      </Link>

      <div className="relative w-full h-72 mb-8 rounded-2xl overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        {service.title}
      </h1>

      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        {service.description}
      </p>
    </section>
  );
}
