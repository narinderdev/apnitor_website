"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Technologies", path: "/technologies" },
    { name: "Industries", path: "/industries" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-900 font-manrope tracking-tight"
        >
          Apnitor Solutions
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`font-manrope font-semibold tracking-tight transition-colors ${
                  isActive
                    ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Button */}
        <button
          onClick={() => router.push("/contact-us")}
          className="bg-gradient-to-r from-[#1252b3] to-[#694bb0] text-white px-6 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-all active:scale-95"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
