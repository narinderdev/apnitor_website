"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const points = [
  "Veteran Senior Developers only. No juniors learning on your clock.",
  "Robust Component Libraries that accelerate UI development.",
  "Direct communication with lead engineers. No middle-management lag.",
];

export default function EfficiencyBuiltSection() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".efficiency-image",
        { x: -40, autoAlpha: 0, scale: 0.98 },
        {
          x: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        ".efficiency-title",
        { y: 28, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.75 }
      )
        .fromTo(
          ".efficiency-text",
          { y: 22, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.65 },
          "-=0.4"
        )
        .fromTo(
          ".efficiency-point",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.12 },
          "-=0.25"
        );

      gsap.to(".efficiency-icon", {
        y: -3,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.12,
      });

      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-white py-20 md:py-24"
      style={{
        backgroundImage:
          "radial-gradient(rgba(148,163,184,0.16) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div className="flex justify-center lg:justify-start">
            <div className="efficiency-image overflow-hidden rounded-[28px] shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
              <Image
                src="/efficiency-expert.png"
                alt="Engineer in blue helmet"
                width={900}
                height={900}
                className="h-[520px] w-[520px] object-cover"
                unoptimized
              />
            </div>
          </div>

          <div className="max-w-[620px]">
            <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0f469f] md:text-[40px]">
              Efficiency Built on Expertise
            </h2>

            <p className="efficiency-text mt-6 text-[18px] leading-[1.75] text-[#334155] md:text-[20px]">
              Speed isn&apos;t about rushing; it&apos;s about eliminating
              friction. Our engineering culture is rooted in{" "}
              <span className="font-semibold text-[#0f469f]">
                Clean Architecture
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#0f469f]">
                Automated Testing.
              </span>
            </p>

            <div className="mt-8">
              {points.map((point) => (
                <div
                  key={point}
                  className="efficiency-point flex items-start gap-5"
                >
                  <div className="mt-1 shrink-0">
                    <CheckCircle2
                      className="efficiency-icon h-5 w-5 text-[#6b5cc6]"
                      strokeWidth={2.2}
                    />
                  </div>

                  <p className="text-[14px] leading-[1.65] text-[#111827] md:text-[18px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}