"use client";

import Image from "next/image";
import { CircleCheck } from "lucide-react";

export default function PrecisionMandateSection() {
  return (
    <section className="bg-[#f2f4f6] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-[1110px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left visual */}
        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="relative overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <div className="relative h-[420px] w-full md:h-[600px]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsns08OjDpHDTsSEdSH8cx9eUrn36Q0rxKFEAahVxBo7hpXdgEJPPmiFVr8iO7GAfeRsQ3Kcqm8uKPimtPfmKgOrmpAa7Jm11UHHeJHly-XEmKlMat5VZ1rzXJXZQZSEPRBeUErRcT0JHnS8suk4bJ8aATCU0KPvp4ojU0AgIP-unexBuZ6bYmKTLu0XcBI9IQGeegbufIp0rrsxT5ELkvxdZXvUda2ShTvQLkqUA2z8c00RAPRcAW9URG2eqajg-vMgo84-9Nl00"
                alt="Team reviewing dashboard insights"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Floating stat card */}
          <div className="absolute right-[-10px] top-[-22px] rounded-[18px] bg-[#0b4aa6] px-8 py-6 md:right-[-24px] md:top-[-24px]">
            <div className="text-[24px] font-semibold leading-none tracking-[-0.05em] text-white md:text-[32px]">
              99.9%
            </div>
            <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#d4e4ff]">
              Pipeline Reliability
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="max-w-[720px]">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-[#6c4fd3]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6c4fd3]">
              The Precision Mandate
            </span>
          </div>

          <h2 className="mt-4 text-[34px] font-semibold leading-[0.96] tracking-[-0.05em] text-[#111827] md:text-[50px]">
            Decisions driven by
            <br />
            evidence, not intuition.
          </h2>

          <p className="mt-10 max-w-[760px] text-[16px] leading-[1.6] text-[#475569]">
            In a volatile market, the speed of your feedback loop is your
            greatest competitive advantage. Fluid Engineering bridges the gap
            between infrastructure and insight, providing the clarity needed to
            navigate complexity with confidence.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4">
              <CircleCheck
                className="mt-1 h-4 w-4 shrink-0 text-[#0b4aa6]"
                strokeWidth={2.2}
              />
              <div>
                <h3 className="text-[16px] font-semibold text-[#111827]">
                  Data Democratization
                </h3>
                <p className="mt-1 text-[14px] leading-[1.6] text-[#475569]">
                  Self-service portals that empower every department with
                  reliable data.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CircleCheck
                className="mt-1 h-4 w-4 shrink-0 text-[#0b4aa6]"
                strokeWidth={2.2}
              />
              <div>
                <h3 className="text-[16px] font-semibold text-[#111827]">
                  Governance &amp; Security
                </h3>
                <p className="mt-1 text-[14px] leading-[1.6] text-[#475569]">
                  SOC2 compliant architectures ensuring your data assets are
                  always protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}