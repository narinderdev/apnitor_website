"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function CTAService() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-r from-[#1f4fa3] via-[#4c5db6] to-[#6b5cc6] py-20 md:py-24">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        {/* Heading */}
        <h2 className="text-[36px] md:text-[48px] font-extrabold text-white tracking-[-0.02em]">
          Ready to Build the Future?
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-[16px] md:text-[18px] text-white/80 leading-[1.6]">
          Let&apos;s discuss how our AI-first approach can accelerate your
          business outcomes.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary */}
          <button
            onClick={() => router.push("/contact-us")}
            className="rounded-[12px] bg-white px-8 py-3 text-[16px] font-semibold text-[#0b57d0] shadow-md transition hover:opacity-90"
          >
            Schedule a Strategy Session
          </button>

          {/* Secondary */}
          <button
            onClick={() => router.push("/portfolio")}
            className="rounded-[12px] border border-white/40 px-8 py-3 text-[16px] font-semibold text-white transition hover:bg-white/10"
          >
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}