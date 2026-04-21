"use client";

import { useRouter } from "next/navigation";

export default function ScaleVisionCta() {
    const router = useRouter();

  return (
    <section className="bg-[#f7f9fb] py-20 md:py-24">
      <div className="mx-auto max-w-[1260px] px-6 md:px-8">
        <div className="group relative overflow-hidden rounded-[40px] bg-[#07124a] px-8 py-20 shadow-[0_24px_60px_rgba(15,23,42,0.10)] md:px-16">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(0_59_139_/_0.4)] to-[rgb(105_75_176_/_0.4)] opacity-50 transition-opacity duration-150 group-hover:opacity-70" />

          {/* Decorative circle */}
          <div className="absolute -bottom-10 right-[-12px] h-[170px] w-[170px] rounded-full border-[22px] border-white/8" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-[860px] text-center">
            <h2 className="text-[32px] font-bold leading-[1.02] tracking-[-0.04em] text-white md:text-[42px]">
              Ready to Scale Your Vision?
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-[1.65] text-white/55 md:text-[19px]">
              Join the engineering leaders who trust Fluid Engineering to build
              their next-generation SaaS platforms.
            </p>

            <div className="mt-12">
              <button
                onClick={() => router.push('/consultation')}
                className="inline-flex min-w-[292px] items-center justify-center rounded-[18px] bg-white px-10 py-4 text-[18px] font-bold text-[#111827] shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition hover:translate-y-[-1px]"
              >
                Start Your Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}