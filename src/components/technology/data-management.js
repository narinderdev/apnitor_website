import React from "react";
import { Database, Table2, Boxes, ChartNoAxesColumn } from "lucide-react";

const dataItems = [
  {
    icon: Database,
    title: "PostgreSQL",
    subtitle: "RELATIONAL",
    color: "text-[#0b57d0]",
  },
  {
    icon: Table2,
    title: "MySQL",
    subtitle: "RELATIONAL",
    color: "text-[#0b57d0]",
  },
  {
    icon: Boxes,
    title: "MongoDB",
    subtitle: "NOSQL",
    color: "text-[#6b4bc8]",
    highlighted: true,
  },
  {
    icon: ChartNoAxesColumn,
    title: "BigQuery",
    subtitle: "DATA WAREHOUSE",
    color: "text-[#0a6aa1]",
  },
];

export default function DataManagementSection() {
  return (
    <section className="bg-[#f4f6f8] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="text-center">
          <h2 className="text-[40px] font-extrabold tracking-[-0.03em] text-[#111827] md:text-[56px]">
            Data Management
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[18px] leading-[1.6] text-[#475569]">
            Ensuring data integrity, availability, and lightning-fast retrieval
            across diverse data models.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dataItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex min-h-[220px] flex-col items-center justify-center rounded-[18px] px-8 py-10 text-center shadow-[0_0_0_1px_rgba(15,23,42,0.04)] ${
                  item.highlighted ? "bg-[#eef2f6]" : "bg-white"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center">
                  <Icon className={`h-10 w-10 ${item.color}`} strokeWidth={2.1} />
                </div>

                <h3 className="mt-8 text-[20px] font-extrabold tracking-[-0.02em] text-[#111827]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] font-medium uppercase tracking-[0.18em] text-[#334155]">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}