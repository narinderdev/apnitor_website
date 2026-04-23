"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FluidWebHero() {
  const router = useRouter();
  
  return (
    <section className="bg-[#eef0f3] px-6 py-20 md:px-10 lg:px-16 xl:px-24 mt-14">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          {/* Badge */}
          <div className="inline-flex rounded-full bg-[#c4b5fd] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#4c1d95]">
            Premium Web Development
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-[46px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827]">
            Fluid Web
            <br />
            <span className="bg-gradient-to-r from-[#0b4aa6] to-[#6c4fd3] bg-clip-text text-transparent">
              Applications.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-[520px] text-[18px] leading-[1.55] text-[#475569]">
            Engineering next-generation admin panels, portals, and
            customer-facing apps. We leverage React and Next.js to deliver
            high-performance architecture that scales with your ambition.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#0b4aa6] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-[#083d91]">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="inline-flex items-center justify-center rounded-[14px] bg-[#e5e7eb] px-6 py-3 text-[14px] font-semibold text-[#111827] transition hover:bg-[#d1d5db]" onClick={() => router.push('/portfolio')}>
              View Case Studies
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[320px] w-full max-w-[560px] overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(15,23,42,0.15)] md:h-[380px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0zTH8zJoVDvuXSf-nw5J1cMiWU0NQByBi3gMqtPCPe5TeGfJEgIchRN-eUEVvSkUL3BWI2x9IhgRmpjUGX3E4fgVUwwBYBUQEdMV5vAGmBtE1vxHzC5rKlp0JlIkwTI41Z6bfNCtKjYvguEjC16mgGdTWzgPy_3P4QTEO-vVP7zAHEJbWsKTriYtzGIjQTPPeqZKECABEtUA8K5iHlBknVtsSMiJxhIHsz20SvlZNhdBARNPcJpg7CrejgrbE3bMFEDmZlo0A5bI"
              alt="Dashboard preview"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
