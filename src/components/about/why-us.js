"use client";

import React, { useLayoutEffect, useRef } from "react";
import { Zap, Layers3, Eye, BadgeCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    icon: Zap,
    title: "Result-oriented",
    text: "We focus on achieving the best possible results for our customers. We are always looking for ways to improve our processes.",
  },
  {
    icon: Layers3,
    title: "Flexible",
    text: "We are flexible and we can adapt to our customers’ needs. We are always ready to change our approach to find the best solution.",
  },
  {
    icon: Eye,
    title: "Transparent",
    text: "We are transparent in our communication with our customers. We provide regular updates on the progress of our projects.",
  },
  {
    icon: BadgeCheck,
    title: "Experienced",
    text: "We have a lot of experience in software development. Our team consists of highly skilled professionals who have worked on numerous projects.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.fromTo(
        ".whyus-title",
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8 }
      )
        .fromTo(
          ".whyus-text",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 },
          "-=0.45"
        )
        .fromTo(
          ".whyus-card",
          { y: 36, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12 },
          "-=0.2"
        );

      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[#f7f9fb] py-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <h2 className="whyus-title text-[42px] font-extrabold tracking-[-0.03em] text-[#123f9f]">
            Why Us?
          </h2>
          <p className="whyus-text mt-3 text-[14px] text-[#6b7280]">
            Combining technical mastery with business intuition to deliver
            exceptional results.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="whyus-card rounded-[14px] bg-white px-6 py-6 shadow-[0_0_0_1px_rgba(15,23,42,0.04)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3f5f9]">
                  <Icon className="h-5 w-5 text-[#111827]" strokeWidth={2.2} />
                </div>

                <h3 className="mt-8 text-[22px] font-extrabold tracking-[-0.02em] text-[#111827]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.8] text-[#5f6b7b]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}