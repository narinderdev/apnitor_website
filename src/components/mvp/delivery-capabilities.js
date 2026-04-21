"use client";

import Image from "next/image";
import {
  SearchCheck,
  Code2,
  Layers3,
  Rocket,
  CircleCheck,
  MonitorSmartphone,
  Database,
  Cloud,
  Shield,
  Boxes,
} from "lucide-react";

export default function DeliveryCapabilitiesSection() {
  return (
    <section className="bg-[#eef0f3] px-6 py-16 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
        <div className="rounded-[30px] border border-black/4 bg-[#f7f7f8] p-10 shadow-[0_2px_0_rgba(15,23,42,0.02),0_8px_24px_rgba(15,23,42,0.04)] lg:col-span-8">
          <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SearchCheck className="h-8 w-8 text-[#6b50d8]" strokeWidth={2.2} />

              <h3 className="mt-10 text-[26px] font-semibold tracking-[-0.03em] text-[#0f172a] sm:text-[34px]">
                Discovery &amp; Roadmap
              </h3>

              <p className="mt-6 max-w-[440px] text-[18px] leading-[1.65] text-[#334155]">
                We strip away the noise to identify your core value
                proposition. Our strategic sessions define a lean,
                high-impact roadmap for your initial release.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-3 text-[16px] font-semibold text-[#0f172a]">
                  <CircleCheck className="h-5 w-5 text-[#0b4aa6]" strokeWidth={2.2} />
                  <span>Competitive Analysis</span>
                </div>

                <div className="flex items-center gap-3 text-[16px] font-semibold text-[#0f172a]">
                  <CircleCheck className="h-5 w-5 text-[#0b4aa6]" strokeWidth={2.2} />
                  <span>Tech Stack Selection</span>
                </div>
              </div>
            </div>

            <div className="relative h-[240px] overflow-hidden rounded-[24px] sm:h-[300px] lg:mt-8">
              <Image
                src="/discovery-team.png"
                alt="Team discussing roadmap in a strategy session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="rounded-[30px] border border-black/4 bg-[#f7f7f8] p-10 shadow-[0_2px_0_rgba(15,23,42,0.02),0_8px_24px_rgba(15,23,42,0.04)] lg:col-span-4">
          <Code2 className="h-8 w-8 text-[#6b50d8]" strokeWidth={2.2} />

          <h3 className="mt-10 text-[26px] font-semibold tracking-[-0.03em] text-[#0f172a] sm:text-[34px]">
            Rapid Prototyping
          </h3>

          <p className="mt-6 max-w-[320px] text-[18px] leading-[1.65] text-[#334155]">
            Validation through motion. We create high-fidelity prototypes
            that look and feel like the finished product.
          </p>

          <div className="mt-10 flex h-[128px] items-center justify-center rounded-[18px] bg-[#eceef1] text-center text-[16px] font-semibold text-[#0b4aa6]">
            Interactive Sandbox
          </div>
        </div>

        <div className="rounded-[30px] border border-black/4 bg-[#f7f7f8] p-10 shadow-[0_2px_0_rgba(15,23,42,0.02),0_8px_24px_rgba(15,23,42,0.04)] lg:col-span-4">
          <Layers3 className="h-8 w-8 text-[#6b50d8]" strokeWidth={2.2} />

          <h3 className="mt-10 text-[26px] font-semibold tracking-[-0.03em] text-[#0f172a] sm:text-[34px]">
            UX-Friendly Builds
          </h3>

          <p className="mt-6 max-w-[340px] text-[18px] leading-[1.65] text-[#334155]">
            Building with the end-user in mind. We prioritize accessibility
            and intuitive flows in every line of code.
          </p>
        </div>

        <div className="rounded-[30px] bg-[#0d52b8] p-10 shadow-[0_16px_40px_rgba(13,82,184,0.24)] lg:col-span-8">
          <Rocket className="h-8 w-8 text-white" strokeWidth={2.2} />

          <h3 className="mt-10 text-[28px] font-semibold tracking-[-0.03em] text-white sm:text-[42px]">
            Scale-Ready Releases
          </h3>

          <p className="mt-6 max-w-[720px] text-[20px] leading-[1.65] text-[#bdd3ff]">
            We don&apos;t just build &quot;throwaway&quot; MVPs. Our engineering
            foundation is designed to scale from 100 to 100,000 users without
            a total rewrite.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-5 text-[#93b7f6]">
            <MonitorSmartphone className="h-8 w-8" strokeWidth={2.2} />
            <Database className="h-8 w-8" strokeWidth={2.2} />
            <Cloud className="h-8 w-8" strokeWidth={2.2} />
            <Shield className="h-8 w-8" strokeWidth={2.2} />
            <Boxes className="h-8 w-8" strokeWidth={2.2} />
          </div>
        </div>
      </div>
    </section>
  );
}
