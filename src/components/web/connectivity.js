"use client";

import { Shield, Boxes } from "lucide-react";

export default function ConnectivitySection() {
  return (
    <section className="bg-[#eef0f3] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1260px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left side */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[18px] bg-[#f2f4f6] px-6 py-7 text-center">
                <div className="text-[32px] font-semibold leading-none tracking-[-0.04em] text-[#0b4aa6]">
                  99.9%
                </div>
                <div className="mt-4 text-[14px] font-semibold uppercase tracking-[0.22em] text-[#334155]">
                  Uptime
                </div>
              </div>

              <div className="rounded-[18px] bg-[#f2f4f6] px-6 py-7 text-center">
                <div className="text-[32px] font-semibold leading-none tracking-[-0.04em] text-[#6c4fd3]">
                  &lt;1s
                </div>
                <div className="mt-4 text-[14px] font-semibold uppercase tracking-[0.22em] text-[#334155]">
                  Interaction
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[18px] bg-[#e6e8ea] px-8 py-8">
              <p className="max-w-[680px] text-[16px] italic leading-[1.65] text-[#334155]">
                “Fluid Engineering delivered a portal that didn&apos;t just meet
                our technical specs but redefined how our clients interact with
                our brand.”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-[#d9e1ee]" />
                <div>
                  <div className="text-[18px] font-semibold text-[#111827]">
                    Marcus Chen
                  </div>
                  <div className="mt-1 text-[14px] text-[#475569]">
                    CTO, Nexus Dynamics
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="max-w-[760px]">
            <h2 className="text-[32px] font-semibold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[44px]">
              Seamless Connectivity
            </h2>

            <p className="mt-6 max-w-[760px] text-[18px] leading-[1.65] text-[#334155]">
              Our web applications serve as the central hub for your entire
              ecosystem. We specialize in complex API orchestrations, real-time
              data streaming with WebSockets, and secure administrative control
              layers.
            </p>

            <div className="mt-12 space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center">
                  <Shield
                    className="h-4 w-4 text-[#6c4fd3]"
                    strokeWidth={2.2}
                  />
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#111827]">
                    Hardened Security
                  </h3>
                  <p className="mt-1 text-[16px] leading-[1.6] text-[#475569]">
                    RBAC, JWT authentication, and SOC2 compliant development
                    standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center">
                  <Boxes
                    className="h-4 w-4 text-[#0b4aa6]"
                    strokeWidth={2.2}
                  />
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#111827]">
                    API First
                  </h3>
                  <p className="mt-1 text-[16px] leading-[1.6] text-[#475569]">
                    Standardized REST and GraphQL interfaces for omnichannel
                    availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}