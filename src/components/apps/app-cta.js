"use client";

import { useRouter } from "next/navigation";

export default function FinalCtaBanner() {
  const router = useRouter();

  return (
    <section className="bg-[#f7f9fb] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1220px]">
        <div className="flex flex-col items-start justify-between gap-10 rounded-[36px] bg-gradient-to-r from-[#0b3f8a] to-[#083c8e] px-10 py-14 md:flex-row md:items-center md:px-16 md:py-16">
          {/* Left content */}
          <div className="max-w-[620px]">
            <h2 className="text-[32px] font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-[54px]">
              Ready to build your next{" "}
              <span className="text-[#a9c3ff]">Masterpiece?</span>
            </h2>

            <p className="mt-6 text-[16px] leading-[1.6] text-[#c7d6ff]">
              Join the industry leaders who trust Fluid Engineering for their
              most critical mobile initiatives.
            </p>
          </div>

          {/* Button */}
          <div className="shrink-0">
            <button
              className="inline-flex items-center justify-center rounded-[16px] bg-white px-6 py-3 text-[16px] font-semibold text-[#0b3f8a]"
              onClick={() => router.push("/consultation")}
            >
              Launch Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
