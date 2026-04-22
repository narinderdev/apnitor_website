// app/components/CloudDevopsHero.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CloudDevopsHero() {
  return (
    <section className="bg-[#f7f9fb] px-6 py-16 md:px-10 lg:px-20 xl:px-30 mt-14">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex rounded-full bg-[#b39af7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4b2ca3]">
            Expertise / Cloud & DevOps
          </div>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-[#111827] sm:text-6xl lg:text-7xl">
            Orchestrating
            <br />
            <span className="bg-gradient-to-r from-[#0d4db8] to-[#6a55d8] bg-clip-text text-transparent">
              Invisible
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#324bb8] to-[#6a55d8] bg-clip-text text-transparent">
              Resilience
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-9 text-[#374151]">
            Elevate your operational velocity. We architect secure, automated
            CI/CD pipelines and scalable infrastructure on AWS and Azure that
            grow as fast as your ambition.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#0b4aac] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#083d91]"
            >
              Explore Capabilities
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-2xl bg-[#eef1f5] px-8 py-4 text-base font-semibold text-[#0b4aac] transition hover:bg-[#e4e8ee]"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[420px] w-full max-w-[560px] overflow-hidden rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:h-[520px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALJb1XE-5XY6Ioh-gwP-kA6STuGxpnsPfPS3anF0irOuuIUGRpdTtyO5qLI3qrSor5YLHZ7ZF1djK_W8ZPP15ZtFJ0VCXhX6Qg8tQV6lRcD3yZR0OmznCt3yMbk5ukf-kURkAV4xIK7a9c25rtZEN8eutaiSI-r5F2juXQCj2pEwqYvACZN8Y4z44N5MFUOPmlM5kSRDT7O-cLDMwIQiqeR0k5zN9VpYr4Y8_cx9XSGB_1rB2FRmf5NBJ67hXu5_wJvCUMamdnpZ4"
              alt="Abstract cloud and data flow visualization"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
