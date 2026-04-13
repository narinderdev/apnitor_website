"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const facts = [
  { value: "9+", label: "YEARS\nEXPERTISE" },
  { value: "20+", label: "IT\nPROFESSIONALS" },
  { value: "40+", label: "DOMAINS" },
  { value: "93%", label: "RECURRING\nCLIENTS" },
  { value: "100+", label: "DELIVERED\nPROJECTS" },
];

export default function BriefFacts() {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray(".counter");

      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          if (hasAnimated.current) return;
          hasAnimated.current = true;

          counters.forEach((el) => {
            const raw = el.textContent.trim();
            const match = raw.match(/^(\d+)(.*)$/);

            if (!match) return;

            const endValue = parseInt(match[1], 10);
            const suffix = match[2];

            const obj = { value: 0 };

            gsap.to(obj, {
              value: endValue,
              duration: 1.8,
              ease: "power3.out",
              onUpdate: () => {
                el.textContent = `${Math.floor(obj.value)}${suffix}`;
              },
            });
          });
        },
      });

      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[#f7f9fb] pb-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#8b5cf6]">
            Vital Statistics
          </p>
          <h2 className="mt-3 text-[34px] font-extrabold tracking-[-0.02em] text-[#101828]">
            Brief Facts
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {facts.map((fact) => (
            <div
              key={fact.value}
              className="rounded-[14px] bg-white px-4 py-6 text-center shadow-[0_0_0_1px_rgba(15,23,42,0.04)]"
            >
              <div className="counter text-[34px] font-extrabold leading-none tracking-[-0.03em] text-[#123f9f]">
                {fact.value}
              </div>
              <div className="mt-3 whitespace-pre-line text-[10px] font-bold uppercase tracking-[0.18em] text-[#3b4453]">
                {fact.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}