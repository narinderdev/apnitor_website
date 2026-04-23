"use client";

import Image from "next/image";
import { CloudCog, TimerReset, Gauge, ArrowRight } from "lucide-react";

export default function PrecisionAtScaleSection() {
  return (
    <section className="bg-[#eef0f3] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[30px] font-bold tracking-[-0.04em] text-[#111827] md:text-[42px]">
            Precision at Scale
          </h2>
          <p className="mt-2 text-[20px] leading-[1.55] text-[#475569]">
            We don&apos;t just patch systems; we re-architect them for the next
            decade of growth.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Card 1 */}
          <div className="flex flex-col rounded-[24px] border border-[#e5e7eb] bg-[#f8f8f8] p-7 shadow-[0_8px_24px_rgba(15,23,42,0.04)] md:p-8 lg:col-span-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#e9eef7]">
              <CloudCog className="h-6 w-6 text-[#0b4aa6]" strokeWidth={2.2} />
            </div>

            <h3 className="mt-5 text-[24px] font-semibold text-[#111827]">
              Cloud-Ready Infrastructure
            </h3>

            <p className="mt-3 max-w-[700px] text-[16px] leading-[1.6] text-[#475569]">
              Migrate complex monoliths to microservices. Our &quot;Fluid
              Architecture&quot; approach ensures your legacy code thrives in
              AWS, Azure, or GCP environments with native scalability.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              <div className="flex items-center gap-2 text-[14px] font-semibold text-[#003b8b]">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#003b8b] text-[10px]">
                  ✓
                </span>
                KUBERNETES NATIVE
              </div>

              <div className="flex items-center gap-2 text-[14px] font-semibold text-[#003b8b]">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#003b8b] text-[10px]">
                  ✓
                </span>
                SERVERLESS OPTIMIZATION
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col rounded-[24px] bg-gradient-to-r from-[#694bb0] to-[#513297] p-7 shadow-[0_10px_24px_rgba(107,73,184,0.18)] md:p-8 lg:col-span-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/10">
              <TimerReset className="h-6 w-6 text-white" strokeWidth={2.2} />
            </div>

            <h3 className="mt-6 text-[22px] font-semibold text-white">
              Minimal Downtime
            </h3>

            <p className="mt-4 text-[15px] leading-[1.6] text-[#e6ddff]">
              Parallel execution and blue-green deployments ensure your business
              remains operational during every stage of the transition.
            </p>

            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="text-[32px] font-semibold tracking-[-0.05em] text-white/25">
                99.9%
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-[24px] border border-[#e5e7eb] bg-[#f8f8f8] p-7 shadow-[0_8px_24px_rgba(15,23,42,0.04)] md:p-8 lg:col-span-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#eef3fb]">
              <Gauge className="h-6 w-6 text-[#0b4aa6]" strokeWidth={2.2} />
            </div>

            <h3 className="mt-6 text-[22px] font-semibold text-[#111827]">
              Performance Boost
            </h3>

            <p className="mt-4 text-[15px] leading-[1.6] text-[#475569]">
              Experience up to 40% improvement in processing speeds by stripping
              away technical debt and optimizing database queries.
            </p>

            <div className="mt-6">
              <div className="h-[6px] w-full rounded-full bg-[#dfe3ea]">
                <div className="h-[6px] w-[76%] rounded-full bg-[#0b4aa6]" />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="overflow-hidden rounded-[24px] border border-[#e5e7eb] bg-[#f8f8f8] shadow-[0_8px_24px_rgba(15,23,42,0.04)] lg:col-span-8">
            <div className="grid h-full grid-cols-1 md:grid-cols-[1fr_0.95fr]">
              <div className="flex flex-col justify-center p-7 md:p-8">
                <h3 className="text-[22px] font-semibold text-[#111827]">
                  Risk Mitigation Framework
                </h3>

                <p className="mt-4 max-w-[420px] text-[15px] leading-[1.6] text-[#475569]">
                  Our proprietary diagnostic tool scans millions of lines of
                  code to identify dependencies before a single line is changed.
                </p>

                <button className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#0b4aa6] transition hover:gap-3">
                  Learn about FluidShield™
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="relative min-h-[220px] overflow-hidden md:min-h-[260px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD96HnJKme77j3xKsnMkWu3Ww9IqgEF5ZocH2O3tF50jwBQAUq3M8K1bFJQqosY5ustSAPNYYx5Tju-U_2J1OrFe11sv9Qe3Y5OL2Nj3-xfFNh1zMZJK4-W769CR7qutzyNVdGjwWw4eF7AiJtdQ0rAPPCSAD_tGs60c5YbST2r0cq8W2Nj01DRz7-HhjfXQeeh9dNTjegXJfwbSeX8xKSVhwie3bS8Bgk5m9W8VQj2gDD1fIE1OMYDlxFkvIz6WYdaVIZH2N2N29U"
                  alt="Server infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
