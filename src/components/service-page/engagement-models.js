import React from "react";
import { CheckCircle2 } from "lucide-react";

const models = [
  {
    title: "Fixed-price MVPs",
    description:
      "Predictable costs for specific deliverables. Best for startups and new product launches.",
    points: ["6-12 week delivery", "Clear scope definition"],
  },
  {
    title: "Dedicated Teams",
    description:
      "A full squad integrated into your workflow. Ideal for long-term engineering needs.",
    points: ["Product & Tech leads", "Agile integration"],
    highlighted: true,
  },
  {
    title: "Staff Augmentation",
    description:
      "Scaling your existing team with specialized talent. Fast, efficient, and flexible.",
    points: ["Specific skill gaps filled", "Month-to-month scaling"],
  },
];

export default function EngagementModels() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[36px] md:text-[44px] font-extrabold text-[#111827] tracking-[-0.02em]">
            How We Engage
          </h2>
          <p className="mt-3 text-[16px] md:text-[18px] text-[#475569]">
            Flexible models to fit your business needs.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {models.map((model, index) => (
            <div
              key={index}
              className={`rounded-[18px] p-8 transition-all ${
                model.highlighted
                  ? "border-2 border-[#0b57d0] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                  : "bg-[#eef2f6]"
              }`}
            >
              <h3 className="text-[22px] font-extrabold text-[#111827]">
                {model.title}
              </h3>

              <p className="mt-4 text-[16px] leading-[1.6] text-[#475569]">
                {model.description}
              </p>

              <ul className="mt-6 space-y-4">
                {model.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0b57d0]" />
                    <span className="text-[15px] text-[#111827]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}