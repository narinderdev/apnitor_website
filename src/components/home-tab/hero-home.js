"use client";

import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight, Database, Landmark, Users, BadgePlus } from "lucide-react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

const cards = [
  {
    icon: Database,
    title: "Data & AI hub",
    description:
      "Advanced analytics and machine learning architectures for data-driven enterprises.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
  },
  {
    icon: Landmark,
    title: "Finance hub",
    description:
      "Secure, compliant FinTech solutions and modern banking infrastructure.",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
  },
  {
    icon: BadgePlus,
    title: "Healthcare hub",
    description:
      "HIPAA-compliant healthcare systems and patient-centric digital experiences.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-700",
  },
  {
    icon: Users,
    title: "Staff augmentation",
    description:
      "Vetted engineering talent to scale your internal technical capabilities seamlessly.",
    iconBg: "bg-amber-50",
    iconColor: "text-blue-700",
  },
];

const HeroHome = () => {
  const rootRef = useRef(null);
  const router = useRouter();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".hero-badge",
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 },
      )
        .fromTo(
          ".hero-title-line",
          { y: 60, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.14 },
          "-=0.2",
        )
        .fromTo(
          ".hero-text",
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.75 },
          "-=0.45",
        )
        .fromTo(
          ".hero-action",
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.12 },
          "-=0.35",
        )
        .fromTo(
          ".hero-card",
          { y: 36, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12 },
          "-=0.1",
        );

      gsap.to(".hero-blob-left", {
        x: -18,
        y: 22,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-blob-right", {
        x: 18,
        y: -20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative mt-10 overflow-hidden bg-[#f4f6f8] pt-24"
    >
      <div className="absolute inset-x-0 top-0 h-[320px] bg-[#f7f8fa]" />
      <div className="hero-blob-left absolute left-[-8%] top-[130px] h-[220px] w-[45%] rounded-[50%] bg-[#eef3f6]" />
      <div className="hero-blob-right absolute right-[-10%] top-[150px] h-[260px] w-[52%] rounded-[50%] bg-[#eef3f6]" />

      <div className="relative mx-auto max-w-7xl px-8 pb-20 pt-6 lg:pb-24">
        <div className="max-w-[760px]">
          <div className="hero-badge inline-flex items-center rounded-full bg-primary-container px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-on-primary-container">
            Trusted Technology Partner
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-blue-900 md:text-7xl">
            <span className="hero-title-line block">Result-driven</span>
            <span className="hero-title-line block">software development</span>
            <span className="hero-title-line block">company</span>
          </h1>

          <p className="hero-text mt-8 text-[18px] leading-[1.6] text-[#334155]">
            We architect scalable, high-performance digital solutions that
            empower global enterprises to lead through innovation and technical
            excellence.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <button className="hero-action inline-flex h-[56px] items-center justify-center rounded-md bg-gradient-to-r from-[#0b57c2] to-[#6a49c8] px-8 text-[18px] font-bold text-white shadow-[0_10px_24px_rgba(30,64,175,0.18)] transition hover:opacity-95" onClick={() => router.push('/development')}>
              Speed Up Development
            </button>

            <a
              href="#"
              className="hero-action inline-flex items-center gap-3 text-[18px] font-bold text-[#0b57c2]"
            >
              View Portfolio
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="hero-card group rounded-xl bg-white px-8 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${card.iconBg}`}
                >
                  <Icon
                    className={`h-7 w-7 ${card.iconColor}`}
                    strokeWidth={2.1}
                  />
                </div>

                <h3 className="mt-8 text-[18px] font-bold text-[#163d96]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.7] text-[#475569]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
