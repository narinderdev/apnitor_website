"use client";

import React, { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

export default function CTAService() {
  const router = useRouter();
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // content animation
      tl.fromTo(
        ".cta-title",
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8 },
      )
        .fromTo(
          ".cta-text",
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          ".cta-btn",
          { y: 25, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.12 },
          "-=0.3",
        );

      // subtle gradient movement (cool effect)
      gsap.to(".cta-bg", {
        backgroundPosition: "200% center",
        duration: 8,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="cta-bg bg-gradient-to-r from-[#1f4fa3] via-[#4c5db6] to-[#6b5cc6] bg-[length:200%_200%] py-20 md:py-24"
    >
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <h2 className="cta-title text-[36px] md:text-[48px] font-semibold text-white tracking-[-0.02em]">
          Ready to Build the Future?
        </h2>

        <p className="cta-text mt-4 text-[16px] md:text-[18px] text-white/80 leading-[1.6]">
          Let&apos;s discuss how our AI-first approach can accelerate your
          business outcomes.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => router.push("/consultation")}
            className="cta-btn rounded-[12px] bg-white px-8 py-3 text-[16px] font-semibold text-[#0b57d0] shadow-md transition hover:opacity-90"
          >
            Schedule a Strategy Session
          </button>

          <button className="cta-btn rounded-[12px] border border-white/40 px-8 py-3 text-[16px] font-semibold text-white transition hover:bg-white/10">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
