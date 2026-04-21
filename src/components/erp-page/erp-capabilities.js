"use client";

import Image from "next/image";

const pillars = [
  {
    icon: "/icons/immutable-reliability.svg",
    title: "Immutable Reliability",
    description:
      "Built on high-availability cloud architecture with 99.9% uptime guarantees for enterprise workloads.",
    color: "text-[#0b4aa6]",
  },
  {
    icon: "/icons/multi-tenant.svg",
    title: "Universal Connectivity",
    description:
      "Seamlessly bridge legacy systems and modern IoT endpoints through our proprietary API layer.",
    color: "text-[#6c4fd3]",
  },
  {
    icon: "/icons/data-bi.svg",
    title: "Real-time Synthesis",
    description:
      "Transform raw data into strategic intelligence with embedded analytics across every module.",
    color: "text-[#0b4aa6]",
  },
];

export default function ErpCapabilitiesSection() {
  return (
    <section className="bg-[#f3f4f6] py-20 md:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left content */}
        <div className="max-w-[620px]">
          <div className="space-y-12">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-6">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center">
                  <Image
                    src={pillar.icon}
                    alt={pillar.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.02em] text-[#111827]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-[540px] text-[18px] leading-[1.65] text-[#334155]">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right images */}
        <div className="flex items-center justify-center gap-4 lg:justify-end">
          <div className="relative h-[255px] w-[290px] overflow-hidden rounded-[16px] shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfD65rdkXgLaMMkdOi1SwJW0uITVhxuubd-DmNoEN7aWGuM-JLfrLawZTt65DfKdmC6Z80xEkKljSKrfc4ZZvS-aOi2blm_3RMaAGlpoPD7ea9_1RcHJJlPeiH46ZrYnxG82TPVpBbyogGNR_V4rYlJayUNMWJ7P2JSmzEMJNmc4g34sit2URGhmVypSiWS4zqcDkJYpvK1rDnalzQdGUw85zTKl3AQO82rffa4ZHxZGH0I22V44cASLcpNQu4msa3HX4vBpKGvnk"
              alt="Industrial precision system"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative mt-12 h-[255px] w-[290px] overflow-hidden rounded-[16px] shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoT8hLfE3-aES67O6XkziM4TWbVT-EijRD0FLbRyhjJZpzTuswP8i-VhvSNA90ild7jTdcG8enSQ13LU6njThR6XkcY2mswJnK_mC6xXAol7Hg00-8OAdYd2BcGSar4CFQJdR8XI1g49OkGIIxQZd-w9ssXKMW6fTNQFMinGeh9ODLHVvFPMf3YiSPAUrTDl9hzkvL9WWbovcNYGB87AhAzIO_g0UBWr1XtmJwWpDM2JK03f0FfhcSwzIBU2-41I2Qkm7e1HYtrak"
              alt="Analytics dashboard display"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}