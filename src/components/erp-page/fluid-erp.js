"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FluidErpHero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-[#f3f4f6] px-6 py-20 md:px-10 lg:px-16 xl:px-24 mt-14">
      {/* soft curved background */}
      <div className="absolute inset-x-0 top-0 h-[220px] bg-[#eaf1f7]" />
      <div
        className="absolute left-0 top-0 h-[260px] w-full bg-[#eaf1f7]"
        style={{
          clipPath: "ellipse(80% 100% at 20% 0%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left content */}
        <div className="max-w-[560px]">
          <div className="mb-8 inline-flex rounded-full bg-[#e7def8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#3d2b87]">
            Enterprise Grade
          </div>

          <h1 className="text-[40px] font-extrabold leading-[0.92] tracking-[-0.05em] text-[#0b4aa6] sm:text-[62px]">
            Fluid ERP
            <br />
            Systems
          </h1>

          <p className="mt-10 max-w-[620px] text-[18px] leading-[1.65] text-[#334155]">
            A dynamic architectural core designed for the next generation of
            industrial scale. Orchestrate complex workflows with surgical
            precision and fluid adaptability.
          </p>

          <div className="mt-8">
            <button
              onClick={() => router.push("/consultation")}
              className="inline-flex items-center justify-center rounded-[16px] bg-[#0b4aa6] px-8 py-4 text-[18px] font-semibold text-white shadow-[0_14px_30px_rgba(11,74,166,0.18)] transition hover:bg-[#093d8c]"
            >
              Request Architecture Review
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[420px] w-full max-w-[610px] overflow-hidden rounded-[22px] shadow-[0_22px_55px_rgba(15,23,42,0.12)] sm:h-[500px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQx2OcTftO0qhK3SgCI0baVRKnw5VBR3hyrs62GCXRTfeCO8LFm5zLpdEI7HwL62anEmKBpV9fK0f7wm7sFt3g3qk3hmN6CSD9vj2JwLYwTNL1rFnOek0dYSYAecowj2REBjgchgJYCrPgFZjYcJgNsqh0pNrdPIom-IH3RonF7SJIhxk_oenZZBw6MqXouBEwHnFOgSorUCU0lja5Vd1MJl7uE1O9SNj06SSQs_184hIQJXL8m5trSBWGf4nC0Sh70WOmtJekdPw"
              alt="ERP systems control room"
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
