"use client";

import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WebCtaSection() {
    const router = useRouter();
  return (
    <section className="bg-[#eef0f3] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1200px]">
        
        <div className="relative overflow-hidden bg-slate-950 rounded-[40px] bg-[#030b2b] px-8 py-20 text-center md:px-16">
          
          {/* Pattern Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(30deg, #003b8b 12%, transparent 12.5%, transparent 87%, #003b8b 87.5%, #003b8b),
                linear-gradient(150deg, #003b8b 12%, transparent 12.5%, transparent 87%, #003b8b 87.5%, #003b8b),
                linear-gradient(30deg, #003b8b 12%, transparent 12.5%, transparent 87%, #003b8b 87.5%, #003b8b),
                linear-gradient(150deg, #003b8b 12%, transparent 12.5%, transparent 87%, #003b8b 87.5%, #003b8b),
                linear-gradient(60deg, #694bb0 25%, transparent 25.5%, transparent 75%, #694bb0 75%, #694bb0),
                linear-gradient(60deg, #694bb0 25%, transparent 25.5%, transparent 75%, #694bb0 75%, #694bb0)
              `,
              backgroundSize: "80px 140px",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="mx-auto max-w-[720px] text-[30px] font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-[54px]">
              Ready to build the
              <br />
              future of the web?
            </h2>

            <p className="mx-auto mt-6 max-w-[640px] text-[16px] leading-[1.6] text-[#9fb4e0] md:text-[20px]">
              Let&apos;s discuss how our engineering team can translate your
              business logic into a fluid web experience.
            </p>

            <div className="mt-10">
              <button className="inline-flex items-center gap-3 rounded-[16px] bg-white px-6 py-3 text-[16px] font-semibold text-[#0f172a] shadow-md transition hover:translate-y-[-1px]" onClick={() => {router.push('/consultation')}}>
                Schedule a Blueprint Call
                <Calendar className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}