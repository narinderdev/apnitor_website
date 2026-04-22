"use client";

import Image from "next/image";
import { Shield, CircleCheck } from "lucide-react";

export default function EngineeredVersatilitySection() {
  return (
    <section className="bg-[#f7f9fb] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="max-w-[760px]">
          <h2 className="text-[44px] font-semibold leading-[0.95] tracking-[-0.04em] text-[#0b4aa6] md:text-[56px]">
            Engineered Versatility.
          </h2>

          <p className="mt-5 max-w-[760px] text-[20px] leading-[1.55] text-[#475569]">
            We don&apos;t just build apps; we architect digital environments
            that adapt to any screen size or operating system.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Card 1 */}
          <div className="rounded-[28px] border border-[#e5e7eb] bg-[#f8f8f8] p-8 lg:col-span-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-[24px] font-semibold text-[#0b4aa6]">
                  Flutter Native
                </h3>

                <h4 className="mt-6 text-[26px] font-semibold text-[#111827]">
                  Uncompromising UI Fidelity
                </h4>

                <p className="mt-4 max-w-[600px] text-[16px] leading-[1.6] text-[#475569]">
                  Pixel-perfect rendering and ultra-smooth animations. Flutter
                  allows us to create beautiful, natively compiled applications
                  from a single codebase.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["DART", "SKIA ENGINE", "IOS/ANDROID"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#e5e7eb] px-3 py-1.5 text-[12px] font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[28px] bg-[#1252b3] p-8 lg:col-span-4">
            <h3 className="text-[24px] font-semibold text-white">
              React Native
            </h3>

            <p className="mt-4 text-[16px] text-[#c4d7ff] leading-[1.6]">
              Leveraging the power of the most popular web ecosystem to build
              robust, scalable mobile platforms with shared logic.
            </p>

            <div className="mt-6 border-t border-white/15 pt-6">
              <p className="text-[14px] font-semibold text-white">
                Key Benefit:
              </p>
              <p className="mt-2 text-[14px] text-[#c4d7ff]">
                30% faster time-to-market for cross-platform releases.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-[28px] bg-[#7052be] p-8 lg:col-span-4">
            <h3 className="text-[24px] font-semibold text-white">
              Secure APIs
            </h3>

            <p className="mt-4 text-[16px] text-[#e6dcff] leading-[1.6]">
              End-to-end encryption and OAuth 2.0 integration come standard.
            </p>

            <div className="mt-6 space-y-3">
              {["JWT AUTHENTICATION", "DATA ENCRYPTION"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white"
                >
                  • {item}
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 */}
          <div className="overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-[#f8f8f8] lg:col-span-8">
            <div className="grid h-full grid-cols-1 md:grid-cols-[1.05fr_0.95fr]">
              <div className="p-8">
                <h3 className="text-[24px] font-semibold text-[#111827]">
                  Sensory UX Design
                </h3>

                <p className="mt-4 text-[16px] text-[#475569] leading-[1.6]">
                  We focus on micro-interactions that make apps feel alive. Haptic feedback, gesture-based navigation, and intelligent transitions.
                </p>
              </div>

              <div className="group relative min-h-[200px] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3MLbllBD7G54ykbKB2PozW7MPN1mOZhTW5IYVGAc77S4ms9yGBUJvTdkmLzdMe1gzA3D-i3YZCGPqtU2sbBbi_Up9_QwZI4C-wz1QlqnHLguMatLOTuTaHmpwDs0IkHKZ3wZtNlEPewAsxltt47U2uNNsS77uCTfEcbjJXoYF8665v4MsVv7s-nrKiJZm9dame-DCUVH6AacNuFxvwgSR7jUJRIGKsSA-u9U46dHG4nYmc0_HfnSDF4x8qt9y2dMXTJ5-REK8Tm8"
                  alt=""
                  fill
                  className="object-cover transition group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#eef0f3]/75 group-hover:bg-[#eef0f3]/10 transition" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
