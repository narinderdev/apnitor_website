"use client";

import Image from "next/image";
import { LayoutGrid, Zap, Compass, CircleCheck, Pencil } from "lucide-react";

export default function EngineeringPhilosophySection() {
  return (
    <section className="bg-[#eef0f3] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Heading */}
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="text-[30px] font-semibold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[44px]">
            Our Engineering Philosophy
          </h2>

          <p className="mx-auto mt-6 max-w-[920px] text-[18px] leading-[1.55] text-[#475569] md:text-[18px]">
            We don&apos;t just build websites; we architect digital systems. Our
            focus is on the intersection of aesthetic luxury and technical
            precision.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Enterprise Dashboards */}
          <div className="overflow-hidden rounded-[32px] border border-[#e5e7eb] bg-[#f8f8f8] lg:col-span-8">
            <div className="grid h-full grid-cols-1 md:grid-cols-[1.08fr_0.92fr]">
              <div className="p-8 md:p-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#e9eef7]">
                  <LayoutGrid
                    className="h-6 w-6 text-[#0b4aa6]"
                    strokeWidth={2.2}
                  />
                </div>

                <h3 className="mt-8 text-[20px] font-semibold tracking-[-0.03em] text-[#1f2937] md:text-[22px]">
                  Enterprise Dashboards
                </h3>

                <p className="mt-5 max-w-[430px] text-[14px] leading-[1.55] text-[#5b6472]">
                  Complexity distilled into clarity. We design portals that
                  handle massive datasets while remaining intuitively navigable.
                </p>
              </div>

              <div className="group relative min-h-[260px] overflow-hidden md:min-h-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxv0gtrZmPGhqi2c1re0U_QHXCLlppinCp892NejbMgK9nAqV1onBVMz3PnSWvIH12c7bz_LzfBdpUNtv7ZzIhncLjPTSe6Hszb7HXB6FEx5EmM6ewR8FegPUSXrt03tJTL6wIQDI-anyy8A_Hu73GlX7oV_G0UCNCrQF5JzKhxUgcYGKwgHEz1QdcbpZFShqcLC0Q50trhof31tJ4yYO4y8ed-x_7h6IjxvngAREUU_rIL6m-JAAXeawHczjn3xOrbsaHVFLbhoc"
                  alt="Enterprise dashboard preview"
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                />

                {/* Opaque layer by default, reveals image on hover */}
                <div className="absolute inset-0 bg-[#dfe4ea]/80 transition duration-500 ease-out group-hover:bg-[#dfe4ea]/15" />
              </div>
            </div>
          </div>

          {/* Next-Gen Performance */}
          <div className="rounded-[32px] bg-[#003b8b] p-10 lg:col-span-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/14">
              <Zap className="h-6 w-6 text-white" strokeWidth={2.2} />
            </div>

            <h3 className="mt-8 text-[20px] font-semibold tracking-[-0.03em] text-white md:text-[22px]">
              Next-Gen Performance
            </h3>

            <p className="mt-5 max-w-[320px] text-[14px] leading-[1.55] text-[#c4d7ff]">
              Vercel-optimized Next.js architecture ensuring sub-second page
              loads and superior SEO scores.
            </p>
          </div>

          {/* Clean Architecture */}
          <div className="rounded-[32px] bg-[#af91f3] p-10 lg:col-span-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#694bb033]">
              <Image
                src="/icons/architecture.svg"
                alt="Pencil icon"
                width={40}
                height={40}
                className="object-contain opacity-80"
              />
            </div>

            <h3 className="mt-8 text-[20px] font-semibold tracking-[-0.03em] text-[#45248b] md:text-[22px]">
              Clean Architecture
            </h3>

            <p className="mt-5 max-w-[330px] text-[14px] leading-[1.55] text-[#5b3da9]">
              Maintainable codebases using TypeScript and atomic design patterns
              for long-term scalability.
            </p>
          </div>

          {/* Customer-Facing Apps */}
          <div className="overflow-hidden rounded-[32px] border border-[#e5e7eb] bg-[#f8f8f8] lg:col-span-8">
            <div className="grid h-full grid-cols-1 md:grid-cols-[1.05fr_0.95fr]">
              <div className="p-10 md:p-12">
                <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#111827] md:text-[22px]">
                  Customer-Facing Apps
                </h3>

                <p className="mt-5 max-w-[430px] text-[14px] leading-[1.55] text-[#4b5563]">
                  Bespoke web experiences that drive conversion and user
                  retention through emotive UI and fluid interactions.
                </p>

                <ul className="mt-8 space-y-5">
                  <li className="flex items-center gap-3 text-[14px] font-semibold text-[#111827]">
                    <CircleCheck
                      className="h-5 w-5 text-[#0b4aa6]"
                      strokeWidth={2.2}
                    />
                    <span>React.js &amp; Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-3 text-[14px] font-semibold text-[#111827]">
                    <CircleCheck
                      className="h-5 w-5 text-[#0b4aa6]"
                      strokeWidth={2.2}
                    />
                    <span>Headless CMS Integration</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center p-8 md:p-10">
                <div className="flex h-[180px] w-full max-w-[360px] items-center justify-center rounded-[18px] bg-white">
                  <div className="relative flex items-center gap-5 text-[#d7dee9]">
                    <Image
                      src="/icons/pencil.svg"
                      alt="Pencil icon"
                      width={100}
                      height={100}
                      className="object-contain opacity-80"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
