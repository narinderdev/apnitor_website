"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function SaasPlatformsHero() {
  return (
    <section className="bg-[#eae9f3] px-6 py-20 md:px-10 lg:px-16 xl:px-24 mt-14">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left content */}
        <div className="max-w-xl">
          <div className="mb-6 inline-flex rounded-full px-1 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4fd3]">
            Enterprise Solutions
          </div>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-[#111827] sm:text-6xl lg:text-7xl">
            Engineered
            <br />
            <span className="bg-gradient-to-r from-[#0c4cad] to-[#0c4cad] bg-clip-text text-transparent">
              SaaS Platforms
            </span>
          </h1>

          <p className="mt-10 max-w-[620px] text-[22px] leading-[1.55] text-[#374151]">
            Architecting the backbone of modern business. We build scalable,
            secure, and multi-tenant SaaS ecosystems that transform complexity
            into fluid digital experiences.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#"
              className="inline-flex h-[58px] items-center justify-center rounded-[16px] bg-[#0b4aa6] px-8 text-[16px] font-semibold text-white transition hover:bg-[#083d91]"
            >
              View Blueprint
            </Link>

            <Link
              href="#"
              className="inline-flex h-[58px] items-center gap-3 px-4 text-[16px] font-semibold text-[#111827] transition hover:text-[#0b4aa6]"
            >
              Technical Specs
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[420px] w-full max-w-[580px] rounded-[22px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:h-[520px]">
            <div className="relative h-full w-full overflow-hidden rounded-[16px] bg-[#08131f]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOPoNIff-Opwg_AdQ6T7Z8pkea__WHvR0lsFdrB2m3vaE6CmIf8DyquJ2SzOkJNYzP1kZhUCxUvfwW9AS5JTQKXFRhZwUTqWPTt87F_uNJwAY5LdWh-0D_NaUqAY_akrHdxsxPHU8k2d1f5Q6aPeW6CH2cFNeJ5gg2bps9VGNpzZjY3yZTSvz1Hnlr9afXJ_XqIHWk5Qqo5MDELJPIU-Hna5TN8-YUDxCORjOgP2kPYB0h-PUXB4_C7gNO7YfJubcHvQwd7UGnJfA"
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
