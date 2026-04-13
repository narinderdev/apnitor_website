"use client";

import React, { useLayoutEffect, useRef } from "react";
import {
  Code2,
  Coffee,
  Box,
  Palette,
  BarChart3,
  MonitorSmartphone,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    <div className="backend-card flex items-center gap-6 rounded-[18px] bg-white px-6 py-6 shadow-[0_0_0_1px_rgba(15,23,42,0.04)] transition-transform duration-300 hover:-translate-y-1">
      <div className="backend-icon-wrap flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[12px] bg-[#eef2f5]">
        {item.iconLabel ? (
          <span className="backend-icon text-[18px] font-extrabold text-[#0b57d0]">
            {item.iconLabel}
          </span>
        ) : (
          <Icon
            className="backend-icon h-8 w-8 text-[#0b57d0]"
            strokeWidth={2.1}
          />
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
    <div className="frontend-card flex min-h-[180px] flex-col items-center justify-center rounded-[18px] bg-white px-6 py-8 text-center shadow-[0_0_0_1px_rgba(15,23,42,0.04)] transition-transform duration-300 hover:-translate-y-1">
      <div className="frontend-icon-wrap flex h-[42px] w-[42px] items-center justify-center rounded-xl">
        <Icon
          className="frontend-icon h-8 w-8 text-[#6b4bc8]"
          strokeWidth={2.1}
        />
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
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 78%",
          once: true,
        },
      });

      tl.fromTo(
        ".backend-label",
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.45 },
      )
        .fromTo(
          ".backend-title",
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
          "-=0.2",
        )
        .fromTo(
          ".backend-text",
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.65 },
          "-=0.35",
        )
        .fromTo(
          ".backend-card",
          { x: -40, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12 },
          "-=0.3",
        )
        .fromTo(
          ".frontend-label",
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.45 },
          "-=0.6",
        )
        .fromTo(
          ".frontend-title",
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
          "-=0.2",
        )
        .fromTo(
          ".frontend-text",
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.65 },
          "-=0.35",
        )
        .fromTo(
          ".frontend-card",
          { y: 36, scale: 0.96, autoAlpha: 0 },
          { y: 0, scale: 1, autoAlpha: 1, duration: 0.7, stagger: 0.1 },
          "-=0.35",
        );

      gsap.to(".backend-icon", {
        y: -4,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.15,
      });

      gsap.to(".frontend-icon", {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.12,
      });

      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[#f4f6f8] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid gap-12 xl:grid-cols-[1fr_1fr] xl:gap-12">
          <div>
            <p className="backend-label text-[14px] font-semibold uppercase tracking-[0.16em] text-[#0b57d0]">
              Foundation
            </p>

            <h2 className="backend-title mt-4 text-[30px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#111827] md:text-[40px]">
              Backend Excellence
            </h2>

            <p className="backend-text mt-6 max-w-[760px] text-[18px] leading-[1.6] text-[#475569]">
              Scalable, secure, and performant server-side architectures built
              for high-load enterprise environments.
            </p>

            <div className="mt-10 space-y-4">
              {backendStacks.map((item) => (
                <BackendCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div>
            <p className="frontend-label text-[14px] font-semibold uppercase tracking-[0.16em] text-[#6b4bc8]">
              Interface
            </p>

            <h2 className="frontend-title mt-4 text-[30px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#111827] md:text-[40px]">
              Frontend &amp; Web
            </h2>

            <p className="frontend-text mt-6 max-w-[760px] text-[18px] leading-[1.6] text-[#475569]">
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
