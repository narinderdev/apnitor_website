"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CloudCtaSection() {
    const router = useRouter();
  return (
    <section className="bg-[#f7f9fb] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-[#0a4aa6] via-[#2f49ad] to-[#6a52c8] px-8 py-16 text-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:px-16 md:py-20">
          <div className="mx-auto max-w-[860px] text-center">
            <h2 className="text-[30px] font-bold leading-[0.95] tracking-[-0.04em] md:text-[54px]">
              Ready to Automate
              <br />
              Your Future?
            </h2>

            <p className="mx-auto mt-4 max-w-[760px] text-[16px] leading-[1.55] text-white/80 md:text-[18px]">
              Schedule a deep-dive technical consultation with our lead cloud
              architects and discover how we can optimize your deployment
              lifecycle.
            </p>

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <button
                onClick={() => router.push('/consultation')}
                className="inline-flex min-w-[340px] items-center justify-center rounded-[20px] bg-white px-10 py-4 text-[18px] font-bold text-[#0a4aa6] transition hover:opacity-95"
              >
                Book Technical Consultation
              </button>

              <Link
                href="#"
                className="inline-flex min-w-[340px] items-center justify-center rounded-[20px] border border-white/20 bg-white/5 px-10 py-4 text-[18px] font-bold text-white transition hover:bg-white/10"
              >
                Download Cloud Strategy Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}