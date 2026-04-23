"use client";

export default function DataCTASection() {
  return (
    <section className="bg-[#f7f9fb] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[900px]">
        {/* Card */}
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#003b8b] to-[#694bb0] px-8 py-16 text-center shadow-[0_30px_70px_rgba(15,23,42,0.18)] md:px-16">
          {/* ✅ Soft opacity overlay (fix) */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

          {/* SVG Waves */}
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <svg
              height="100%"
              width="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0"
            >
              <path
                d="M0,0 Q50,100 100,0"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
              <path
                d="M0,20 Q50,120 100,20"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
              <path
                d="M0,40 Q50,140 100,40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-[34px] font-semibold tracking-[-0.04em] text-white md:text-[44px]">
              Ready to activate your data?
            </h2>

            <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-[1.6] text-[#dbeafe]">
              Connect with our engineering team to architect a custom BI roadmap
              tailored to your specific operational goals.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button className="h-[52px] rounded-[12px] bg-white px-8 text-[15px] font-semibold text-[#0b4aa6] shadow-sm transition hover:bg-[#f3f4f6]">
                Schedule Architecture Audit
              </button>

              <button className="h-[52px] rounded-[12px] border border-white/40 px-8 text-[15px] font-semibold text-white transition hover:bg-white/10">
                Download Solutions Brief
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
