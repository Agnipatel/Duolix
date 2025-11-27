import Image from "next/image";

export default function FeaturesPage() {
  const features = [
    {
      title: "Free Shipping",
      image: "/F/f1.png",
      color: "bg-pink-100 text-pink-700",
    },
    {
      title: "Online Order",
      image: "/F/f2.png",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Save Money",
      image: "/F/f3.png",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Promotions",
      image: "/F/f4.png",
      color: "bg-sky-100 text-sky-700",
    },
    {
      title: "Happy Sell",
      image: "/F/f5.png",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "24/7 Support",
      image: "/F/f6.png",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <section className="bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-10 text-center">
        Why Choose Us
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl">
        {features.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition duration-300 bg-white hover:scale-105"
          >
            {/* Icon */}
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
              />
            </div>

            {/* Title */}
            <p
              className={`font-semibold text-center text-sm sm:text-base md:text-lg px-2 sm:px-3 py-1 rounded-md ${item.color}`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
