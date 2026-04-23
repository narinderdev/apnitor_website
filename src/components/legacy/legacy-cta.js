"use client";

import { useRouter } from "next/navigation";

export default function LegacyCTASection() {
  const router = useRouter();

  return (
    <section className="bg-white px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1000px]">
        <div className="rounded-[36px] bg-[#003b8b] px-8 py-16 text-center shadow-[0_30px_60px_rgba(15,23,42,0.12)] md:px-16 md:py-20">
          <h2 className="mx-auto max-w-[720px] text-[34px] font-semibold leading-[1.2] tracking-[-0.03em] text-white md:text-[44px]">
            Ready to de-risk your legacy transformation?
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary button */}
            <button
              className="h-[56px] rounded-[12px] bg-white px-8 text-[16px] font-semibold text-[#003b8b] transition hover:bg-[#f3f4f6]"
              onClick={() => router.push("/consultation")}
            >
              Book a Technical Audit
            </button>

            {/* Secondary button */}
            <button className="h-[56px] rounded-[12px] border border-white/30 px-8 text-[16px] font-semibold text-white transition hover:bg-white/10">
              Download Strategy Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
