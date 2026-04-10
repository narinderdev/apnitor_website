import React from "react";

const facts = [
  { value: "9+", label: "YEARS\nEXPERTISE" },
  { value: "20+", label: "IT\nPROFESSIONALS" },
  { value: "40+", label: "DOMAINS" },
  { value: "93%", label: "RECURRING\nCLIENTS" },
  { value: "100+", label: "DELIVERED\nPROJECTS" },
];

export default function BriefFacts() {
  return (
    <section className="bg-[#f7f9fb] pb-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#8b5cf6]">
            Vital Statistics
          </p>
          <h2 className="mt-3 text-[34px] font-extrabold tracking-[-0.02em] text-[#101828]">
            Brief Facts
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {facts.map((fact) => (
            <div
              key={fact.value}
              className="rounded-[14px] bg-white px-4 py-6 text-center shadow-[0_0_0_1px_rgba(15,23,42,0.04)]"
            >
              <div className="text-[34px] font-extrabold leading-none tracking-[-0.03em] text-[#123f9f]">
                {fact.value}
              </div>
              <div className="mt-3 whitespace-pre-line text-[10px] font-bold uppercase tracking-[0.18em] text-[#3b4453]">
                {fact.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}