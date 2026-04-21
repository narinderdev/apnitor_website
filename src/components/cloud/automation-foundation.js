"use client";

import { CheckCircle2 } from "lucide-react";

const workflowSteps = [
  {
    number: "01",
    title: "Code & Commit",
    description: "Automated unit testing and linting upon every merge request.",
    accentColor: "#0b4aa6",
    marginLeft: "ml-0",
    marginRight: "mr-10",
  },
  {
    number: "02",
    title: "Build & Secure",
    description:
      "Docker image creation with integrated vulnerability scanning.",
    accentColor: "#7c4dff",
    marginLeft: "ml-5",
    marginRight: "mr-5",
  },
  {
    number: "03",
    title: "Deploy & Scale",
    description:
      "Blue-green deployments ensuring zero downtime across AWS/Azure.",
    accentColor: "#0b4aa6",
    marginLeft: "ml-10",
    marginRight: "mr-0",
  },
];

const features = [
  "Terraform & CloudFormation",
  "GitOps Workflows",
  "Zero-Downtime Rollouts",
  "Automated Compliance",
];

export default function AutomationFoundationSection() {
  return (
    <section className="bg-[#f7f9fb] py-20 md:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-14 px-6 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        {/* Left side */}
        <div className="flex flex-col gap-5 pt-3">
          {workflowSteps.map((step) => (
            <div
              key={step.number}
              className={`${step.marginLeft} ${step.marginRight}`}
            >
              <div
                className="rounded-[18px] bg-white py-8 px-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
                style={{ borderLeft: `5px solid ${step.accentColor}` }}
              >
                <div className="flex items-center gap-5">
                  <span className="min-w-[44px] text-[26px] font-extrabold tracking-[-0.03em] text-[#c4d2e6]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold leading-tight tracking-[-0.02em] text-[#111827]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-[1.55] text-[#334155]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="max-w-[620px] lg:pt-4">
          <h2 className="max-w-[620px] text-[30px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#111827] md:text-[42px]">
            Automation is{" "}
            <span className="italic text-[#6b4ec7]">not an option</span>, it's
            the foundation.
          </h2>

          <p className="mt-4 max-w-[620px] text-[16px] leading-[1.65] text-[#334155] md:text-[18px]">
            We don't just "move things to the cloud." We redefine how your
            engineering team interacts with infrastructure. By treating
            infrastructure as code (IaC), we make your environment reproducible,
            versionable, and secure by design.
          </p>

          <div className="mt-8 grid gap-x-12 gap-y-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-[#0b4aa6]"
                  strokeWidth={2.2}
                />
                <span className="text-[16px] font-medium leading-[1.5] text-[#22324d] md:text-[17px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
