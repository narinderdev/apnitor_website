"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "2-6 Weeks",
    label: "To MVP Launch",
  },
  {
    value: "Weekly",
    label: "Live Demos",
  },
  {
    value: "100%",
    label: "Transparency",
  },
];

export default function RapidBuildCtaSection() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".rapid-stats-card",
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".rapid-stats-card",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".rapid-stat",
        { y: 22, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".rapid-stats-card",
            start: "top 85%",
            once: true,
          },
        }
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ".rapid-content",
          start: "top 88%",
          once: true,
        },
      });

      tl.fromTo(
        ".rapid-title",
        { y: 32, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8 }
      )
        .fromTo(
          ".rapid-text",
          { y: 22, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.65 },
          "-=0.35"
        )
        .fromTo(
          ".rapid-btn",
          { y: 18, autoAlpha: 0, scale: 0.96 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.55 },
          "-=0.25"
        );

      gsap.to(".rapid-btn", {
        y: -3,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[#f4f6f8] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="rapid-stats-card rounded-[40px] bg-white px-8 py-10 shadow-[0_0_0_1px_rgba(15,23,42,0.04)] md:px-14 md:py-12">
          <div className="grid gap-10 text-center md:grid-cols-3 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="rapid-stat">
                <div className="text-[32px] font-semibold leading-none tracking-[-0.04em] text-[#0f469f] md:text-[46px]">
                  {stat.value}
                </div>
                <div className="mt-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#6b5cc6] md:text-[13px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rapid-content mx-auto mt-28 max-w-[860px] text-center">
          <h2 className="rapid-title text-[30px] font-semibold tracking-[-0.04em] text-[#0f469f] md:text-[44px]">
            Ready for a Faster Build?
          </h2>

          <p className="mx-auto mt-2 max-w-[760px] text-[14px] leading-[1.55] text-[#334155] md:text-[18px]">
            Let&apos;s audit your digital roadmap and find the shortest path to
            market-fit. Consultation is free, engineering is fast.
          </p>

          <button className="mt-6 inline-flex h-[68px] items-center justify-center rounded-[16px] bg-gradient-to-r from-[#0f469f] to-[#6a4dc8] px-12 text-[17px] font-bold text-white shadow-[0_18px_34px_rgba(15,70,159,0.18)] transition hover:opacity-95">
            Start Your Rapid Build
          </button>
        </div>
      </div>
    </section>
  );
}