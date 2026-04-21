"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Box,
  ArrowLeftRight,
  Cloud,
  ChartNoAxesCombined,
  ArrowRight,
} from "lucide-react";

export default function ArchitecturalPillars() {
  return (
    <section className="bg-[#f2f4f6] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-[30px] font-bold leading-tight tracking-[-0.03em] text-[#111827] md:text-[42px]">
            Architectural Pillars
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[16px] leading-[1.6] text-[#475569]">
            Precision engineering for the modern cloud ecosystem.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:auto-rows-[280px]">
          {/* Card 1 */}
          <div className="h-full rounded-[28px] bg-white p-10 shadow-[0_10px_30px_rgba(15,23,42,0.06)] lg:col-span-8">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-6">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[18px] bg-[#f1f3f6]">
                  <Box className="h-6 w-6 text-[#0b4aa6]" strokeWidth={2.2} />
                </div>

                <span className="text-[12px] tracking-[0.24em] text-[#5b6474]">
                  01 / DOCKER
                </span>
              </div>

              <div className="mt-2">
                <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-[#0f274f] md:text-[22px]">
                  Immutable Infrastructure
                </h3>

                <p className="mt-2 max-w-[900px] text-[16px] leading-[1.7] text-[#334155]">
                  Eliminate 'it works on my machine'. We leverage Docker and
                  Kubernetes to ensure your applications run identically from
                  developer laptop to global production clusters.
                </p>

                <div className="mt-3 flex flex-wrap gap-3">
                  {["Kubernetes", "Containerization", "Microservices"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-xl bg-[#f1f3f5] px-4 py-1 text-[15px] font-semibold text-[#111827]"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-full rounded-[28px] bg-gradient-to-br from-[#6b4ec7] via-[#3848b5] to-[#0b4aa6] p-10 text-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] lg:col-span-4">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-6">
                <div className="flex h-12 w-12 items-center justify-center">
                  <ArrowLeftRight
                    className="h-6 w-6 text-white"
                    strokeWidth={2.2}
                  />
                </div>

                <span className="text-[12px] tracking-[0.24em] text-white/80">
                  02 / FLOW
                </span>
              </div>

              <div className="mt-2">
                <h3 className="text-[18px] font-semibold tracking-[-0.03em]">
                  CI/CD Mastery
                </h3>

                <p className="mt-2 max-w-[420px] text-[16px] leading-[1.7] text-white/90">
                  Continuous Integration and Delivery pipelines that automate
                  testing and security, reducing lead time from days to minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="h-full rounded-[28px] bg-white p-10 shadow-[0_10px_30px_rgba(15,23,42,0.06)] lg:col-span-4">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-6">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[18px] bg-[#f1f0f6]">
                  <Cloud className="h-6 w-6 text-[#6b4ec7]" strokeWidth={2.2} />
                </div>

                <span className="text-[12px] tracking-[0.24em] text-[#5b6474]">
                  03 / CLOUD
                </span>
              </div>

              <div className="mt-8">
                <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-[#111827]">
                  Multi-Cloud Agility
                </h3>

                <p className="mt-3 max-w-[420px] text-[16px] leading-[1.7] text-[#334155]">
                  Expertise across AWS and Azure, creating scalable deployments
                  that respond dynamically to traffic fluctuations.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative h-full overflow-hidden rounded-[28px] lg:col-span-8">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFWEAFpQ110K6vJsIxatgthIiGBM7aKoVkISN8kfXOOK-qzI1sqXvnns4Zq3wBhUJqioj4GCZC4F8bmCRAcLqC3sSWZpA7Su6KPtxoo0wkyYWr-v9kI_pYn0ub3J4wAjnhEzv19eDS8uQH5BjChQBmplBEbu4fZvoWtcFBgEmeRlqQatU9jP5z-7WhcPoHiCeJlG6mKDQBBL1hoGJiAG02QM1cjlPmNr6frnhMVlhTl9loJUVADnTzJfM3_afmIb8rYipZ8irNRjc"
              alt="Analytics dashboard background"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[#06121d]/72" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08131f]/88 via-[#08131f]/72 to-[#08131f]/78" />

            <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
              <div className="flex items-start justify-between gap-6">
                <div className="flex h-6 w-6 items-center justify-center">
                  <ChartNoAxesCombined
                    className="h-9 w-9 text-[#8fb5ff]"
                    strokeWidth={2.2}
                  />
                </div>

                <span className="text-[12px] tracking-[0.24em] text-white/70">
                  04 / SECURE
                </span>
              </div>

              <div className="mt-2 max-w-[720px]">
                <h3 className="text-[18px] font-semibold tracking-[-0.03em] md:text-[30px]">
                  Proactive Observability
                </h3>

                <p className="mt-5 text-[16px] leading-[1.7] text-white/90">
                  Real-time monitoring and automated threat detection integrated
                  directly into your infrastructure layer. We build for the
                  &quot;worst-case&quot; so it never happens.
                </p>

                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-4 text-[16px] font-semibold text-[#9bbcff] transition hover:text-white"
                >
                  Explore Monitoring Framework
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
