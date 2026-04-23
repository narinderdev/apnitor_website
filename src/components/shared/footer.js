import React from "react";
import { Globe, Share2, AtSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f2f4f6]">
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-8">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-y-14 md:grid-cols-3 md:gap-x-16 lg:gap-x-24">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              {/* <img
                src="/icon.png"
                alt="Apnitor Logo"
                className="h-8 w-8 object-contain"
              />
              <h3 className="text-[18px] font-extrabold text-[#1843a3]">
                Apnitor Solutions
              </h3> */}
              <Link href="/" className="flex items-center">
            <Image
              src="/logo-nobg.png" 
              alt="Apnitor Solutions"
              width={150} 
              height={40}
              priority
            />
          </Link>
            </div>

            <p className="mt-8 max-w-[320px] text-[17px] leading-[1.7] text-[#5a6b85]">
              Expert software engineering for the modern enterprise. We turn
              complex challenges into seamless digital experiences.
            </p>

            <div className="mt-8 flex items-center gap-5 text-[#8a9ab3]">
              <a href="#" aria-label="Globe">
                <Globe className="h-6 w-6" strokeWidth={2} />
              </a>
              <a href="#" aria-label="Share">
                <Share2 className="h-6 w-6" strokeWidth={2} />
              </a>
              <a href="#" aria-label="Email">
                <AtSign className="h-6 w-6" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col items-start md:mx-auto">
            <h4 className="text-[18px] font-extrabold text-[#1843a3]">
              Company
            </h4>
            <ul className="mt-8 space-y-3 text-[17px] text-[#5a6b85]">
              <li>
                <a href="about-us">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="portfolio">Case Studies</a>
              </li>
              <li>
                <a href="contact-us">Contact</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col items-start md:mx-auto">
            <h4 className="text-[18px] font-extrabold text-[#1843a3]">
              Support
            </h4>
            <ul className="mt-8 space-y-3 text-[17px] text-[#5a6b85]">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[1080px] border-t border-[#d7dde5] pt-8">
          <div className="flex flex-col gap-4 text-[16px] text-[#7b8ba5] md:flex-row md:items-center md:justify-between">
            <p>© 2017 Apnitor Solutions. All rights reserved.</p>

            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
              <span>English (US)</span>
              {/* <span>System Status: Operational</span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}