"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function TechnologyCtaSection() {
  const router = useRouter();

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0f4aa5] via-[#3550b8] to-[#6a4dc8] px-8 py-20 text-center md:px-16">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative mx-auto">
            <h2 className="text-[30px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-[50px]">
              Ready to build something extraordinary?
            </h2>

            <p className="mx-auto mt-8 max-w-[900px] text-[14px] leading-[1.65] text-white/80 md:text-[18px]">
              Let&apos;s discuss how our technology expertise can accelerate your
              digital transformation and drive measurable business results.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => router.push("/contact-us")}
                className="inline-flex px-4 py-4 items-center justify-center rounded-[16px] bg-white px-10 text-[16px] font-bold text-[#0b57d0] shadow-[0_12px_28px_rgba(15,23,42,0.12)] transition hover:opacity-95"
              >
                Contact Sales
              </button>

              <button
                onClick={() => router.push("/contact-us")}
                className="inline-flex px-4 py-4 items-center justify-center rounded-[16px] border border-white/25 bg-white/5 px-10 text-[16px] font-bold text-white transition hover:bg-white/10"
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}