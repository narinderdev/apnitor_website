"use client";

export default function LifecycleSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Logic",
      description:
        "Defining the technical requirements and security protocols before a single line of code is written.",
    },
    {
      number: "02",
      title: "Fluid Sprints",
      description:
        "Iterative development focusing on core features and integration of smooth UI components.",
    },
    {
      number: "03",
      title: "Hardening",
      description:
        "Rigorous stress testing and security audits to ensure your app is ready for the real world.",
    },
  ];

  return (
    <section className="bg-white px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_2.1fr] lg:gap-20">
          {/* Left intro */}
          <div className="max-w-[320px]">
            <h2 className="text-[32px] font-bold leading-[0.95] tracking-[-0.04em] text-[#003b8b]">
              The Lifecycle.
            </h2>

            <p className="mt-8 text-[14px] leading-[1.55] text-[#475569]">
              From concept to deployment, we follow a rigorous architectural
              framework to ensure stability.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="text-[48px] font-bold leading-none tracking-[-0.05em] text-[#e0e3e5]">
                  {step.number}
                </div>

                <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.03em] text-[#111827]">
                  {step.title}
                </h3>

                <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}