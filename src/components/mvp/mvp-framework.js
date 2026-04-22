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

export default function MvpFrameworkSection() {
  return (
    <section className="bg-[#eef0f3] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1120px]">
        {/* Heading */}
        <div className="max-w-[560px]">
          <h2 className="text-[40px] font-semibold leading-none tracking-[-0.04em] text-[#0f172a] md:text-[48px]">
            The MVP Framework
          </h2>
          <p className="mt-4 max-w-[520px] text-[22px] leading-[1.45] text-[#475569]">
            Our engineering methodology is designed for rapid iteration without
            compromising architectural integrity.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Top left large card */}
          <div className="rounded-[24px] border border-[#e4e7ec] bg-[#f8f8f8] p-6 shadow-[0_2px_10px_rgba(15,23,42,0.04)] md:col-span-8 md:p-7">
            <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.05fr]">
              <div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl">
                  <Image
                    src="/icons/search.svg"
                    alt="Search icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[22px]">
                  Discovery &amp; Roadmap
                </h3>

                <p className="mt-4 max-w-[360px] text-[14px] leading-[1.6] text-[#475569]">
                  We strip away the noise to identify your core value
                  proposition. Our strategic sessions define a lean, high-impact
                  roadmap for your initial release.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-[14px] font-semibold text-[#0f172a]">
                    <CircleCheck
                      className="h-4.5 w-4.5 text-[#0b4aa6]"
                      strokeWidth={2.2}
                    />
                    <span>Competitive Analysis</span>
                  </div>
                  <div className="flex items-center gap-3 text-[14px] font-semibold text-[#0f172a]">
                    <CircleCheck
                      className="h-4.5 w-4.5 text-[#0b4aa6]"
                      strokeWidth={2.2}
                    />
                    <span>Tech Stack Selection</span>
                  </div>
                </div>
              </div>

              <div className="relative h-[190px] overflow-hidden rounded-[18px] md:h-[210px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNAo-F568hbUB2CN_3XHKktZvwcClrHdUG7e0Jgy2tg83qQWt3jvOK6C-3aZSOvJxyWhwMFFsAs7QSSTvgiEowesMs435rGHII8Qk5rA8KBRBUpVDwkBbjUKJFffNzhBc8OdnzgOAzIEEg0uIjQK2eeRTO6qvdR_B-HpFKTFoy9Cig5TXvvHMxpSn2Whc5CVhrZpy7Ea-nj7Gu0d7fM7tKXBgO006UkOVb1OizyWACKhLaAE171u_yGqBXJbx6fvM9LRupYL6gkLE"
                  alt="Team discussing roadmap"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Top right */}
          <div className="rounded-[24px] border border-[#e4e7ec] bg-[#f8f8f8] p-6 shadow-[0_2px_10px_rgba(15,23,42,0.04)] md:col-span-4 md:p-7">
            <Image
              src="/icons/sdk.svg"
              alt="Sdk icon"
              width={40}
              height={40}
              className="object-contain"
            />

            <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[22px]">
              Rapid Prototyping
            </h3>

            <p className="mt-4 max-w-[260px] text-[14px] leading-[1.6] text-[#475569]">
              Validation through motion. We create high-fidelity prototypes that
              look and feel like the finished product.
            </p>

            <div className="mt-6 flex h-[80px] items-center justify-center rounded-[14px] bg-[#eceef1] text-[14px] font-semibold text-[#0b4aa6]">
              Interactive Sandbox
            </div>
          </div>

          {/* Bottom left */}
          <div className="rounded-[24px] border border-[#e4e7ec] bg-[#f8f8f8] p-6 shadow-[0_2px_10px_rgba(15,23,42,0.04)] md:col-span-4 md:p-7">
            <Layers3 className="h-7 w-7 text-[#6c4fd3]" strokeWidth={2.2} />

            <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.03em] text-[#0f172a] md:text-[22px]">
              UX-Friendly Builds
            </h3>

            <p className="mt-4 max-w-[280px] text-[14px] leading-[1.6] text-[#475569]">
              Building with the end-user in mind. We prioritize accessibility
              and intuitive flows in every line of code.
            </p>
          </div>

          {/* Bottom right large blue card */}
          <div className="rounded-[24px] bg-[#1252b3] p-6 md:col-span-8 md:p-7">
            <Rocket className="h-7 w-7 text-[#b9d1ff]" strokeWidth={2.2} />

            <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.03em] text-white md:text-[22px]">
              Scale-Ready Releases
            </h3>

            <p className="mt-4 max-w-[620px] text-[14px] leading-[1.65] text-[#b9d1ff]">
              We don&apos;t just build &quot;throwaway&quot; MVPs. Our
              engineering foundation is designed to scale from 100 to 100,000
              users without a total rewrite.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-[#9ec0ff]">
              <MonitorSmartphone className="h-5 w-5" />
              <Database className="h-5 w-5" />
              <Cloud className="h-5 w-5" />
              <Shield className="h-5 w-5" />
              <Boxes className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
