import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import SocialFooter from "./SocialFooter";
import WhatsAppButton from "../WhatsApp/WhatsApp";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* 1️⃣ Company Info */}
        <div>
          <Image
            src="/d_logo.png" // place your logo in public folder
            alt="Duolix Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed mb-4">
            Duolix India’s ethical and responsible transparent detergent company
            which manufactures products that are friendly to the Indian market.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5" />
              <span>Plot no.24 Gaurbheeth Ghaila Road, Lucknow</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              <span>7007108656</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} />
              <span>duolixsoaps@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* 2️⃣ Categories */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* 3️⃣ Our Company */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Our Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/legal-doc">Legal Doc</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/sitemap">Site Map</Link></li>
            <li><Link href="/terms">Terms and Conditions</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>
          ©2024 Duolix. Design & Developed By{" "}
          <span className="text-white font-medium"> Solutions.</span>
        </p>

       
      </div>
      <SocialFooter/>
      <WhatsAppButton/>
    </footer>
  );
}
