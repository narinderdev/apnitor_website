"use client";

import Image from "next/image";
import { ArrowRight, Smartphone, Zap } from "lucide-react";

export default function MobileEcosystemsHero() {
  return (
    <section className="bg-[#eff2f7] px-6 py-20 md:px-10 lg:px-16 xl:px-24 mt-14">
      <div className="mx-auto grid max-w-[1220px] items-center gap-14 lg:grid-cols-[1fr_1.02fr]">
        {/* Left content */}
        <div className="max-w-[560px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#dccbff] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#432a87]">
            <Smartphone className="h-3.5 w-3.5" strokeWidth={2.2} />
            <span>Mobile Ecosystems</span>
          </div>

          <h1 className="mt-8 text-[44px] font-semibold leading-[0.92] tracking-[-0.05em] text-[#0f172a] md:text-[76px]">
            <span className="block text-[#0b4aa6]">Architecting</span>
            <span className="block bg-gradient-to-r from-[#6c4fd3] to-[#5b4ab8] bg-clip-text text-transparent">
              Fluid Apps.
            </span>
          </h1>

          <p className="mt-8 max-w-[620px] text-[18px] leading-[1.6] text-[#475569]">
            Bridging the gap between native performance and cross-platform
            efficiency. We build high-integrity mobile solutions using Flutter
            and React Native, secured by hardened APIs.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button className="inline-flex items-center justify-center gap-3 rounded-[16px] bg-[#0b4aa6] px-6 py-2 text-[16px] font-semibold text-white transition hover:bg-[#083d91]">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="inline-flex items-center justify-center rounded-[16px] px-6 py-2 text-[16px] font-semibold text-[#0b4aa6] transition hover:text-[#083d91]">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[420px] w-full max-w-[600px] overflow-visible rounded-[28px] md:h-[560px]">
            <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_center,rgba(11,74,166,0.18),transparent_65%)] blur-2xl" />

            <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#050812]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMBex_JC7F8LDlzQGMlLjDkA9N5fr6OvXsxzQbRnP0kn3OBGPZXGl7UGafxv71MzxWdWTjgTUrUSICJHra-cJDcighzaUhY6Ktifo5hbZXa_N8tj4kD9wY1gRTs5HuA0PjZXtSFJXiskJfT3XQsiQdyOcooeciOf2ZKNlTu6hpidd9g2XFR5lRZ781uCRdlnktUSDt-sabGaQ7mO3eBSL-mdOaoetI3ToKOstqw9RSo7CwWsTecgpKoIiGp_HXYBg9Lb25vJS-fls"
                alt="Mobile app interface preview"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 left-[-18px] z-10 w-[255px] rounded-[24px] bg-white px-6 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.14)]">
              <div className="flex items-center gap-4">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#cdb7ff] text-[#5a39b6]">
                  <Zap className="h-3 w-3" strokeWidth={2.4} />
                </div>

                <div className="text-[16px] font-semibold text-[#111827]">
                  99.9% Uptime
                </div>
              </div>

              <p className="mt-1 text-[14px] leading-[1.5] text-[#475569]">
                Our secure API architecture ensures consistent service delivery
                across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
