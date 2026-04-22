"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: "/icons/product-mvp.svg",
    title: "Product & MVP",
    route: "/product-mvp",
    description:
      "Go from concept to launch in weeks, not months, with our optimized MVP cycles.",
  },
  {
    icon: "/icons/web-applications.svg",
    title: "Web Applications",
    route: "/web-applications",
    description:
      "Scalable, responsive, and performance-first web platforms using modern architectures.",
  },
  {
    icon: "/icons/mobile-apps.svg",
    title: "Mobile Apps",
    route: "/mobile-apps",
    description:
      "Native and cross-platform mobile experiences that users love to engage with.",
  },
  {
    icon: "/icons/saas-platforms.svg",
    title: "SaaS Platforms",
    route: "/saas-platform",
    description:
      "Multi-tenant, secure, and robust software-as-a-service infrastructure development.",
  },
  {
    icon: "/icons/erp-solutions.svg",
    title: "ERP Solutions",
    route: "/erp",
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
    icon: "/icons/cloud-devops.svg",
    title: "Cloud & DevOps",
    route: "/cloud",
    description:
      "Automated deployment pipelines and cloud-native scaling strategies.",
  },
  {
    icon: "/icons/data-bi.svg",
    title: "Data & BI",
    route: "#",
    description:
      "Turning raw data into actionable insights through advanced visualization and analysis.",
  },
  {
    icon: "/icons/ai-automation.svg",
    title: "AI & Automation",
    route: "/ai-automation",
    description:
      "Integrating intelligent automation to streamline repetitive business processes.",
  },
  {
    icon: "/icons/legacy-modernization.svg",
    title: "Legacy Modernization",
    route: "#",
    description:
      "Transforming outdated systems into modern, cloud-ready high-performance architectures.",
  },
];

export default function FullSpectrumEngineering() {
  const router = useRouter();

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
          {services.map((service) => (
            <div
              key={service.title}
              onClick={() => router.push(service.route)}
              className={`cursor-pointer rounded-[18px] bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl ${
                service.featured
                  ? "border border-[#c9d7ea] shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
                  : "shadow-[0_0_0_1px_rgba(15,23,42,0.04)]"
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </div>

              <h3 className="mt-2 text-[22px] font-semibold leading-tight tracking-[-0.02em] text-[#111827]">
                {service.title}
              </h3>

              {"list" in service && service.list ? (
                <ul className="mt-2 space-y-2 text-[16px] leading-[1.45] text-[#4b5563]">
                  {service.list.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#b8c9e4]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 max-w-[330px] text-[16px] leading-[1.6] text-[#4b5563]">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}