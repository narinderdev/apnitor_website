"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Zap, Timer } from "lucide-react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

export default function HeroRoadmap() {
  const ref = useRef(null);
  const router = useRouter();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".roadmap-badge",
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5 },
      )
        .fromTo(
          ".roadmap-title-line",
          { y: 56, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.85, stagger: 0.12 },
          "-=0.2",
        )
        .fromTo(
          ".roadmap-text",
          { y: 26, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
          "-=0.45",
        )
        .fromTo(
          ".roadmap-btn",
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.12 },
          "-=0.35",
        )
        .fromTo(
          ".roadmap-image",
          { x: 70, autoAlpha: 0, scale: 0.96 },
          { x: 0, autoAlpha: 1, scale: 1, duration: 0.95 },
          "-=0.55",
        )
        .fromTo(
          ".roadmap-floating-card",
          { y: 24, autoAlpha: 0, scale: 0.92 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.7 },
          "-=0.45",
        );

      gsap.to(".roadmap-blob", {
        x: 18,
        y: -16,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".roadmap-glow", {
        scaleX: 1.08,
        autoAlpha: 0.9,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative mt-10 overflow-hidden bg-[#f4f6f8] py-24"
    >
      <div className="roadmap-blob absolute right-[-6%] top-0 h-[500px] w-[370px] rounded-bl-[220px] bg-[#e9edf6]" />

      <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="max-w-[560px]">
          <div className="roadmap-badge inline-flex items-center gap-2 rounded-full bg-[#e7ddff] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#6b5cc6]">
            <Zap className="h-3.5 w-3.5" strokeWidth={2.4} />
            Rapid Engineering
          </div>

          <h1 className="mt-8 text-[56px] font-extrabold leading-[0.95] tracking-[-0.05em] text-[#0f469f] xl:text-[70px]">
            <span className="roadmap-title-line block">Accelerate Your</span>
            <span className="roadmap-title-line block">Digital Roadmap</span>
          </h1>

          <p className="roadmap-text mt-8 max-w-[560px] text-[19px] leading-[1.7] text-[#334155]">
            Apnitor Solutions specializes in high-velocity product engineering.
            We turn complex visions into market-ready MVPs in just{" "}
            <span className="font-bold text-[#6b5cc6]">2 to 6 weeks.</span>
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button className="roadmap-btn inline-flex h-[54px] items-center justify-center rounded-[14px] bg-gradient-to-r from-[#0f4aa5] to-[#6a4dc8] px-8 text-[16px] font-bold text-white shadow-[0_12px_28px_rgba(15,74,165,0.22)] transition hover:opacity-95">
              Start Your Rapid Build
            </button>

            <button className="roadmap-btn inline-flex h-[54px] items-center justify-center rounded-[14px] bg-white px-8 text-[16px] font-bold text-[#0f469f] shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition hover:bg-[#f8fafc]" onClick={() => router.push('/portfolio')}>
              View Case Studies
            </button>
          </div>
        </div>

        <div className="relative ml-auto w-full max-w-[630px]">
          <div className="roadmap-image relative overflow-hidden rounded-[28px] shadow-[0_22px_55px_rgba(15,23,42,0.16)]">
            <Image
              src="/roadmap-world.png"
              alt="Digital world map"
              width={1400}
              height={1100}
              className="h-[420px] w-full object-cover xl:h-[500px]"
              priority
            />

            <div className="pointer-events-none absolute inset-x-[10%] bottom-[9%]">
              <div className="roadmap-glow h-8 rounded-full bg-[#1cc0ff]/40 blur-2xl" />
            </div>
          </div>

          <div className="roadmap-floating-card absolute -bottom-5 left-[-24px] rounded-[20px] bg-white px-6 py-5 shadow-[0_22px_45px_rgba(15,23,42,0.16)]">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#f2ecff]">
                <Timer className="h-5 w-5 text-[#6b5cc6]" strokeWidth={2.4} />
              </div>

              <div>
                <div className="font-bold text-[#0f469f]">
                  <span className="text-[32px] leading-none">2-6</span>
                </div>
                <p className="mt-2 max-w-[210px] text-[14px] leading-[1.45] text-[#334155]">
                  Weeks to MVP launch with full core functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
