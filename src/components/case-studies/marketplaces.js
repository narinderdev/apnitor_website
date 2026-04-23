"use client";

import Image from "next/image";

const portfolioCards = [
  {
    category: "SERVICE ECONOMY",
    title: "CleanersList",
    description:
      "Hyper-local service marketplace with advanced scheduling and escrow protection.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTnx5jaD0Xnkmhstrl5eruTlputxBr7JmH_y3J9_pcyaJDfzThiSy7WB4_WsPg8_xRJy8kWbpnDwlyMeLS8xg8xv2JOUXKmIcSOB0pZ6g03yC6kXHbX-s2iuQuCBjSRNoNPBK0IEuFCPhk0DoGP7O1jJHGSD-VrODsdKBYzKiz2ut6TF1R6GdCWeLimwO5jSwy1b77y_MPAdr9rcGL2ZyIfjua6MdR9f92MKagMU1IhAZrqq04U2mTXZAgmTRiaBpnrGnAz55Wpws",
    imageClassName: "object-cover",
  },
  {
    category: "E-COMMERCE",
    title: "Vehicle Marketplace",
    description:
      "Automotive trading platform featuring real-time bidding and history verification.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQL6EPwmZatkCCTD_JBNfFBjtWiSRsRTMJoAnqpycf_1aJggr-MAnaueCvRihHMc4g0tQFFutoMxdDZr8XTHL8XMhRXKc9OouBzn-N0J4F9HL8a_yZP00ZFYyKn00sTCNnLYrxGwA_fEB-wk0R37llblhxZq25WGoSEhOKl9pANI1QQksM7vgTeyDutim2ce79lEkh-OcsHiC5EMnV0tc_FqzPmIoOgPI7Jfmw5gr9K1qS88a2vRLn21DI-S-HtTWls9Ve_CzXs9Q",
    imageClassName: "object-cover",
  },
  {
    category: "PRODUCTIVITY",
    title: "SaaS Platforms",
    description:
      "Subscription-based software solutions optimized for enterprise team collaboration.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWp7W4XYY3RG-KaEdBDUAZtfc0pKfiCPnfC2wm7eutWTyn9MQ9SeHjvkNMHYtF8EcWOaaI13RhLzdX7Ru-FvRPVsWjqCrEzmAAMsM0Sp3m6qRU2Qas1juwTNzVWRvcxO3gQUk-YzkavQbd0adkq_m5H-kRBIztPLZVF2Hyk5GPtMEujGekSkmp7peA8zlbPH2JoijGhNTq0BqUm7VJwCRt4bNyAofNCAoOSvy8iBNheXgpE6tDRBXb1CfuuhklyB5EbEnyvnF9MYA",
    imageClassName: "object-cover",
  },
];

export default function MarketplacesSaasSection() {
  return (
    <section className="bg-[#eef0f3] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-[760px]">
            <h2 className="text-[38px] font-semibold tracking-[-0.04em] text-[#111827] md:text-[52px]">
              Marketplaces &amp; SaaS
            </h2>

            <div className="mt-5 h-[6px] w-24 rounded-full bg-[#6c4fd3]" />

            <p className="mt-8 max-w-[760px] text-[20px] leading-[1.55] text-[#334155]">
              Dynamic platforms connecting providers and consumers with seamless
              transaction flows.
            </p>
          </div>

          <div className="lg:pb-3">
            <p className="text-right text-[14px] font-semibold uppercase tracking-[0.24em] text-[#6c4fd3]">
              Digital Ecosystems
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {portfolioCards.map((card, index) => (
            <article
              key={card.title}
              className={`group ${index === 1 ? "xl:translate-y-20" : ""}`}
            >
              <div className="relative h-[400px] overflow-hidden rounded-[22px] bg-[#dfe7e7] shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={`${card.imageClassName} transition duration-500 ease-out group-hover:scale-[1.02]`}
                />
              </div>

              <div className="pt-8">
                <div className="flex items-center gap-4">
                  <span className="h-[2px] w-8 rounded-full bg-[#8b6ce8]" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6c4fd3]">
                    {card.category}
                  </span>
                </div>

                <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.03em] text-[#111827]">
                  {card.title}
                </h3>

                <p className="mt-2 max-w-[340px] text-[16px] leading-[1.55] text-[#475569]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
