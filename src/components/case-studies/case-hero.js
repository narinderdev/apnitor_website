"use client";

import { Rocket } from "lucide-react";

export default function CaseStudiesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f7fa] px-6 py-24 md:px-10 lg:px-16 xl:px-24 mt-14">
      {/* soft radial background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[720px] w-[720px] -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(203,213,225,0.65) 0%, rgba(226,232,240,0.38) 32%, rgba(238,240,243,0) 72%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="max-w-[920px]">
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ddd0ff] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#432a87]">
            <Rocket className="h-3.5 w-3.5" strokeWidth={2.2} />
            <span>Case Studies</span>
          </div>

          {/* headline */}
          <h1 className="mt-8 text-5xl font-bold leading-[0.92] tracking-[-0.05em] md:text-[88px] lg:text-[80px]">
            <span className="block text-[#003b8b]">Engineering</span>
            <span className="block text-[#003b8b]">Success:</span>
            <span className="block text-[#694bb0]">Our Global Portfolio</span>
          </h1>

          {/* description */}
          <p className="mt-10 max-w-[700px] text-[20px] leading-[1.42] text-[#334155] md:text-[22px]">
            We transform complex business challenges into fluid digital
            realities through technical mastery and architectural precision.
          </p>
        </div>
      </div>
    </section>
  );
}
