"use client";

import Image from "next/image";

const features = [
  {
    title: "Auto-scaling Microservices",
    description: "Decoupled components that scale independently based on demand.",
  },
  {
    title: "Zero-Trust Security",
    description: "Every request is validated, encrypted, and logged at the edge.",
  },
  {
    title: "Global Edge Delivery",
    description: "Sub-100ms latency for users anywhere on the planet.",
  },
];

export default function FluidAdvantageSection() {
  return (
    <section className="bg-[#f7f9fb] py-20 md:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 md:px-8 lg:grid-cols-[560px_minmax(0,1fr)]">
        {/* Left collage */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top left */}
          <div className="relative h-[272px] overflow-hidden rounded-[22px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9Y7jH62P54aG_vsLqAEiccKkFEu1V78Wa9C0ojGD3LFtBpO-LQbZuRYWie_VNGmqBtaqSlOxoHUKpFwJWnmnMobq9pP-pubMXa4Y8rx46L1T_KSarkoIF5ImeXZbbTJNXM6550qvUb15xk7LIcAQbfZZWBBuLQNQx_wgGhGvbgLNHW5COppVA2kvJ6leKaZjxWDWXAbc8zSBbXeukDGttHOxhbUNJbb7EfKT6aPykCZctXfUO7AlL9J18-HBrayVf7ATVzFDQiWw"
              alt="Server infrastructure"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Top right */}
          <div className="flex h-[208px] items-center justify-center rounded-[22px] bg-[#dfe7f2]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full">
              <Image
                src="/icons/saas-platforms.svg"
                alt="SaaS Platforms"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom left */}
          <div className="flex h-[192px] items-end rounded-[22px] bg-[#e7e4f2] p-6">
            <span className="text-[42px] font-extrabold leading-none tracking-[-0.04em] text-[#6c4fd3]">
              50ms
            </span>
          </div>

          {/* Bottom right */}
          <div className="-mt-16 relative h-[272px] overflow-hidden rounded-[22px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzNFhc0dv8--uSwk_e7Yyl21SZwHkDqop1LT1NWVk6WR0LguutpacIRtOUml6nMI7I35b-SVs_D84I9zHRgDS9wujuggah_yCpNVeX40nfcCnRUi8byZ8Of0vDMBxq9P0El3HhJl9oqNsGvx0xxODpC7JZkysKWzmYD9Twp6S2u4pTgagAm-5V4YLbTsny2eHsX68Vu_Ifh8Fm0Yedv69KyOZ_UV76vIZR4wNbaqwCJye2izDHO6evfDW8gGItT9ENcLGV9_luL6A"
              alt="Edge hardware"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="max-w-[650px]">
          <div className="text-[14px] font-semibold uppercase tracking-[0.28em] text-[#0b4aa6]">
            The Fluid Advantage
          </div>

          <h2 className="mt-6 text-[38px] font-bold leading-[0.96] tracking-[-0.04em] text-[#111827] md:text-[58px]">
            Engineered for the
            <br />
            <span className="text-[#6c4fd3]">Unpredictable.</span>
          </h2>

          <p className="mt-10 max-w-[640px] text-[20px] leading-[1.65] text-[#334155]">
            We don't just build for your current traffic. We build for the day
            your platform goes viral. Our serverless-first approach ensures
            infinite scalability without the overhead of manual cluster
            management.
          </p>

          <div className="mt-8 space-y-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dfe7f2]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#0b4aa6]"
                  >
                    <path
                      d="M4.5 10.5L8.2 14L15.5 6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-[20px] font-bold leading-tight text-[#111827]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[16px] leading-[1.6] text-[#475569]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}