"use client";

import Image from "next/image";

export default function ComingSoonPage() {
  const projects = [
    {
      id: 1,
      title: "Tea Pathi",
      desc: "Premium Tea Pathi is made from handpicked, high-quality tea leaves known for their rich aroma and strong natural flavor.",
      img: "/product/p11 tea.jpeg",
    },
    {
      id: 2,
      title: "Natural Floor Cleaner",
      desc: "Fresh fragrance, streak-free shine — coming soon to your home!",
      img: "/image.png",
    },
    // Add more projects here
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black px-6 py-10">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-10 text-green-700 dark:text-white">
        Coming Soon Projects
      </h1>

      <div className="max-w-6xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full h-120">
              <Image
                src={project.img }
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
