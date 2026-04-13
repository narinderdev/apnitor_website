"use client";

import React, { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TechnologyCtaSection() {
  const router = useRouter();
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        ".tech-cta-title",
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8 },
      )
        .fromTo(
          ".tech-cta-text",
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          ".tech-cta-btn",
          { y: 25, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.12 },
          "-=0.3",
        );

      // subtle moving dots background
      gsap.to(".tech-cta-dots", {
        backgroundPosition: "100px 100px",
        duration: 10,
        ease: "linear",
        repeat: -1,
      });

      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[#f4f6f8] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0f4aa5] via-[#3550b8] to-[#6a4dc8] px-8 py-20 text-center md:px-16">
          {/* moving dots */}
          <div
            className="tech-cta-dots absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative mx-auto">
            <h2 className="tech-cta-title text-[20px] font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-[40px]">
              Ready to build something extraordinary?
            </h2>

            <p className="tech-cta-text mx-auto mt-8 max-w-[900px] text-[12px] leading-[1.65] text-white/80 md:text-[18px]">
              Let&apos;s discuss how our technology expertise can accelerate
              your digital transformation and drive measurable business results.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => router.push("/contact-us")}
                className="tech-cta-btn inline-flex py-4 items-center justify-center rounded-[16px] bg-white px-10 text-[16px] font-bold text-[#0b57d0] shadow-[0_12px_28px_rgba(15,23,42,0.12)] transition hover:opacity-95"
              >
                Contact Us
              </button>

              <button
                onClick={() => router.push("/consultation")}
                className="tech-cta-btn inline-flex py-4 items-center justify-center rounded-[16px] border border-white/25 bg-white/5 px-10 text-[16px] font-bold text-white transition hover:bg-white/10"
              >
                Schedule a Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
