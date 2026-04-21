"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FinalCtaSection() {
    const router = useRouter();

  return (
    <section className="bg-[#f7f9fb] py-20 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-[#020617] px-6 py-16 text-center md:px-12 md:py-20">
          {/* subtle background shape */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-[320px] w-[120%] -translate-x-1/2 rounded-full bg-[#0b4aa6]/20 blur-3xl" />
            <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#6c4fd3]/20 blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="mx-auto max-w-[820px] text-[32px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white md:text-[44px]">
              Ready to evolve your enterprise
              <br className="hidden md:block" />
              infrastructure?
            </h2>

            <p className="mx-auto mt-6 max-w-[640px] text-[17px] leading-[1.6] text-[#cbd5f5] md:text-[18px]">
              Connect with our systems architects to design a tailored ERP
              strategy that scales with your ambition.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => router.push('/consultation')}
                className="inline-flex h-[56px] items-center justify-center rounded-[14px] bg-[#2563eb] px-8 text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition hover:bg-[#1d4ed8]"
              >
                Schedule Consult
              </button>

              <Link
                href="#"
                className="inline-flex h-[56px] items-center justify-center rounded-[14px] border border-white/20 bg-white/5 px-8 text-[16px] font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}