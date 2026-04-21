"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroVelocitySection() {
  return (
    <section className="mt-14 bg-[#f7f9fb] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex rounded-full px-1 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4fd3]">
            2-6 Week Delivery Cycle
          </div>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-[#111827] sm:text-6xl lg:text-7xl">
            Turn Vision into
            <br />
            <span className="bg-gradient-to-r from-[#003b8b] to-[#694bb0] bg-clip-text text-transparent">
              Velocity.
            </span>
          </h1>

          <p className="mt-10 max-w-[620px] text-[22px] leading-[1.55] text-[#374151]">
            High-fidelity MVP engineering that balances speed with technical
            excellence. We build production-ready software for startups and
            enterprise innovation labs.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#"
              className="inline-flex h-[58px] items-center justify-center rounded-[16px] bg-[#0b4aa6] px-8 text-[16px] font-semibold text-white transition hover:bg-[#083d91]"
            >
              Launch Your Project
            </Link>

            <Link
              href="#"
              className="inline-flex h-[58px] items-center gap-3 px-4 text-[16px] font-semibold text-[#111827] transition hover:text-[#0b4aa6]"
            >
              View Framework
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[420px] w-full max-w-[580px] overflow-hidden rounded-[22px] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:h-[520px]">
            <div className="relative h-full w-full overflow-hidden rounded-[22px]">
              <Image
                src="/bg_image.png"
                alt="Dashboard interface"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08131f]/20 via-transparent to-[#08131f]/15" />
            </div>
          </div>

          <div className="absolute -bottom-8 left-0 z-10 w-[320px] rounded-[22px] bg-white px-6 py-5 shadow-[0_20px_50px_rgba(15,23,42,0.14)] sm:left-[-24px]">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8e9ea] text-[#0b4aa6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Zm2.92 2.33H5v-.92l8.06-8.06.92.92L5.92 19.58ZM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.33a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.83Z" />
                </svg>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6c4fd3]">
                  Rapid Build
                </p>
                <div className="mt-1 text-[18px] font-bold text-[#2b2f38]">
                  21 Days Avg.
                </div>

                <p className="mt-2 max-w-[220px] text-[13px] leading-[1.45] text-[#4b5563]">
                  From discovery session to a functional production deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}