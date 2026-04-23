"use client";

import Image from "next/image";
import { ArrowRight, RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LegacyModernizationHero() {
    const router = useRouter();
    
  return (
    <section className="relative overflow-hidden bg-[#eef0f3] px-6 py-20 mt-14 md:px-10 lg:px-16 xl:px-24">
      {/* Curved layered background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main curve */}
        <div
          className="absolute left-1/2 top-[-120px] h-[520px] w-[1400px] -translate-x-1/2 rounded-[50%] blur-[2px]"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 40%, rgba(223,229,241,0.95) 0%, rgba(223,229,241,0.7) 40%, rgba(238,240,243,0) 75%)",
          }}
        />

        {/* Secondary curve for depth */}
        <div
          className="absolute left-1/2 top-[140px] h-[420px] w-[1200px] -translate-x-1/2 rounded-[50%] opacity-70 blur-[2px]"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 50%, rgba(223,229,241,0.6) 0%, rgba(238,240,243,0) 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-[1220px] items-center gap-14 lg:grid-cols-[1fr_1.02fr]">
        {/* Left content */}
        <div className="max-w-[620px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ddd0ff] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#432a87]">
            <RefreshCcw className="h-3.5 w-3.5" strokeWidth={2.2} />
            <span>System Evolution</span>
          </div>

          <h1 className="mt-8 text-[58px] font-semibold leading-[0.92] tracking-[-0.05em] text-[#111827] md:text-[76px]">
            <span className="block">Legacy</span>
            <span className="block bg-gradient-to-r from-[#0b4aa6] to-[#6c4fd3] bg-clip-text text-transparent">
              Modernization
            </span>
          </h1>

          <p className="mt-8 max-w-[640px] text-[20px] leading-[1.6] text-[#475569]">
            Transform aging infrastructure into agile, cloud-native ecosystems.
            We rewrite the rules of your digital foundation with surgical
            precision and zero operational disruption.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button className="inline-flex h-[58px] items-center justify-center gap-3 rounded-[16px] bg-[#0b4aa6] px-8 text-[16px] font-semibold text-white transition hover:bg-[#083d91]">
              Start Your Migration
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="inline-flex h-[58px] items-center justify-center rounded-[16px] bg-[#f4f4f5] px-8 text-[16px] font-semibold text-[#0b4aa6] transition hover:bg-[#e7e7ea]" onClick={() => router.push('/portfolio')}>
              View Case Studies
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[430px] w-full max-w-[610px] overflow-hidden rounded-[28px] bg-[#07111f] shadow-[0_30px_70px_rgba(15,23,42,0.14)] md:h-[600px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,74,166,0.12),transparent_62%)]" />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCktCYfbqYGHQ7i2xwP7igtXVFDM_vsQ076t843_QpGV7VPIFXH0QQjWzXP1BwzDWxzyTV-gGUx7AKM3Y01jYjNLbi37qAbqKT_-7SP1ljH6LEnWzYb-TKl4pOH3TBu_nRhzeuou5r0v19m5OCN5ISqGulZGBD1ZCdw6tSSdPxk-MuVNkrY781URbPCg_VMlknM_06-_jbUCVz4nOQn-7yuaGSw0rfbZCnYIo4NR6U1juXI0RKRRDfOx8UXX5JexSZVAx4kznMPriw"
              alt="Cloud infrastructure visualization"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}