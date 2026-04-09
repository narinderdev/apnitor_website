import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Retail & E-commerce Solutions",
    description:
      "We create comprehensive e-commerce platforms, inventory management systems, POS solutions, and customer engagement tools that help retailers increase sales and improve customer experience.",
    points: [
      "E-commerce platforms",
      "Inventory management systems",
      "Customer loyalty programs",
    ],
    image: "/Retail.png",
    reverse: false,
    sectionBg: "bg-white",
    textColor: "text-[#1f3f97]",
    bodyColor: "text-[#374151]",
    bulletColor: "text-[#0b57d0]",
  },
  {
    title: "Healthcare Solutions",
    description:
      "We develop healthcare technology solutions including EHR systems, telemedicine platforms, medical imaging software, and patient management systems that comply with healthcare regulations like HIPAA.",
    points: [
      "Electronic Health Records (EHR)",
      "Telemedicine platforms",
      "Medical imaging & diagnostics",
    ],
    image: "/Health.png",
    reverse: true,
    sectionBg: "bg-[#f2f4f6]",
    textColor: "text-[#1f3f97]",
    bodyColor: "text-[#374151]",
    bulletColor: "text-[#0b57d0]",
  },
  {
    title: "Education Solutions",
    description:
      "We create learning management systems, educational apps, virtual classroom platforms, and student information systems that enhance the teaching and learning experience for educational institutions.",
    points: [
      "Learning management systems",
      "Virtual classroom platforms",
      "Educational mobile apps",
    ],
    image: "/Education.png",
    reverse: false,
    sectionBg: "bg-white",
    textColor: "text-[#1f3f97]",
    bodyColor: "text-[#374151]",
    bulletColor: "text-[#0b57d0]",
  },
  {
    title: "Logistics Solutions",
    description:
      "We build logistics management systems, fleet tracking solutions, warehouse management software, and route optimization tools that help logistics companies streamline operations and reduce costs.",
    points: [
      "Fleet management systems",
      "Warehouse management software",
      "Route optimization algorithms",
    ],
    image: "/Logistics.png",
    reverse: true,
    sectionBg: "bg-[#0f172a]",
    textColor: "text-white",
    bodyColor: "text-[#c6d1e6]",
    bulletColor: "text-[#0b57d0]",
  },
  {
    title: "Manufacturing Solutions",
    description:
      "We develop IoT solutions, production management systems, quality control software, and supply chain optimization tools that help manufacturers increase efficiency and reduce costs.",
    points: [
      "IoT & smart factory solutions",
      "Production management systems",
      "Supply chain optimization",
    ],
    image: "/Manufacturing.png",
    reverse: false,
    sectionBg: "bg-white",
    textColor: "text-[#1f3f97]",
    bodyColor: "text-[#374151]",
    bulletColor: "text-[#0b57d0]",
  },
];

function IndustryCard({ title, image }) {
  return (
    <div className="mx-auto w-full max-w-[580px] overflow-hidden rounded-[18px] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="relative h-[320px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}

export default function Industries() {
  return (
    <section className="bg-white">
      <div className="border-t border-[#e9ecef]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-24">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#1f3f97] md:text-[56px]">
              Industries we serve
            </h2>
            <p className="mx-auto mt-6 max-w-[820px] text-[18px] leading-[1.55] text-[#374151] md:text-[20px]">
              We provide domain-specific expertise and advanced technology
              solutions tailored to the unique challenges of leading global
              industries.
            </p>
          </div>
        </div>
      </div>

      {industries.map((item) => (
        <section key={item.title} className={item.sectionBg}>
          <div className="mx-auto max-w-[1280px] px-6 py-[72px] md:py-[86px]">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
              <div className={item.reverse ? "lg:order-2" : ""}>
                <div className="max-w-[610px]">
                  <h3
                    className={`text-[24px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[36px] ${item.textColor}`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-7 text-[18px] leading-[1.65] ${item.bodyColor}`}
                  >
                    {item.description}
                  </p>

                  <ul className="mt-10 space-y-5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className={`flex items-center gap-4 text-[16px] font-semibold ${
                          item.sectionBg === "bg-[#0f172a]"
                            ? "text-white"
                            : "text-[#1843a3]"
                        }`}
                      >
                        <ArrowRight
                          className={`h-5 w-5 shrink-0 ${
                            item.sectionBg === "bg-[#0f172a]"
                              ? "text-white"
                              : "text-[#0b57d0]"
                          }`}
                          strokeWidth={2.4}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={item.reverse ? "lg:order-1" : ""}>
                <IndustryCard
                  title={item.title}
                  description={item.description}
                  points={item.points}
                  image={item.image}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}
