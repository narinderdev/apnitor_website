"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function HeroTech() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".hero-tech-badge",
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 },
      )
        .fromTo(
          ".hero-tech-title",
          { y: 40, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8 },
          "-=0.3",
        )
        .fromTo(
          ".hero-tech-text",
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
          "-=0.35",
        )
        .fromTo(
          ".hero-tech-image",
          { x: 60, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 0.9 },
          "-=0.45",
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[#f4f6f8] py-20 md:py-24 mt-20">
      <div className="mx-auto max-w-[1200px] px-6 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="hero-tech-badge inline-block rounded-full bg-[#e9ddff] px-4 py-1.5 text-[12px] font-semibold tracking-[0.08em] text-[#6b5cc6] uppercase">
            The Fluid Architect
          </div>

          <h1 className="hero-tech-title mt-6 text-[42px] md:text-[56px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#111827]">
            Our Technology Stack:
            <br />
            Engineered for the{" "}
            <span className="bg-gradient-to-r from-[#0b57d0] to-[#6b5cc6] bg-clip-text text-transparent">
              Future
            </span>
          </h1>

          <p className="hero-tech-text mt-6 max-w-[560px] text-[17px] leading-[1.7] text-[#475569]">
            From pioneering AI agents to robust enterprise foundations, we
            leverage a world-class technology stack to build high-performance
            digital solutions.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="hero-tech-image overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
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
