import React from "react";
import {
  Rocket,
  LayoutPanelLeft,
  Smartphone,
  Cloud,
  Briefcase,
  Sparkles,
  ChartNoAxesColumn,
  Bot,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Product & MVP",
    description:
      "Go from concept to launch in weeks, not months, with our optimized MVP cycles.",
  },
  {
    icon: LayoutPanelLeft,
    title: "Web Applications",
    description:
      "Scalable, responsive, and performance-first web platforms using modern architectures.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile experiences that users love to engage with.",
  },
  {
    icon: Cloud,
    title: "SaaS Platforms",
    description:
      "Multi-tenant, secure, and robust software-as-a-service infrastructure development.",
  },
  {
    icon: Briefcase,
    title: "ERP Solutions",
    list: [
      "Account Receivables",
      "Account Payable",
      "Enterprise Asset Management",
      "Fleet Management Systems",
      "Bill of Materials",
    ],
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Cloud & DevOps",
    description:
      "Automated deployment pipelines and cloud-native scaling strategies.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Data & BI",
    description:
      "Turning raw data into actionable insights through advanced visualization and analysis.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Integrating intelligent automation to streamline repetitive business processes.",
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernization",
    description:
      "Transforming outdated systems into modern, cloud-ready high-performance architectures.",
  },
];

export default function FullSpectrumEngineering() {
  return (
    <section className="bg-[#f4f6f8] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="text-center">
          <h2 className="text-[38px] font-extrabold leading-tight tracking-[-0.03em] text-[#111827] md:text-[56px]">
            Full-Spectrum Engineering
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[18px] leading-[1.6] text-[#475569]">
            We deliver speed with quality and focus on real business outcomes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`rounded-[18px] bg-white p-8 ${
                  service.featured
                    ? "border border-[#c9d7ea] shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
                    : "shadow-[0_0_0_1px_rgba(15,23,42,0.04)]"
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg">
                  <Icon className="h-5 w-5 text-[#0b57d0]" strokeWidth={2.1} />
                </div>

                <h3 className="mt-6 text-[22px] font-extrabold leading-tight tracking-[-0.02em] text-[#111827]">
                  {service.title}
                </h3>

                {service.list ? (
                  <ul className="mt-5 space-y-3 text-[16px] leading-[1.45] text-[#4b5563]">
                    {service.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#b8c9e4]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 max-w-[330px] text-[16px] leading-[1.6] text-[#4b5563]">
                    {service.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}