"use client";

import React, { useLayoutEffect, useRef } from "react";
import { Bot } from "lucide-react";
import { gsap } from "gsap";

export default function HeroServices() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".hero-services-badge",
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 },
      )
        .fromTo(
          ".hero-services-title",
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.9 },
          "-=0.3",
        )
        .fromTo(
          ".hero-services-text",
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          ".hero-services-btn",
          { y: 25, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.12 },
          "-=0.3",
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="mt-10 border-t border-[#e7ebf0] bg-[#f4f6f8] py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-[1220px] text-center">
          <p className="hero-services-badge text-[12px] font-extrabold uppercase tracking-[0.24em] text-[#6e59cf]">
            Pioneering the AI-First Era
          </p>

          <h1 className="hero-services-title mt-6 text-[40px] font-bold leading-[0.96] tracking-[-0.05em] text-[#111827] md:text-[72px]">
            Intelligence,{" "}
            <span className="bg-gradient-to-r from-[#003b8b] to-[#694bb0] bg-clip-text text-transparent">
              Autonomous
            </span>{" "}
            by Design
          </h1>

          <p className="hero-services-text mx-auto mt-8 max-w-[880px] text-[22px] leading-[1.5] text-[#334155] md:text-[24px]">
            Apnitor is an AI-First company building the next generation of
            autonomous agents and engineering excellence for high-growth
            enterprises.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="hero-services-btn inline-flex h-[56px] items-center justify-center gap-3 rounded-[14px] bg-[#0d47a1] px-8 text-[16px] font-bold text-white shadow-[0_14px_30px_rgba(13,71,161,0.22)] transition hover:opacity-95">
              Explore Agents
              <Bot className="h-5 w-5" strokeWidth={2.3} />
            </button>

            <button className="hero-services-btn inline-flex h-[56px] items-center justify-center rounded-[14px] bg-white px-8 text-[16px] font-bold text-[#0d47a1] shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition hover:bg-[#f8fafc]">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
