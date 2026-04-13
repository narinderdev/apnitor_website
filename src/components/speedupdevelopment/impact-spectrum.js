"use client";

import React, { useLayoutEffect, useRef } from "react";
import { Cpu, ShieldCheck, GaugeCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImpactSpectrumSection() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".impact-title",
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".impact-card",
        { y: 32, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".impact-grid",
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".impact-progress-fill",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.35,
          scrollTrigger: {
            trigger: ".impact-progress-wrap",
            start: "top 88%",
            once: true,
          },
        },
      );

      gsap.to(".impact-icon-float", {
        y: -4,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.15,
      });

      gsap.to(".impact-orb", {
        scale: 1.06,
        duration: 2.2,
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
        <h2 className="impact-title text-[24px] font-bold tracking-[-0.03em] text-[#0f469f] md:text-[40px]">
          The Impact Spectrum
        </h2>

        {/* Top Row */}
        <div className="impact-grid mt-10 grid gap-6 lg:grid-cols-[2.2fr_1.05fr]">
          <div className="impact-card rounded-[24px] bg-white px-10 py-10 shadow-[0_0_0_1px_rgba(15,23,42,0.04)]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6b5cc6]">
              Efficiency
            </p>

            <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.03em] text-[#0f469f] md:text-[40px]">
              400% Faster TTM
            </h3>

            <p className="mt-2 max-w-[820px] text-[16px] leading-[1.65] text-[#334155] md:text-[18px]">
              The Vibe flow eliminates the &apos;lost in translation&apos; phase
              between discovery and development.
            </p>

            <div className="impact-progress-wrap mt-8">
              <div className="h-[8px] w-full overflow-hidden rounded-full bg-[#d7dce3]">
                <div className="impact-progress-fill h-full w-[85%] rounded-full bg-gradient-to-r from-[#0f469f] to-[#6b5cc6]" />
              </div>
            </div>
          </div>

          <div className="impact-card rounded-[24px] bg-[#1f59b7] px-10 py-10 text-white shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Cpu
                className="impact-icon-float h-8 w-8 text-white"
                strokeWidth={2.2}
              />
            </div>

            <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.03em] md:text-[26px]">
              Agentic Core
            </h3>

            <p className="mt-2 max-w-[310px] text-[16px] leading-[1.7] text-white/85">
              Our proprietary behavior models simulate thousands of user
              journeys before a single line of code is committed.
            </p>
          </div>
        </div>

        {/* Bottom Row - FIXED */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_2.2fr]">
          <div className="impact-card rounded-[24px] bg-[#6c4db8] px-10 py-10 text-white shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <ShieldCheck
                className="impact-icon-float h-6 w-6 text-white"
                strokeWidth={2.2}
              />
            </div>

            <h3 className="mt-8 text-[18px] font-semibold tracking-[-0.03em] md:text-[26px]">
              Zero Regressions
            </h3>

            <p className="mt-2 max-w-[360px] text-[16px] leading-[1.7] text-white/85">
              QA agents perform continuous stress tests, ensuring every
              evolution is stable and secure.
            </p>
          </div>

          <div className="rounded-[24px] bg-white px-10 py-10 shadow-[0_0_0_1px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between gap-8">
              <div className="max-w-[680px] pt-10">
                <h3 className="text-[14px] font-semibold tracking-[-0.03em] text-[#0f469f] md:text-[30px]">
                  Predictive Failure Mitigation
                </h3>

                <p className="mt-2 text-[16px] leading-[1.7] text-[#334155] md:text-[18px]">
                  Using real-time telemetry, we identify and patch potential
                  bottlenecks before they affect a single end-user.
                </p>
              </div>

              <div className="hidden shrink-0 md:block">
                <div className="impact-orb relative flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#3d4fb7]">
                  <GaugeCircle
                    className="impact-icon-float absolute left-[10px] top-[10px] h-8 w-8 text-white"
                    strokeWidth={2.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
