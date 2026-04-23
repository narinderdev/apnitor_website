"use client";

import Image from "next/image";

const techStack = [
  { label: "MAINFRAME", value: "z/OS" },
  { label: "LEGACY", value: "Java 6" },
  { label: "ERP", value: "SAP R/3" },
  { label: "DB", value: "Oracle 9i" },
  { label: "WEB", value: "Silverlight" },
  { label: "DESKTOP", value: "VB6" },
];

export default function ExpertiseAcrossErasSection() {
  return (
    <section className="relative overflow-hidden bg-[#eceef0] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      {/* subtle background terminal icon */}
      <div className="pointer-events-none absolute right-[6%] top-1/2 hidden -translate-y-1/2 lg:block">
        <Image
          src="/icons/terminal.svg"
          alt=""
          width={280}
          height={280}
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-[1220px]">
        <div className="text-center">
          <h2 className="text-[30px] font-bold tracking-[-0.04em] text-[#111827] md:text-[42px]">
            Expertise Across Eras
          </h2>
          <p className="mt-2 text-[18px] leading-[1.55] text-[#475569]">
            From COBOL and Mainframes to Rust and Go-Lang.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {techStack.map((item) => (
            <div
              key={item.label}
              className="rounded-[18px] border border-[#e5e7eb] bg-[#f8f8f8] px-6 py-8 text-center shadow-[0_4px_14px_rgba(15,23,42,0.03)]"
            >
              <div className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#64748b]">
                {item.label}
              </div>
              <div className="mt-5 text-[22px] font-semibold tracking-[-0.02em] text-[#2b2f38]">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}