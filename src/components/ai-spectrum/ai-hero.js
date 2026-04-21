"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AiFirstHero() {
  return (
    <section className="bg-[#f3f4f6] px-6 py-20 md:px-10 lg:px-16 xl:px-24 mt-14">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left content */}
        <div className="max-w-[620px]">
          <div className="mb-8 inline-flex items-center rounded-full bg-[#e7def8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#3d2b87]">
            ✦ AI-First Transformation
          </div>

          <h1 className="text-[58px] font-bold leading-[0.92] tracking-[-0.05em] text-[#111827] sm:text-[72px]">
            Precision
            <br />
            <span className="text-[#0b4aa6]">Intelligence</span> for
            <br />
            the Fluid
            <br />
            Enterprise.
          </h1>

          <p className="mt-10 max-w-[620px] text-[22px] leading-[1.65] text-[#334155]">
            We don't just add AI; we architect autonomous ecosystems. From
            generative assistants to deep-flow automation, we define the next
            era of precision in motion.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#"
              className="inline-flex h-[60px] items-center justify-center rounded-[16px] bg-[#0b4aa6] px-8 text-[18px] font-semibold text-white shadow-[0_14px_30px_rgba(11,74,166,0.18)] transition hover:bg-[#093d8c]"
            >
              Explore Capabilities
            </Link>

            <Link
              href="#"
              className="inline-flex h-[60px] items-center gap-3 px-4 text-[18px] font-semibold text-[#0b4aa6] transition hover:text-[#093d8c]"
            >
              View Blueprint
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[420px] w-full max-w-[580px] rounded-[22px] p-4 sm:h-[520px]">
            <div className="relative h-full w-full overflow-hidden rounded-[16px]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi7YlUc9AAY6tmnv8RoQ4KjbHzw_vQryEWm0W28YLoBwlJK3qvwpf8JMoPhXCeRtUHkCUS1ZjvXeoLuzAUdPtb_846-FtNyfOCfkherpdsF8uI3OA5ozobFg6pA127FYpBbMUFYkNTRSfGWAkbNxBAXM25RukZAiROjL4mUc8-K2MYhn3Cniy1GKka5gNHvpe6bY2p2skiEG_Zn4bTtVbvh2KV6Ylkrr1mwyeqbr0r8muweuSVSciVE4Ymwxly7S7FPX6pAq1ZWVc"
                alt="SaaS dashboard interface"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08131f]/20 via-transparent to-[#08131f]/15" />
            </div>
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-8 left-0 z-10 w-[320px] rounded-[22px] bg-white px-6 py-5 shadow-[0_20px_50px_rgba(15,23,42,0.14)] sm:left-[-24px]">
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8e9ea]">
                <Image
                  src="/icons/auto-graph.svg"
                  alt="Auto graph icon"
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <div className="text-[18px] font-bold text-[#2b2f38]">
                  99.99%
                </div>

                <p className="mt-1 text-[13px] leading-[1.45] text-[#4b5563] max-w-[220px]">
                  Uptime guarantee for high-availability enterprise clusters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
