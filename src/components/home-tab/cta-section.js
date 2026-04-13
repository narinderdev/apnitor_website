"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const router = useRouter();
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content > *", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 78%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-gradient-to-r from-[#1f56b5] to-[#6a49c8] py-24 text-center text-white"
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="cta-content relative mx-auto max-w-[900px] px-6">
        <h2 className="text-[36px] font-bold md:text-[46px]">
          Ready to start your project?
        </h2>

        <p className="mx-auto mt-6 max-w-[700px] text-[18px] leading-[1.7] text-white/90">
          Partner with a development team that prioritizes your business outcomes.
          Let&apos;s build something extraordinary together.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <button
            className="rounded-md bg-white px-8 py-4 text-[16px] font-semibold text-[#1f56b5] shadow-md transition hover:opacity-90"
            onClick={() => router.push("/contact-us")}
          >
            Contact Us
          </button>

          <button
            className="rounded-md border border-white/40 px-8 py-4 text-[16px] font-semibold text-white transition hover:bg-white/10"
            onClick={() => router.push("/consultation")}
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}