"use client";

import Image from "next/image";
import { ArrowRight, LineChart } from "lucide-react";

export default function DataBISection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fb] mt-14 px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      {/* soft curved background */}
      <div className="pointer-events-none absolute inset-x-0 top-[32%] -z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#dbe3ea"
            fillOpacity="0.8"
            d="M0,224L80,213.3C160,203,320,181,480,165.3C640,149,800,139,960,154.7C1120,171,1280,213,1360,234.7L1440,256V320H0Z"
          ></path>
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-[1220px] items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
        {/* Left Content */}
        <div className="max-w-[620px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#e6ddff] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#6c4fd3]">
            <span>Intelligence Layer</span>
          </div>

          <h1 className="mt-8 text-[56px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#111827] md:text-[72px]">
            <span className="block">Data, BI &</span>
            <span className="block bg-gradient-to-r from-[#0b4aa6] to-[#6c4fd3] bg-clip-text text-transparent">
              Dashboards
            </span>
          </h1>

          <p className="mt-8 max-w-[600px] text-[20px] leading-[1.6] text-[#475569]">
            Transform raw organizational streams into strategic assets. We
            architect high-performance data ecosystems that drive
            decision-making precision.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button className="inline-flex h-[56px] items-center justify-center rounded-[14px] bg-[#0b4aa6] px-8 text-[16px] font-semibold text-white transition hover:bg-[#083d91]">
              Explore Capabilities
            </button>

            <button
              className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#0b4aa6] transition hover:gap-3"
              onClick={() => router.push("/portfolio")}
            >
              View Case Studies
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[420px] w-full max-w-[600px] overflow-hidden rounded-[28px] bg-[#07111f] shadow-[0_30px_70px_rgba(15,23,42,0.14)] md:h-[580px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,74,166,0.15),transparent_60%)]" />

            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMX4w2GNK51Z_FX-WLtpH_-5_Rnc3mXFhf3W7MQ2QYpy55wfFucDSeZDeHAFNHYJyD7723ahjCzp44f3zBZ8CIdvT8z0EC64Ka3SqszojqI_PBOpXXxZo_ip12tFwwwhb_9S5idjMDKMX_AgW2Aa8iF9t473e0-L-SzS3amFFXxiw36NGXf7GCURoOk0YrnblG7I0SrEGNM4CFY42R2gEW2nQBTi941oLEhsECKzz_WUKLfzTdF-2f3-1130vOaOaoyWpMpKFFve0"
              alt="Data dashboard visualization"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating card */}
          <div className="absolute bottom-[-20px] left-0 flex w-[200px] items-center gap-4 rounded-[16px] bg-white p-4 shadow-[0_15px_35px_rgba(15,23,42,0.12)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#e6ddff]">
              <LineChart className="h-5 w-5 text-[#6c4fd3]" />
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                System Health
              </div>
              <div className="text-[12px] font-semibold text-[#111827]">
                Optimal Flow
              </div>

              <div className="mt-2 h-[6px] w-full rounded-full bg-[#e5e7eb]">
                <div className="h-[6px] w-[70%] rounded-full bg-[#6c4fd3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
    