"use client";

import { CheckCircle2, FileText } from "lucide-react";
import Image from "next/image";

export default function AutomationStack() {
  return (
    <section
      className="md:px-10 lg:px-16 xl:px-24"
      style={{
        backgroundColor: "#eef0f5",
        padding: "6rem 1.5rem",
      }}
    >
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-xl text-center">
        <h2 className="text-[30px] font-bold tracking-tight text-[#1a1b22] md:text-[42px]">
          The Automation Stack
        </h2>
        <p className="mt-3 text-[18px] leading-relaxed text-[#6b7280] md:text-[22px]">
          Four pillars of intelligent operations, seamlessly integrated into
          your existing infrastructure.
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 rounded-[32px] p-3 sm:p-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-4">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
              <Image
                src="/icons/smart.svg"
                alt="Smart icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#111827]">
              AI Assistants
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#6b7280]">
              Custom-trained large language models (LLMs) specialized in your
              engineering data and internal protocols.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Semantic Search",
                "Natural Querying",
                "Internal Knowledge Bases",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#e5e7eb] bg-white px-3 py-2 text-xs text-[#6b7280]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Image
              src="/icons/multi-tenant1.svg"
              alt=""
              width={170}
              height={170}
              className="pointer-events-none absolute -bottom-4 -right-3 h-40 w-40 object-contain opacity-[0.2] hover:opacity-[0.07]"
            />
          </div>

          {/* Card 2 */}
          <div
            className="relative overflow-hidden rounded-2xl p-6 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #694bb0 0%, #23005c 100%)",
            }}
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
              <Image
                src="/icons/call-tracking.svg"
                alt="Call icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>

            <h3 className="mt-4 text-xl font-bold text-white">
              Call Tracking &amp; Sentiment
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-violet-200">
              Real-time voice intelligence that converts conversations into
              actionable engineering tasks.
            </p>

            <ul className="mt-5 space-y-2.5">
              {["Auto-Transcription", "Sentiment Mapping", "CRM Sync"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-violet-100"
                  >
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-violet-300"
                    />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Card 3 */}
          <div className="group overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
              <Image
                src="/icons/account-tree.svg"
                alt="Branch icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#111827]">
              Workflow Automations
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
              Eliminate the mundane. We connect disparate legacy systems into a
              singular, fluid stream.
            </p>

            <div className="relative mt-4 h-28 overflow-hidden rounded-xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAGMsHkIICo7v5qZijo_JiFSj5Rst3-g6HhFPvEUYmqgtpbCSV5ldS5owbWFYvb3X0p-1EOcZMcCBvf2ZvN3ygTGmsV8Og1E8364Cn7-6rRTA4uKS4htNFeo7i_YOqIyph3HfBfKAgmAf-cvO22rPKczCsNTLoPPB2KeumRJAQ13YsnBIlquHz_cO89YJQ6-ghbCkExF4erEK90_0NZVEXs1gZqUt6RDGSTaOilIFY4moYA9jldcoQnueRpnfbEpydtxVn01Ldy6k"
                alt="Workflow visual"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition duration-500 ease-out"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm md:col-span-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-start">
              {/* Left side */}
              <div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
                  <FileText size={20} className="text-indigo-600" />
                </div>

                <h3 className="mt-4 text-xl font-bold text-[#111827]">
                  Document Processing
                </h3>

                <p className="mt-2 max-w-md text-sm leading-relaxed text-[#6b7280]">
                  Intelligent OCR and data extraction for complex technical
                  drawings, blueprints, and regulatory compliance filings.
                </p>

                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-800"
                >
                  Review Technical Specs
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 10L10 2M10 2H4M10 2V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              {/* Right side: old Card 5 */}
              <div className="rounded-2xl border border-[#eef2f7] bg-[#f8fafc] p-5 min-h-[240px] flex flex-col justify-between">
                <div className="mt-1 flex flex-col gap-3">
                  {[75, 50, 62].map((w, i) => (
                    <div
                      key={i}
                      className="h-3 rounded-full bg-indigo-100"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>

                <div className="mt-5 flex gap-2">
                  {[
                    { src: "/icons/data-bi.svg", alt: "Data BI" },
                    {
                      src: "/icons/legacy-modernization.svg",
                      alt: "Legacy Modernization",
                    },
                  ].map((icon) => (
                    <div
                      key={icon.src}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#e5e7eb] bg-white"
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
