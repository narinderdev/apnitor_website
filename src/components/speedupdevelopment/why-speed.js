"use client";

import React, { useLayoutEffect, useRef } from "react";
import {
  Rocket,
  TrendingUp,
  Shield,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhySpeedMattersSection() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".speed-card-main",
        { x: -40, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".speed-card-side",
        { x: 40, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".speed-bottom-card",
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".speed-bottom-grid",
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".speed-stat",
        { y: 18, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".speed-card-main",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.to(".speed-orb", {
        y: -6,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".speed-icon-float", {
        y: -4,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid gap-6 lg:grid-cols-[2.2fr_1.05fr]">
          {/* Left Main Card */}
          <div className="speed-card-main relative overflow-hidden rounded-[34px] bg-[#0f469f] px-12 py-12 text-white shadow-[0_18px_40px_rgba(15,23,42,0.10)] md:px-12 md:py-12">
            <div className="relative z-10 max-w-[470px]">
              <h2 className="text-[14px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[42px]">
                Why Speed Matters
              </h2>

              <p className="mt-4 text-[17px] leading-[1.6] text-white/92 md:text-[18px]">
                In the digital economy, the second-mover disadvantage is real.
                We provide the technical momentum to lead.
              </p>

              <div className="mt-12 grid max-w-[560px] grid-cols-2 gap-8">
                <div className="speed-stat">
                  <div className="text-[30px] font-semibold leading-none md:text-[42px]">
                    40%
                  </div>
                  <div className="mt-2 text-[12px] font-bold uppercase tracking-[0.18em] text-white/80">
                    Lower TCO
                  </div>
                </div>

                <div className="speed-stat">
                  <div className="text-[30px] font-semibold leading-none md:text-[42px]">
                    3x
                  </div>
                  <div className="mt-2 text-[12px] font-bold uppercase tracking-[0.18em] text-white/80">
                    Faster Testing
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-[6%] hidden w-[34%] items-center justify-center md:flex">
              <div className="speed-orb relative h-[230px] w-[230px] rounded-full border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_55%,transparent_70%)]">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-[14%] rounded-full border border-white/10" />
                <div className="absolute inset-[28%] rounded-full border border-white/10" />
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/5" />
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/5" />
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-12 right-[9%] hidden text-[12px] font-medium uppercase tracking-[0.08em] text-white/22 md:block">
              Collaborative Velocity
              <div className="mt-2 h-px w-[150px] bg-white/12" />
            </div>
          </div>

          {/* Right Purple Card */}
          <div className="speed-card-side rounded-[34px] bg-[#a78bf0] px-10 py-12 text-center shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center">
              <Rocket
                className="speed-icon-float h-8 w-8 text-[#4c238f]"
                strokeWidth={2.2}
              />
            </div>

            <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.03em] text-[#4c238f] md:text-[24px]">
              Hypothesis Testing
            </h3>

            <p className="mx-auto mt-2 max-w-[310px] text-[17px] leading-[1.65] text-[#553a92]/85">
              Stop guessing. Deploy features and gather real-world user data
              weeks ahead of your competitors.
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="speed-bottom-grid mt-6 grid gap-6 lg:grid-cols-[1fr_2fr]">
          <div className="speed-bottom-card rounded-[28px] bg-[#eceff3] px-8 py-8 shadow-[0_0_0_1px_rgba(15,23,42,0.03)]">
            <div className="flex items-start gap-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[16px] bg-[#d8dee8]">
                <TrendingUp
                  className="speed-icon-float h-4 w-4 text-[#0f469f]"
                  strokeWidth={2.3}
                />
              </div>

              <div>
                <h4 className="text-[12px] tracking-[-0.02em] text-[#0f469f] md:text-[18px]">
                  Market Dominance
                </h4>
                <p className="mt-2 max-w-[330px] text-[12px] leading-[1.6] text-[#334155] md:text-[16px]">
                  Early entry secures higher retention and brand authority.
                </p>
              </div>
            </div>
          </div>

          <div className="speed-bottom-card rounded-[28px] bg-[#eceff3] px-8 py-8 shadow-[0_0_0_1px_rgba(15,23,42,0.03)]">
            <div className="flex items-start gap-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[16px] bg-[#e3daf7]">
                <Shield
                  className="speed-icon-float h-4 w-4 text-[#6b5cc6]"
                  strokeWidth={2.3}
                />
              </div>

              <div>
                <h4 className="text-[12px] font-extrabold tracking-[-0.02em] text-[#0f469f] md:text-[18px]">
                  Risk Mitigation
                </h4>
                <p className="mt-2 max-w-[720px] text-[12px] leading-[1.6] text-[#334155] md:text-[16px]">
                  Small, rapid cycles allow for pivoting before major capital is
                  committed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}