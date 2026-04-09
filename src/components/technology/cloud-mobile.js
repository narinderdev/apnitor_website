import React from "react";
import {
  Cloud,
  Workflow,
  Smartphone,
  TabletSmartphone,
  AppWindow,
} from "lucide-react";

const cloudItems = [
  {
    icon: Cloud,
    title: "Infrastructure",
    description:
      "AWS (ECS, Fargate, ALB), Azure, and DigitalOcean managed services.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Docker orchestration and robust CI/CD pipelines for zero-downtime deployment.",
  },
];

const cloudTags = ["AWS", "AZURE", "DOCKER", "KUBERNETES"];

const mobileItems = [
  {
    icon: Smartphone,
    title: "Flutter",
    description: "High-fidelity UI and smooth animations.",
    iconColor: "text-[#0b57d0]",
  },
  {
    icon: TabletSmartphone,
    title: "React Native",
    description: "Native performance with React-based agility.",
    iconColor: "text-[#6b4bc8]",
  },
  {
    icon: AppWindow,
    title: "Native (iOS/Android)",
    description:
      "High-performance Swift and Kotlin development for platform-specific needs.",
    iconColor: "text-[#0a6aa1]",
  },
];

export default function CloudMobileSection() {
  return (
    <section className="bg-[#f4f6f8] py-16">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="grid gap-8 xl:grid-cols-[1.6fr_1fr]">
          {/* Left card */}
          <div className="rounded-[26px] bg-gradient-to-r from-[#2f3438] via-[#2f3438] to-[#263446] px-12 py-10 text-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <h2 className="text-[40px] font-semibold tracking-[-0.03em] text-white">
              Cloud &amp; DevOps
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {cloudItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title}>
                    <div className="flex items-center gap-4">
                      <Icon className="h-6 w-6 text-white" strokeWidth={2.1} />
                      <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-white">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-4 max-w-[360px] text-[16px] leading-[1.5] text-white/75">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {cloudTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[8px] border border-white/10 px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.04em] text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-[26px] bg-white px-12 py-10 shadow-[0_0_0_1px_rgba(15,23,42,0.04)]">
            <h2 className="text-[40px] font-semibold tracking-[-0.03em] text-[#111827]">
              Mobile Innovation
            </h2>

            <p className="mt-5 max-w-[480px] text-[18px] leading-[1.55] text-[#475569]">
              Delivering native-grade performance across iOS and Android with
              cross-platform efficiency.
            </p>

            <div className="mt-8 space-y-5">
              {mobileItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[14px] bg-[#f4f6f8]">
                      <Icon
                        className={`h-7 w-7 ${item.iconColor}`}
                        strokeWidth={2.1}
                      />
                    </div>

                    <div>
                      <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 max-w-[420px] text-[16px] leading-[1.5] text-[#475569]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
