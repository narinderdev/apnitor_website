"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "1",
    text: "Once we've received and processed your request, we'll get back to you to detail your project needs and sign an NDA to ensure confidentiality.",
    color: "bg-[#b48cf2]",
  },
  {
    number: "2",
    text: "After examining your wants, needs, and expectations, our team will devise a project proposal with the scope of work, team size, time, and cost estimates.",
    color: "bg-[#1459c8]",
  },
  {
    number: "3",
    text: "We'll arrange a meeting with you to discuss the offer and nail down the details.",
    color: "bg-[#2d6b7c]",
  },
  {
    number: "4",
    text: "Finally, we'll sign a contract and start working on your project right away.",
    color: "bg-[#6f49c7]",
  },
];

export default function ContactSection() {
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
        ".contact-title",
        { y: 35, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.75 },
      )
        .fromTo(
          ".contact-subtext",
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.65 },
          "-=0.4",
        )
        .fromTo(
          ".contact-field",
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.08 },
          "-=0.3",
        )
        .fromTo(
          ".contact-button",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.55 },
          "-=0.2",
        )
        .fromTo(
          ".contact-card",
          { x: 40, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 0.8 },
          "-=0.6",
        )
        .fromTo(
          ".contact-step",
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1 },
          "-=0.4",
        )
        .fromTo(
          ".contact-image",
          { scale: 0.94, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 0.8 },
          "-=0.25",
        );

      gsap.to(".contact-step-dot", {
        y: -3,
        duration: 1.6,
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
    <section ref={ref} className="bg-[#f7f9fb] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-8 pt-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-18">
          <div>
            <h2 className="contact-title text-[30px] font-bold leading-[0.95] tracking-[-0.03em] text-[#1843a3] md:text-[50px]">
              Contact us
            </h2>

            <p className="contact-subtext mt-6 max-w-[500px] text-[18px] leading-[1.6] text-[#334155]">
              Book a call or fill out the form below and we'll get back to you
              once we've processed your request.
            </p>

            <form className="mt-10">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="contact-field">
                  <label className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#334155]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="h-12 w-full rounded-lg border border-transparent bg-[#eef2f5] px-4 text-[16px] text-[#334155] outline-none placeholder:text-[#64748b] focus:border-[#1843a3]"
                  />
                </div>

                <div className="contact-field">
                  <label className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#334155]">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="h-12 w-full rounded-lg border border-transparent bg-[#eef2f5] px-4 text-[16px] text-[#334155] outline-none placeholder:text-[#64748b] focus:border-[#1843a3]"
                  />
                </div>

                <div className="contact-field">
                  <label className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#334155]">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@company.com"
                    className="h-12 w-full rounded-lg border border-transparent bg-[#eef2f5] px-4 text-[16px] text-[#334155] outline-none placeholder:text-[#64748b] focus:border-[#1843a3]"
                  />
                </div>

                <div className="contact-field">
                  <label className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#334155]">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    className="h-12 w-full rounded-lg border border-transparent bg-[#eef2f5] px-4 text-[16px] text-[#334155] outline-none placeholder:text-[#64748b] focus:border-[#1843a3]"
                  />
                </div>
              </div>

              <div className="contact-field mt-6">
                <label className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#334155]">
                  Project Budget
                </label>
                <div className="relative">
                  <select className="h-12 w-full appearance-none rounded-lg border border-transparent bg-[#eef2f5] px-4 pr-12 text-[16px] text-[#111827] outline-none focus:border-[#1843a3]">
                    <option>Select a range</option>
                    <option>$5k - $10k</option>
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k+</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748b]" />
                </div>
              </div>

              <div className="contact-field mt-6">
                <label className="mb-3 block text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#334155]">
                  Describe your needs in detail
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project goals and technical requirements..."
                  className="w-full rounded-lg border border-transparent bg-[#eef2f5] px-4 py-4 text-[16px] text-[#334155] outline-none placeholder:text-[#64748b] focus:border-[#1843a3]"
                />
              </div>

              <button
                type="submit"
                className="contact-button mt-10 inline-flex h-[54px] items-center justify-center rounded-md bg-gradient-to-r from-[#1252b3] to-[#694bb0] px-10 text-[16px] font-bold text-white shadow-[0_12px_24px_rgba(18,82,179,0.22)] transition hover:opacity-95"
              >
                Submit Request
              </button>
            </form>
          </div>

          <div className="contact-card rounded-[28px] bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] md:p-12">
            <h3 className="text-[32px] font-semibold leading-tight tracking-[-0.02em] text-[#1843a3]">
              What happens next?
            </h3>

            <div className="mt-10 space-y-10">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="contact-step flex items-start gap-5"
                >
                  <div
                    className={`contact-step-dot flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[16px] font-bold text-white ${step.color}`}
                  >
                    {step.number}
                  </div>
                  <p className="max-w-[440px] text-[16px] leading-[1.7] text-[#4b5563]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-[#eef2f5] pt-10">
              <div className="contact-image relative overflow-hidden rounded-[18px]">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop"
                  alt="Office meeting room"
                  width={1200}
                  height={800}
                  className="h-[260px] w-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
