import React from "react";
import {
  Code2,
  Coffee,
  Box,
  Palette,
  BarChart3,
  MonitorSmartphone,
} from "lucide-react";

const backendStacks = [
  {
    icon: Code2,
    title: "Python Stack",
    description: "FastAPI, Django, Flask",
  },
  {
    icon: Box,
    title: "Node.js Ecosystem",
    description: "NestJS, Express, TypeORM",
    iconLabel: "JS",
  },
  {
    icon: Coffee,
    title: "Enterprise Java",
    description: "Spring Boot, Microservices",
  },
];

const frontendStacks = [
  {
    icon: Box,
    title: "Next.js / React",
    description: "SSR & Performance",
  },
  {
    icon: Palette,
    title: "Tailwind CSS",
    description: "Atomic Design",
  },
  {
    icon: BarChart3,
    title: "Dash / Plotly",
    description: "Data Visualization",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive",
    description: "Cross-device fluidity",
  },
];

function BackendCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="flex items-center gap-6 rounded-[18px] bg-white px-6 py-6 shadow-[0_0_0_1px_rgba(15,23,42,0.04)]">
      <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[12px] bg-[#eef2f5]">
        {item.iconLabel ? (
          <span className="text-[18px] font-extrabold text-[#0b57d0]">
            {item.iconLabel}
          </span>
        ) : (
          <Icon className="h-8 w-8 text-[#0b57d0]" strokeWidth={2.1} />
        )}
      </div>

      <div>
        <h3 className="text-[20px] font-extrabold tracking-[-0.02em] text-[#111827]">
          {item.title}
        </h3>
        <p className="mt-2 text-[16px] leading-[1.5] text-[#475569]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function FrontendCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="flex min-h-[180px] flex-col items-center justify-center rounded-[18px] bg-white px-6 py-8 text-center shadow-[0_0_0_1px_rgba(15,23,42,0.04)]">
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-xl">
        <Icon className="h-8 w-8 text-[#6b4bc8]" strokeWidth={2.1} />
      </div>

      <h3 className="mt-6 text-[20px] font-extrabold tracking-[-0.02em] text-[#111827]">
        {item.title}
      </h3>

      <p className="mt-4 text-[15px] leading-[1.5] text-[#667085]">
        {item.description}
      </p>
    </div>
  );
}

export default function BackendFrontendSection() {
  return (
    <section className="bg-[#f4f6f8] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid gap-12 xl:grid-cols-[1fr_1fr] xl:gap-12">
          {/* Left side */}
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[#0b57d0]">
              Foundation
            </p>

            <h2 className="mt-4 text-[30px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#111827] md:text-[40px]">
              Backend Excellence
            </h2>

            <p className="mt-6 max-w-[760px] text-[18px] leading-[1.6] text-[#475569]">
              Scalable, secure, and performant server-side architectures built
              for high-load enterprise environments.
            </p>

            <div className="mt-10 space-y-4">
              {backendStacks.map((item) => (
                <BackendCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          {/* Right side */}
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[#6b4bc8]">
              Interface
            </p>

            <h2 className="mt-4 text-[30px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#111827] md:text-[40px]">
              Frontend &amp; Web
            </h2>

            <p className="mt-6 max-w-[760px] text-[18px] leading-[1.6] text-[#475569]">
              Crafting immersive, responsive, and ultra-fast user experiences
              with modern reactive frameworks.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {frontendStacks.map((item) => (
                <FrontendCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}