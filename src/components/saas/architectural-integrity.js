"use client";

import Image from "next/image";

export default function ArchitecturalIntegrity() {
  return (
    <section className="bg-[#f2f4f6] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        {/* Heading */}
        <div className="max-w-[720px]">
          <h2 className="text-[30px] font-bold tracking-[-0.03em] text-[#111827] md:text-[42px]">
            Architectural Integrity
          </h2>
          <p className="mt-2 text-[18px] leading-[1.6] text-[#475569]">
            Four core pillars that define our SaaS development philosophy:
            speed, security, and absolute reliability.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Row 1 - Left */}
          <div className="rounded-[24px] bg-white p-8 shadow-[0_0_0_1px_rgba(15,23,42,0.04)] lg:col-span-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef2f7]">
              <Image
                src="/icons/multi-tenant.svg"
                alt="Multi-tenant Architecture"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.02em] text-[#111827]">
              Multi-tenant Architecture
            </h3>

            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.65] text-[#4b5563]">
              Efficient data isolation and resource sharing designed for
              hyper-growth. Each client gets a private-cloud feel with the
              efficiency of shared core infrastructure.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#eef1f5] px-4 py-1.5 text-[13px] font-medium text-[#334155]">
                Logic Isolation
              </span>
              <span className="rounded-full bg-[#eef1f5] px-4 py-1.5 text-[13px] font-medium text-[#334155]">
                Row-level Security
              </span>
            </div>
          </div>

          {/* Row 1 - Right */}
          <div className="rounded-[24px] bg-white p-8 shadow-[0_0_0_1px_rgba(15,23,42,0.04)] lg:col-span-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f2eef9]">
              <Image
                src="/icons/billing.svg"
                alt="Subscription Billing"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.02em] text-[#111827]">
              Subscription Billing
            </h3>

            <p className="mt-4 max-w-[540px] text-[16px] leading-[1.65] text-[#4b5563]">
              Sophisticated revenue management engines supporting tiered
              pricing, usage-based metering, and complex global tax compliance
              out of the box.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#eef1f5] px-4 py-1.5 text-[13px] font-medium text-[#334155]">
                Stripe Integration
              </span>
              <span className="rounded-full bg-[#eef1f5] px-4 py-1.5 text-[13px] font-medium text-[#334155]">
                Automated Invoicing
              </span>
            </div>
          </div>

          {/* Row 2 - Left Small */}
          <div className="rounded-[24px] bg-white p-8 shadow-[0_0_0_1px_rgba(15,23,42,0.04)] lg:col-span-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef2f7] hover:bg-[]">
              <Image
                src="/icons/rbac.svg"
                alt="RBAC Controls"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.02em] text-[#111827]">
              RBAC Controls
            </h3>

            <p className="mt-4 max-w-[300px] text-[16px] leading-[1.65] text-[#4b5563]">
              Granular permission structures allowing for hierarchical
              organizational management with SSO and MFA support.
            </p>
          </div>

          {/* Row 2 - Right Wide Blue */}
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-[#003b8b] to-[#1252b3] p-8 shadow-[0_16px_32px_rgba(15,23,42,0.12)] lg:col-span-8">
            <div className="relative z-10">
              <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-white">
                Real-time Analytics
              </h3>

              <p className="mt-4 max-w-[470px] text-[16px] leading-[1.65] text-white/85">
                Proprietary telemetry engines that turn platform activity into
                actionable business intelligence for your tenants.
              </p>
            </div>

            <div className="pointer-events-none absolute right-[-8px] top-1/2 -translate-y-1/2">
              <Image
                src="/icons/monitoring.svg"
                alt="Monitoring"
                width={220}
                height={220}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
