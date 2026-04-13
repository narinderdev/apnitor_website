"use client";

import React from "react";
import Image from "next/image";
import { BriefcaseBusiness, Map, Compass } from "lucide-react";

const items = [
  {
    icon: BriefcaseBusiness,
    title: "Expert Engineering Insights",
    description:
      "Direct access to lead architects who bridge the gap between business vision and technical execution.",
    iconWrap: "bg-[#eaf0f8]",
    iconColor: "text-[#0f469f]",
    card: true,
  },
  {
    icon: Map,
    title: "Strategic Roadmap Planning",
    description:
      "Map out a phased deployment strategy that minimizes disruption while maximizing ROI from day one.",
    iconWrap: "bg-[#efeafe]",
    iconColor: "text-[#6d4dc3]",
    card: true,
  },
  {
    icon: Compass,
    title: "Architectural Review",
    description:
      "A deep-dive into your existing stack to identify bottlenecks, security risks, and scalability opportunities.",
    iconWrap: "bg-[#e8f0f1]",
    iconColor: "text-[#2d6b7c]",
    card: false,
  },
];

export default function WhyConsultSection() {
  return (
    <section className="bg-[#f5f7fb] px-6 py-20 md:px-10 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.03em] text-[#0f469f] md:text-[32px]">
            Why Consult with Us?
          </h2>

          <p className="mt-3 max-w-2xl font-body text-[18px] leading-[1.6] text-[#3f4d63]">
            We don&apos;t just build software; we engineer competitive
            advantages through high-fidelity architectural rigor.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[24px] border border-transparent bg-[#f2f4f6] p-8 transition-all duration-300 hover:bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:-translate-y-1 md:p-9"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconWrap}`}
                >
                  <Icon
                    className={`h-7 w-7 ${item.iconColor}`}
                    strokeWidth={2}
                  />
                </div>

                <h3 className="mt-8 font-headline text-[22px] font-bold leading-snug tracking-[-0.02em] text-[#0f469f]">
                  {item.title}
                </h3>

                <p className="mt-4 font-body text-[17px] leading-[1.7] text-[#425066]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
          <div className="relative min-h-[320px] md:min-h-[430px]">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
              alt="Executive team discussing strategy in a modern office"
              fill
              unoptimized
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0b3f95]/85 via-[#0b3f95]/58 to-[#0b3f95]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b3f95]/55 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-10 max-w-xl md:bottom-12 md:left-12">
              <h3 className="font-headline text-[20px] font-semibold leading-tight tracking-[-0.03em] text-white md:text-[30px]">
                Built by Architects, for Leaders.
              </h3>

              <p className="mt-5 font-body text-[12px] leading-[1.65] text-white/90 md:text-[20px]">
                Join 500+ global enterprises that trust Apnitor for their
                digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
