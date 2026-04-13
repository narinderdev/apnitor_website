"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "James Sterling",
    role: "CTO, FinFlow Tech",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    quote:
      '"Apnitor transformed our legacy systems into a modern microservices architecture within record time. Their technical depth is unparalleled."',
  },
  {
    name: "Sarah Chen",
    role: "Founder, HealthScale",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    quote:
      '"The UI/UX design they delivered significantly improved our patient engagement metrics. A truly result-driven partner."',
  },
  {
    name: "Robert Vance",
    role: "CEO, RetailPro",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
    quote: `"Reliable, communicative, and technically brilliant. They've become an extension of our internal engineering team."`,
  },
];

export default function ClientsSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".clients-heading", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".client-card", {
        scrollTrigger: {
          trigger: ".clients-grid",
          start: "top 82%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="py-10 md:py-10">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center">
          <h2 className="clients-heading text-[34px] font-semibold tracking-[-0.02em] text-[#1f3f97] md:text-[40px]">
            What our clients say
          </h2>
        </div>

        <div className="clients-grid mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="client-card rounded-[18px] border border-[#dde2e7] bg-white px-8 py-8 shadow-[0_2px_10px_rgba(15,23,42,0.03)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div>
                    <h3 className="text-[18px] font-extrabold text-[#1843a3]">
                      {item.name}
                    </h3>
                    <p className="text-[14px] text-[#475569]">{item.role}</p>
                  </div>
                </div>

                <div className="relative h-14 w-14">
                  <Image
                    src="/double-quotes.svg"
                    alt="quote"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="mt-8 text-[17px] italic leading-[1.7] text-[#334155]">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}