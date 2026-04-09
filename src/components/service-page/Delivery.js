import React from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Deep dive into requirements and business logic.",
  },
  {
    number: "02",
    title: "Design",
    description: "Architecting solutions and high-fidelity UX.",
  },
  {
    number: "03",
    title: "Build",
    description: "Iterative development with clean-code focus.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Rigorous testing and controlled deployment.",
  },
  {
    number: "05",
    title: "Improve",
    description: "Continuous optimization and scaling.",
  },
];

export default function DeliveryProcess() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="text-center">
          <h2 className="text-[40px] font-extrabold tracking-[-0.03em] text-[#111827] md:text-[56px]">
            Our Delivery Process
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[18px] leading-[1.6] text-[#475569]">
            A structured approach to engineering excellence.
          </p>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-[32px] hidden border-t border-[#dde3ea] xl:block" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 xl:grid-cols-5">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                {/* fixed height wrapper ensures alignment */}
                <div className="relative flex h-[64px] items-center justify-center">
                  <div className="z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full border-2 border-[#0b57d0] bg-white text-[16px] font-extrabold tracking-[0.04em] text-[#111827]">
                    {step.number}
                  </div>
                </div>

                <h3 className="mt-6 text-[22px] font-extrabold text-[#111827]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-4 max-w-[220px] text-[16px] text-[#475569]">
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
