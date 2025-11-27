"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function SocialFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center sm:text-left mb-10">
          <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-700 mb-2">
            Social
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
            Follow us for the latest updates
          </h2>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-sm">
          {/* Facebook */}
          <Link
            href="https://www.facebook.com/share/1HfNHuCJCH/"
            target="_blank"
            className="flex items-center sm:items-start space-x-4 hover:text-red-600 transition"
          >
            <FaFacebookF size={28} />
            <div>
              <div className="uppercase text-xs text-gray-400">Facebook</div>
              <div className="text-base sm:text-lg">Duolix</div>
            </div>
          </Link>

          {/* X (Twitter) */}
          <Link
            href="https://twitter.com/duolix"
            target="_blank"
            className="flex items-center sm:items-start space-x-4 hover:text-gray-300 transition"
          >
            <FaXTwitter size={28} />
            <div>
              <div className="uppercase text-xs text-gray-400">X</div>
              <div className="text-base sm:text-lg">Duolix</div>
            </div>
          </Link>

          {/* YouTube */}
          <Link
            href="https://youtube.com/@dcsplofficial?si=M3i_tP1lEIdr40qw"
            target="_blank"
            className="flex items-center sm:items-start space-x-4 hover:text-red-500 transition"
          >
            <FaYoutube size={28} />
            <div>
              <div className="uppercase text-xs text-gray-400">YouTube</div>
              <div className="text-base sm:text-lg">Duolix</div>
            </div>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/duolix"
            target="_blank"
            className="flex items-center sm:items-start space-x-4 hover:text-pink-500 transition"
          >
            <FaInstagram size={28} />
            <div>
              <div className="uppercase text-xs text-gray-400">Instagram</div>
              <div className="text-base sm:text-lg">Duolix</div>
            </div>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/company/duolix"
            target="_blank"
            className="flex items-center sm:items-start space-x-4 hover:text-blue-400 transition"
          >
            <FaLinkedinIn size={28} />
            <div>
              <div className="uppercase text-xs text-gray-400">LinkedIn</div>
              <div className="text-base sm:text-lg">Duolix</div>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
