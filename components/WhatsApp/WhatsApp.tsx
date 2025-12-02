"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://bit.ly/48D3SjX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 md:bottom-16 right-4 animate-pulse z-50"
    >
      <div className="bg-green-500 text-white p-2 rounded-full shadow-lg flex items-center transition-transform duration-300 hover:scale-110">
        <Image
          src="/WhatsApp-icone.png" 
          alt="WhatsApp"
          width={60}
          height={60}
          className="sm:w-10 sm:h-10 w-14 h-14"
        />
      </div>
    </a>
  );
}
