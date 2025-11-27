import Image from "next/image";
import { notFound } from "next/navigation";
import { productsData } from "@/lib/products";

export default function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const product = productsData.find((p) => p.id === Number(params.id));

  if (!product) return notFound();
  console.log("Params:", params);

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      
      <div className="flex flex-col md:flex-row gap-10">
        <Image
          src={product.image}
          alt={product.slug}
          width={400}
          height={400}
          className="rounded-2xl object-contain bg-gray-50"
        />

        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.slug}</h1>
          <p className="text-gray-500 mt-2">{product.brand}</p>

          <p className="text-green-600 text-2xl font-semibold mt-4">
            {product.price}
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
