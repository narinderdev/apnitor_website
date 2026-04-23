"use client";

import Image from "next/image";

const enterpriseCards = [
  {
    title: "Cora",
    description: "Next-gen enterprise reporting and business intelligence suite.",
    tag: "ANALYTICS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCruvrdd0Tb_GZJwUfbOohpx5gC_aCBL7V5-K-V6mZe2543_gT3xTaegCwhjEL-Fv2jw0gjxUq1WFXtqlnMx04pGRYtwxkBi-3Wasl1astYVTlY8Eh2gDnTbTo-zjHhmUllapfF6vZBLUSRIw7dqETDuMPv4S9QhtcyrgYwxdp8T4IgoozxM3uX9agKwKKmjmQD1-EIsU-dOXpderHDBr38pXqEh7qOCj5m3BXvD7xmfDZsKGnn4vXZVep8rrwT7juMVjRyniODp6s",
  },
  {
    title: "Account Receivable",
    description:
      "Automated financial ledger system for multi-national conglomerates.",
    tag: "FINTECH",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfWbbnhIwJ4sQuG6ZhK1_6EKgppb2g5re-CLXw3MNpmCnz5bbH_ypvhjY7ZkQvCEf7KYb8FEfnmtvaE0HjgOrpZ3HB6XLNsjIspaX2a7HsxUB1wHvMRssW6gjykpKx-Vrgr0rR8Rqk6_m4SGDvjFdWS-DhP_hiYhWrEAdg-sBfiFT9rAgV9GT5ybMlPZ-BH2FAUQebopawcwQ9Sc02SEYRlyIYoPsVBK_TUpxbiFFwwgdOcdY2kvtA8Tn1lIbx8d8WPXfRUFO9QEk",
  },
  {
    title: "BOM Management",
    description:
      "Critical manufacturing Bill of Materials coordination platform.",
    tag: "INDUSTRIAL",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD46xV16dTnoNWeShmmxuJUELqEUmxUGv1_lZdr_likhqEn17nufCQ0wALlQDqdiM6HmqpeHQmXADPTPaFy_f3KzHEiBCMyaX0kq0-nZNcokZFPGRWLnzhwTbumR5oJhOquVp4ioXIpd_fTK5VAFoefiGAa2QNbJwC4VEnFh2K5AYt8InBTB_JAq4VoOhUJjGzFu3o2XiiL_PoUdOzrndDDzUCrqQHm1U9h2j2KlVGsDPG-9EXdkCy7pF6mx96NRjEuGIsLTkKEbHU",
  },
  {
    title: "Asset Management",
    description:
      "Lifecycle tracking for large-scale physical and digital assets.",
    tag: "LOGISTICS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgI88w62d3UIFw4QInkh0iPVqGOR0pHvDVOy87YDlgmTZSIbqfFowW7FTNZ9t2t52U2n2qtRP5SgaXE_EJwc8BIR3IwGF8KUluPgu5BpecmoRg4xr21FXHusSMIt3C1vaseJi6OdJHt5_EGpKU1SbQ_jKBMLJelsV_ntL265Fza4qjYn5YnGFDLlclXO8um2f9sHtXco-GfxWvmyE0UR_LdjC0QydI0NUeibTra1W7LoVeV1BUAYLz_MKn-6MwtMMAuWjvf4TpnHs",
  },
];

export default function EnterpriseSystemsSection() {
  return (
    <section className="bg-[#eef0f3] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-[760px]">
            <h2 className="text-[32px] font-semibold tracking-[-0.04em] text-[#111827] md:text-[44px]">
              Enterprise Systems
            </h2>

            <div className="mt-2 h-[6px] w-24 rounded-full bg-[#0b4aa6]" />

            <p className="mt-8 max-w-[760px] text-[20px] leading-[1.55] text-[#334155]">
              Scalable infrastructure and data-intensive platforms designed for
              high-stakes corporate environments.
            </p>
          </div>

          <div className="lg:pb-3">
            <p className="text-right text-[12px] font-semibold uppercase tracking-[0.24em] text-[#0b4aa6]">
              High Performance Architecture
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {enterpriseCards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-[22px] bg-[#f8f8f8] shadow-[0_0_0_1px_rgba(15,23,42,0.04)]"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="px-8 py-8">
                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#111827]">
                  {card.title}
                </h3>

                <p className="mt-4 max-w-[260px] text-[14px] leading-[1.55] text-[#475569]">
                  {card.description}
                </p>

                <div className="mt-6">
                  <span className="inline-flex rounded-[8px] bg-[#e5e7eb] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111827]">
                    {card.tag}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}