import React from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Foundation phase: redefining requirements through the lens of artificial intelligence and large language models.",
    before:
      "Manual requirements gathering, fragmented documentation, and human-led stakeholder interviews prone to interpretation bias.",
    afterTitle: "AI-Driven Analysis (LLM Spec Generation)",
    afterDescription:
      "Automated synthesis of complex user needs into technical blueprints with 99% logic consistency.",
    image: "/delivery-discover.png",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Visualizing the future: shifting from static interfaces to dynamic, context-aware user experiences.",
    before:
      "Static looping design cycles, manual prototyping in Figma, and fixed UI patterns that don't adapt to user behavior.",
    afterTitle: "Predictive UX (Generative UI Components)",
    afterDescription:
      "Interfaces that morph in real-time based on predictive analytics and user intent mapping.",
    image: "/delivery-design.png",
  },
  {
    number: "03",
    title: "Build",
    description:
      "The engine of creation: replacing laborious sprints with agentic, self-authoring engineering protocols.",
    before:
      "Standard manual sprints, technical debt accumulation, and human-dependent code reviews causing delivery bottlenecks.",
    afterTitle: "Agentic Engineering (Self-Authoring Code)",
    afterDescription:
      "Autonomous coding agents drafting, testing, and optimizing codebases with near-zero latency.",
    image: "/delivery-build.png",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "The transition to production: evolving from manual checklists to seamless, zero-touch delivery systems.",
    before:
      "Manual monitoring, high-stress release days, and reactive rollback strategies when deployments fail.",
    afterTitle: "Autonomous CI/CD (Zero-Touch Delivery)",
    afterDescription:
      "Intelligent deployment pipelines that verify, launch, and scale infrastructure without human intervention.",
    image: "/delivery-launch.png",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "The continuous loop: achieving peak performance through proactive, self-healing system optimization.",
    before:
      "Reactive maintenance, manual bug reporting, and periodic performance audits that often miss subtle regressions.",
    afterTitle: "Self-Healing Systems (Continuous Optimization)",
    afterDescription:
      "Proactive anomaly detection and automated code remediation that ensures 100% uptime and efficiency.",
    image: "/delivery-improve.png",
  },
];

function StepIcon({ number }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d4ed8] to-[#7c3aed] shadow-[0_12px_30px_rgba(76,81,191,0.28)]">
      <span className="text-lg font-extrabold text-white">{number}</span>
    </div>
  );
}

function InfoCard({ label, title, description, accent = false }) {
  return (
    <div
      className={`rounded-[22px] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] ${
        accent ? "border-l-4 border-[#7c3aed]" : "border border-[#eef2f7]"
      }`}
    >
      <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#7c8596]">
        {label}
      </div>

      {title ? (
        <h4 className="mt-3 text-[18px] font-extrabold leading-[1.35] text-[#0b4aa2] md:text-[20px]">
          {title}
        </h4>
      ) : null}

      <p className={`text-[17px] leading-[1.65] text-[#0f172a] ${title ? "mt-3" : "mt-4"}`}>
        {description}
      </p>
    </div>
  );
}

export default function DeliveryProcess() {
  return (
    <section className="bg-[#f6f7fb] py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-6 md:px-8">
        <div className="text-center">
          <div className="mx-auto inline-flex rounded-full bg-[#ede9fe] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#6d28d9]">
            The Intelligence Evolution
          </div>

          <h2 className="mt-5 text-[40px] font-extrabold tracking-[-0.04em] text-[#0b4aa2] md:text-[64px]">
            AI Delivery Flow
          </h2>

          <p className="mx-auto mt-5 max-w-[860px] text-[20px] leading-[1.55] text-[#334155]">
            Transforming the software lifecycle from manual oversight to agentic
            autonomy. Experience the leap from reactive maintenance to
            self-healing resilience.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-[5px] -translate-x-1/2 bg-[#d8dee8] xl:block" />

          <div className="space-y-16 md:space-y-20">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="grid items-center gap-20 xl:grid-cols-2 xl:gap-[100px]"
                >
                  <div className={isEven ? "xl:order-1" : "xl:order-2"}>
                    <div className="max-w-[560px]">
                      <div className="flex items-center gap-5">
                        <StepIcon number={step.number} />
                        <h3 className="text-[34px] font-extrabold tracking-[-0.03em] text-[#0b4aa2] md:text-[46px]">
                          {step.number}. {step.title}
                        </h3>
                      </div>

                      <p className="mt-7 text-[22px] leading-[1.55] text-[#334155]">
                        {step.description}
                      </p>

                      <div className="mt-8 space-y-5">
                        <InfoCard
                          label="Before AI"
                          description={step.before}
                        />

                        <InfoCard
                          label="After AI (Vibe)"
                          title={step.afterTitle}
                          description={step.afterDescription}
                          accent
                        />
                      </div>
                    </div>
                  </div>

                  <div className={isEven ? "xl:order-2" : "xl:order-1"}>
                    <div className="mx-auto max-w-[620px]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-auto w-full rounded-[28px] object-cover shadow-[0_20px_50px_rgba(15,23,42,0.16)]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}