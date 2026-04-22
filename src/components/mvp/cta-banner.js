"use client";

export default function CtaBannerSection() {
  return (
    <section className="bg-[#eef0f3] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1220px]">
        <div className="relative overflow-hidden rounded-[42px] bg-[#0b1d4d] px-8 py-16 text-center shadow-[0_18px_40px_rgba(9,20,71,0.18)] md:px-16 md:py-20">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="mx-auto max-w-[760px] text-[32px] font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-[44px]">
              Ready to ship in weeks, not months?
            </h2>

            <p className="mx-auto mt-8 max-w-[760px] text-[18px] leading-[1.45] text-[#a9b6d7]">
              Book a consultation with our lead architects and get a tailored
              MVP roadmap for your next big idea.
            </p>

            <div className="mt-10">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-[16px] bg-white px-6 py-3 text-[18px] font-semibold text-[#0f172a] transition hover:translate-y-[-1px]"
              >
                Start Your Discovery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
