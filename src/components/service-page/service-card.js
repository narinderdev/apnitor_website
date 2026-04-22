import React from "react";
import Image from "next/image";
import { Bot, Users, Play } from "lucide-react";

export default function ServiceCard() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.52fr]">
          <div className="group relative overflow-hidden rounded-[22px] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
            <div className="relative min-h-[386px]">
              {/* image block on right */}
              <div className="absolute inset-y-0 right-0 w-[46%] overflow-hidden">
                <Image
                  src="/ai-girl.png"
                  alt="AI girl"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  priority
                  className="object-cover grayscale blur-[3px] transition-all duration-500 ease-out group-hover:blur-[1px] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-white/45" />
              </div>

              {/* content layer over full card */}
              <div className="relative z-10 flex min-h-[386px] flex-col justify-between px-10 py-10">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef2f7]">
                    <Bot className="h-6 w-6 text-[#1459c8]" strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-8 max-w-[320px] text-[30px] font-extrabold leading-[1.18] tracking-[-0.03em] text-[#111827]">
                    Autonomous AI Agents
                  </h3>

                  <p className="mt-5 max-w-[68%] text-[16px] leading-[1.75] text-[#475569]">
                    Specialized LLM-powered agents that plan, execute, and
                    learn. We build multi-agent systems that handle complex
                    workflows from customer support to market analysis.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {["LangChain", "AutoGPT", "Custom LLMs"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#eef2f5] px-4 py-2 text-[14px] font-semibold text-[#1f3f97]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-h-[386px] flex-col justify-between rounded-[22px] bg-gradient-to-br from-[#6b4bc8] to-[#2157c8] px-10 py-10 text-white shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Users className="h-6 w-6 text-white" strokeWidth={2.2} />
              </div>

              <h3 className="mt-8 text-[28px] font-extrabold leading-[1.18] tracking-[-0.03em]">
                Voice AI Agents
              </h3>

              <p className="mt-5 max-w-[300px] text-[16px] leading-[1.7] text-white/75">
                Sub-second latency voice interactions that sound human.
                Revolutionizing call centers and personal assistants.
              </p>
            </div>

            <button className="mt-8 inline-flex items-center gap-3 self-start text-[16px] font-bold text-white">
              <span className="border-b border-white pb-[1px]">Hear Demo</span>
              <Play className="h-5 w-5" strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
