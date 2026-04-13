"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  SquarePen,
  TerminalSquare,
  Rocket,
  BrainCircuit,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discover",
    vibeTitle: "AI-Assisted Synthesis",
    vibeDescription:
      "Rapidly digesting legacy docs and technical specs into actionable LLM Spec Generation.",
    legacy: "Manual Stakeholder Interviews",
    image: "/vibe-discover.png",
    icon: Sparkles,
    reverse: false,
  },
  {
    number: "02",
    title: "Design",
    vibeTitle: "Predictive UX",
    vibeDescription:
      "Generative UI Components validated against real-world agentic behavior models.",
    legacy: "Static Component Looping & Manual Prototyping",
    image: "/vibe-design.png",
    icon: SquarePen,
    reverse: true,
  },
  {
    number: "03",
    title: "Build",
    vibeTitle: "Agentic Engineering",
    vibeDescription:
      "Self-Authoring Code with dedicated agentic QA squads that never sleep.",
    legacy: "Manual Sprints & Human Code Reviews",
    image: "/vibe-build.png",
    icon: TerminalSquare,
    reverse: false,
  },
  {
    number: "04",
    title: "Launch",
    vibeTitle: "Autonomous CI/CD",
    vibeDescription:
      "Zero-Touch Delivery with real-time anomaly detection and predictive failure mitigation.",
    legacy: "Manual Monitoring & On-Call Rotations",
    image: "/vibe-launch.png",
    icon: Rocket,
    reverse: true,
  },
  {
    number: "05",
    title: "Improve",
    vibeTitle: "Self-Healing Systems",
    vibeDescription:
      "Infrastructure that evolves with user data autonomously, moving from reactive to predictive.",
    legacy: "Reactive Bug Fixing & Scheduled Maintenance",
    image: "/vibe-improve.png",
    icon: BrainCircuit,
    reverse: false,
  },
];

function StepHeader({ number, title, reverse = false }) {
  return (
    <div
      className={`flex items-center gap-4 ${
        reverse ? "justify-end" : "justify-start"
      }`}
    >
      {!reverse && (
        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#3d4fb7] text-[14px] font-extrabold text-white">
          {number}
        </div>
      )}

      <h3 className="text-[34px] font-bold tracking-[-0.03em] text-[#0f469f]">
        {title}
      </h3>

      {reverse && (
        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#3d4fb7] text-[14px] font-extrabold text-white">
          {number}
        </div>
      )}
    </div>
  );
}

function ProcessCard({ vibeTitle, vibeDescription, legacy, icon: Icon }) {
  return (
    <div className="rounded-[20px] bg-white px-8 py-9 shadow-[0_0_0_1px_rgba(15,23,42,0.04)]">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#6b5cc6]">
            The Vibe Way
          </p>

          <h4 className="mt-8 text-[22px] font-bold tracking-[-0.02em] text-[#111827]">
            {vibeTitle}
          </h4>

          <p className="mt-4 max-w-[620px] text-[16px] leading-[1.6] text-[#334155]">
            {vibeDescription}
          </p>
        </div>

        <Icon
          className="mt-1 h-6 w-6 shrink-0 text-[#6b5cc6]"
          strokeWidth={2.1}
        />
      </div>

      <div className="mt-7 border-t border-[#e8ebf0] pt-7">
        <p className="text-[12px] uppercase text-[#6b7280]">
          Traditional Approach (Legacy)
        </p>
        <p className="mt-3 text-[15px] text-[#b0b7c3] line-through">{legacy}</p>
      </div>
    </div>
  );
}

function ProcessImage({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-[20px] shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        className="h-[256px] w-full object-cover"
        unoptimized
      />
    </div>
  );
}

export default function VibeProcessSection() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".vibe-heading",
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vibe-heading-wrap",
            start: "top 82%",
            once: true,
          },
        },
      );

      gsap.utils.toArray(".vibe-row").forEach((row) => {
        const header = row.querySelector(".vibe-step-header");
        const card = row.querySelector(".vibe-step-card");
        const image = row.querySelector(".vibe-step-image");
        const isReverse = row.dataset.reverse === "true";

        gsap.fromTo(
          header,
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          card,
          { x: isReverse ? 40 : -40, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          image,
          { x: isReverse ? -40 : 40, y: -14, autoAlpha: 0, scale: 0.98 },
          {
            x: 0,
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              once: true,
            },
          },
        );
      });

      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[#f4f6f8] py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="vibe-heading-wrap text-center">
          <h2 className="vibe-heading text-[42px] font-semibold tracking-[-0.03em] text-[#0f469f]">
            The Vibe Process
          </h2>
          <div className="mx-auto mt-5 h-[4px] w-[96px] rounded-full bg-[#5f55c8]" />
        </div>

        <div className="mt-20 space-y-20">
          {steps.map((step, index) => {
            const reverse = step.reverse;
            const hasNext = index !== steps.length - 1;

            return (
              <div
                key={step.number}
                data-reverse={reverse}
                className="vibe-row relative"
              >
                <div className="vibe-step-header">
                  <StepHeader
                    number={step.number}
                    title={step.title}
                    reverse={reverse}
                  />
                </div>

                <div className="relative mt-6 grid items-start gap-12 lg:grid-cols-2">
                  <div className={`${reverse ? "lg:order-2" : ""}`}>
                    <div className="vibe-step-card relative">
                      <ProcessCard
                        vibeTitle={step.vibeTitle}
                        vibeDescription={step.vibeDescription}
                        legacy={step.legacy}
                        icon={step.icon}
                      />

                      {reverse && (
                        <div className="pointer-events-none absolute right-full top-[24%] h-0 w-12 border-t-2 border-dashed border-[#214fb4]" />
                      )}
                    </div>
                  </div>

                  <div className={`${reverse ? "lg:order-1" : ""}`}>
                    <div className="vibe-step-image relative -mt-3">
                      <ProcessImage src={step.image} alt={step.title} />

                      {!reverse && (
                        <>
                          <div className="pointer-events-none absolute left-[-48px] top-[24%] h-0 w-12 border-t-2 border-dashed border-[#214fb4]" />
                          <div className="pointer-events-none absolute left-[-48px] top-[76%] h-0 w-12 border-t-2 border-dashed border-[#214fb4]" />
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {hasNext && !reverse && (
                  <div className="pointer-events-none absolute left-[24%] top-full z-10 h-[80px] border-l-2 border-dashed border-[#214fb4]" />
                )}

                {hasNext && reverse && (
                  <div className="pointer-events-none absolute right-[24%] top-[100%] z-10 h-[80px] border-l-2 border-dashed border-[#214fb4]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
