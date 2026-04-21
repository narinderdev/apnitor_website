"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FunctionalPillarsSection() {
  return (
    <section className="bg-[#f3f4f6] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[30px] font-bold leading-tight tracking-[-0.03em] text-[#111827] md:text-[54px]">
            Functional Pillars
          </h2>
          <p className="mx-auto mt-2 max-w-[760px] text-[18px] leading-[1.6] text-[#475569]">
            Integrated modules for total operational mastery.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Accounts Receivable */}
          <div className="rounded-[24px] bg-white p-10 shadow-[0_0_0_1px_rgba(15,23,42,0.04)] lg:col-span-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef2f7]">
              <Image
                src="/icons/accounts-receivable.svg"
                alt="Accounts Receivable"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.03em] text-[#111827] md:text-[30px]">
              Accounts Receivable
            </h3>

            <p className="mt-4 max-w-[660px] text-[16px] leading-[1.65] text-[#4b5563] md:text-[17px]">
              Automate credit lifecycle management and accelerate cash
              conversion cycles with AI-driven reconciliation models.
            </p>

            <div className="mt-28">
              <Link
                href="#"
                className="inline-flex items-center gap-4 text-[16px] font-semibold text-[#0b4aa6] transition hover:text-[#083d91]"
              >
                Optimize Flow
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Accounts Payable */}
          <div className="rounded-[24px] bg-[#0b4fb4] p-10 text-[#B8CCFF] shadow-[0_14px_36px_rgba(15,23,42,0.10)] lg:col-span-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Image
                src="/icons/accounts-payable.svg"
                alt="Accounts Payable"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.03em] text-[#B8CCFF] md:text-[26px]">
              Accounts Payable
            </h3>

            <p className="mt-4 max-w-[320px] text-[16px] leading-[1.6] text-white/80">
              Zero-touch invoice processing with multi-entity tax compliance
              built into the core logic.
            </p>

            <div className="mt-10 overflow-hidden rounded-[14px]">
              <div className="relative h-[128px] w-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhlVnf8eJo39V1-6RCIg00dG3da2zcowBfCxM5BTJ0waYzr6GOcU8_DbDIoptgAXpnifS617_4VR_SBT9S-G4fRbcxEl40gXwrB-S2hwkMbUUbZcKliH-k6g4Zpic3BQosGf5Jp-sc-Uu-s8puLR7YBPVrAOMt4Iycgx5zlFFLL9rbCapSQiRfE0gPqpHrUdrYzLlpcfbfmhYh2zXjnX4g7pe7SoiY107aJx0vYC10HPXFxRJMsyMJVj_XNKhgFEur7-OkDWVtFvM"
                  alt="Accounts payable illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Enterprise Asset Management */}
          <div className="rounded-[24px] bg-[#694bb0] p-10 text-white shadow-[0_14px_36px_rgba(15,23,42,0.10)] lg:col-span-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/14">
              <Image
                src="/icons/enterprise-asset-management.svg"
                alt="Enterprise Asset Management"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>

            <h3 className="mt-8 text-[24px] font-semibold leading-[1.15] tracking-[-0.03em] text-white md:text-[28px]">
              Enterprise Asset
              <br />
              Management
            </h3>

            <p className="mt-6 max-w-[320px] text-[16px] leading-[1.65] text-white/75">
              Predictive maintenance scheduling and lifecycle tracking for
              mission-critical infrastructure.
            </p>
          </div>

          {/* Fleet Management */}
          <div className="rounded-[24px] bg-[#e6eaee] p-10 shadow-[0_0_0_1px_rgba(15,23,42,0.04)] lg:col-span-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/60">
              <Image
                src="/icons/fleet-management.svg"
                alt="Fleet Management"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.03em] text-[#111827] md:text-[24px]">
              Fleet Management
            </h3>

            <p className="mt-4 max-w-[320px] text-[16px] leading-[1.6] text-[#4b5563]">
              Real-time telemetry integration and route optimization for
              distributed logistical networks.
            </p>
          </div>

          {/* Bill Of Materials */}
          <div className="rounded-[24px] bg-white p-10 shadow-[0_0_0_1px_rgba(15,23,42,0.04)] lg:col-span-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3edff]">
              <Image
                src="/icons/bill-of-materials.svg"
                alt="Bill of Materials"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.03em] text-[#111827] md:text-[24px]">
              Bill of Materials
            </h3>

            <p className="mt-4 max-w-[320px] text-[16px] leading-[1.6] text-[#4b5563]">
              Multi-level BOM hierarchies with dynamic cost-rollups and
              engineering change order (ECO) tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}