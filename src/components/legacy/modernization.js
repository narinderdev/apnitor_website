"use client";

export default function ModernizationPathSection() {
  const steps = [
    {
      number: "1",
      title: "Discovery & Mapping",
      description:
        "We index your entire stack, revealing hidden dependencies and critical bottlenecks often missed by internal teams.",
    },
    {
      number: "2",
      title: "Architectural Blueprint",
      description:
        "Defining the target state—whether it's Refactoring, Replatforming, or complete Replacement—tailored to your ROI goals.",
    },
    {
      number: "3",
      title: "Fluid Execution",
      description:
        "Agile modernization Sprints that deliver incremental value while maintaining full backward compatibility.",
    },
  ];

  return (
    <section className="bg-[#f7f9fb] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-[1110px] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left visual card */}
        <div className="mx-auto w-full max-w-[570px] rounded-[28px] bg-[#f8f8f8] p-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:p-10">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[#f87171]" />
            <span className="h-3 w-3 rounded-full bg-[#facc15]" />
            <span className="h-3 w-3 rounded-full bg-[#4ade80]" />
          </div>

          <div className="mt-10 space-y-6">
            <div className="h-3 w-[78%] rounded-full bg-[#dfe3e8]" />
            <div className="h-3 w-[52%] rounded-full bg-[#dfe3e8]" />
            <div className="h-3 w-[86%] rounded-full bg-[#dfe3e8]" />
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4">
            <div className="rounded-[12px] border border-[#bfd0f1] bg-[#f2f5fb] px-6 py-5 text-center">
              <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0b4aa6]">
                Legacy
              </div>
              <div className="mt-2 text-[20px] font-semibold tracking-[-0.03em] text-[#0b4aa6]">
                1998
              </div>
            </div>

            <div className="rounded-[12px] border border-[#d7cdf5] bg-[#f6f2fd] px-6 py-5 text-center">
              <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6c4fd3]">
                Modern
              </div>
              <div className="mt-2 text-[20px] font-semibold tracking-[-0.03em] text-[#6c4fd3]">
                2024
              </div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div>
          <h2 className="text-[32px] font-bold tracking-[-0.04em] text-[#111827] md:text-[44px]">
            The Modernization Path
          </h2>

          <div className="mt-6 space-y-5">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0b4aa6] text-[18px] font-semibold text-white">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#111827]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[700px] text-[14px] leading-[1.6] text-[#475569]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}