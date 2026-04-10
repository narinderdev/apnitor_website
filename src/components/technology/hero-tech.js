import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroTech() {
  return (
    <section className="bg-[#f4f6f8] py-20 md:py-24 mt-20">
      <div className="mx-auto max-w-[1200px] px-6 grid items-center gap-12 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-block rounded-full bg-[#e9ddff] px-4 py-1.5 text-[12px] font-semibold tracking-[0.08em] text-[#6b5cc6] uppercase">
            The Fluid Architect
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-[42px] md:text-[56px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#111827]">
            Our Technology Stack:
            <br />
            Engineered for the{" "}
            <span className="bg-gradient-to-r from-[#0b57d0] to-[#6b5cc6] bg-clip-text text-transparent">
              Future
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.7] text-[#475569]">
            From pioneering AI agents to robust enterprise foundations, we
            leverage a world-class technology stack to build high-performance
            digital solutions.
          </p>

          {/* Button */}
          <button className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-[#0b57d0] px-6 py-3 text-[15px] font-semibold text-white transition hover:opacity-90">
            Explore Capabilities
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
            <Image
              src="/tech-bg.png"
              alt="Technology background"
              width={600}
              height={600}
              className="h-[420px] w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}