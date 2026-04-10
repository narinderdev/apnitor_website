import React from "react";
import { Bot } from "lucide-react";

export default function HeroServices() {
  return (
    <section className="border-t border-[#e7ebf0] bg-[#f4f6f8] py-24 md:py-28 mt-10">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-[1220px] text-center">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.24em] text-[#6e59cf]">
            Pioneering the AI-First Era
          </p>

          <h1 className="mt-6 text-[40px] font-bold leading-[0.96] tracking-[-0.05em] text-[#111827] md:text-[72px]">
            Intelligence,{" "}
            <span className="bg-gradient-to-r from-[#1459c8] to-[#6f49c7] bg-clip-text text-transparent">
              Autonomous
            </span>{" "}
            by Design
          </h1>

          <p className="mx-auto mt-8 max-w-[880px] text-[22px] leading-[1.5] text-[#334155] md:text-[24px]">
            Apnitor is an AI-First company building the next generation of
            autonomous agents and engineering excellence for high-growth
            enterprises.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="inline-flex h-[56px] items-center justify-center gap-3 rounded-[14px] bg-[#0d47a1] px-8 text-[16px] font-bold text-white shadow-[0_14px_30px_rgba(13,71,161,0.22)] transition hover:opacity-95">
              Explore Agents
              <Bot className="h-5 w-5" strokeWidth={2.3} />
            </button>

            <button className="inline-flex h-[56px] items-center justify-center rounded-[14px] bg-white px-8 text-[16px] font-bold text-[#0d47a1] shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition hover:bg-[#f8fafc]">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}