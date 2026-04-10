import React from "react";
import Image from "next/image";

export default function HeroAbout() {
  return (
    <section className="bg-[#f7f9fb] pt-28 pb-20 mt-10">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="max-w-[470px]">
            <h1 className="text-[42px] font-extrabold leading-[1] tracking-[-0.03em] text-[#123f9f] md:text-[64px]">
              About Us
            </h1>

            <div className="mt-6 h-[4px] w-16 rounded-full bg-gradient-to-r from-[#1a58c7] to-[#8b5cf6]" />

            <p className="mt-8 text-[18px] leading-[1.7] text-[#5b667a]">
              Apnitor is a software development and IT consulting company that
              was founded in 2017. We help companies throughout the world to
              achieve their business goals by providing them with high-quality
              software development services.
            </p>

            <button className="mt-10 inline-flex h-[46px] items-center justify-center rounded-md bg-gradient-to-r from-[#1252b3] to-[#694bb0] px-6 text-[14px] font-bold text-white shadow-[0_10px_22px_rgba(18,82,179,0.22)] transition hover:opacity-95">
              Partner With Us
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] overflow-hidden rounded-[14px] bg-black shadow-[0_20px_50px_rgba(15,23,42,0.16)]">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
                alt="Technology concept"
                width={1200}
                height={1200}
                className="aspect-square w-full object-cover grayscale"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}