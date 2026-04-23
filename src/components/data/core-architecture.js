"use client";

import Image from "next/image";
import { Database } from "lucide-react";

export default function CoreArchitectureSection() {
  return (
    <section className="bg-[#f7f9fb] px-6 py-16 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1100px]">
        {/* Heading */}
        <div className="max-w-[720px]">
          <h2 className="text-[38px] font-semibold tracking-[-0.04em] text-[#111827] md:text-[48px]">
            Core Architecture
          </h2>
          <p className="mt-2 text-[17px] text-[#475569]">
            Integrated solutions designed for technical excellence and executive
            clarity.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Row 1 - Left (Wide) */}
          <div className="rounded-[20px] border border-[#e5e7eb] bg-[#f8f8f8] p-5 md:p-6 lg:col-span-8">
            <Database className="h-5 w-5 text-[#0b4aa6]" />

            <h3 className="mt-4 text-[22px] font-semibold text-[#111827]">
              BigQuery Data Warehousing
            </h3>

            <p className="mt-2 text-[14.5px] text-[#475569]">
              Enterprise-grade cloud warehousing at petabyte scale. Optimized
              schemas for lightning-fast SQL queries and cost-efficient storage.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Serverless", "Petabyte Scale", "Real-time ML"].map((item) => (
                <span
                  key={item}
                  className="rounded-[6px] bg-[#e5e7eb] px-2 py-1 text-[11px] font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Row 1 - Right */}
          <div className="rounded-[20px] bg-[#0b4aa6] p-5 md:p-6 lg:col-span-4">
            <Image
              src="/icons/rebase.svg"
              alt="schedule"
              width={20}
              height={20}
            />

            <h3 className="mt-4 text-[22px] font-semibold text-white">
              High-Frequency ETL Pipelines
            </h3>

            <p className="mt-2 text-[14px] text-[#d4e4ff]">
              Automated data movement with zero-loss integrity across ERPs,
              CRMs, and IoT streams.
            </p>

            {/* Image */}
            <div className="group relative mt-4 overflow-hidden rounded-[10px]">
              <div className="relative h-[110px] w-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh3Xopan3nxSlcM6MXd9N9aGkOH0dLNcZjfRsRPwuGB0hpDrDQFsd-hQdHEMjLi4LpNAuzY2OBYdl_fbNMSUKfQNEpcn6q9fKrcvc-e34qfBWKd_mYSUkLES57RD0QybLo2MeDkHqMy7fwPB_055tQekA7VyS58at8XCMx4IrsFlqhVVDMWN4gyj3W4XUN2LZ642OVAlzSBdd8cGPlP7zVjQr9hU9ZtAxJhyIJIuj4ZQDEFM8gIHUTx9JsJYENUx0NAAIF9bvrMqs"
                  alt=""
                  fill
                  className="object-cover transition group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#0b4aa6]/30 group-hover:bg-[#0b4aa6]/0 transition" />
              </div>
            </div>
          </div>

          {/* Row 2 - Left */}
          <div className="rounded-[20px] bg-[#d9cbff] p-5 md:p-6 lg:col-span-4">
            {/* CUSTOM SVG ICON (no bg) */}
            <Image
              src="/icons/schedule.svg"
              alt="schedule"
              width={20}
              height={20}
            />

            <h3 className="mt-4 text-[22px] font-semibold text-[#111827]">
              Automated Reporting
            </h3>

            <p className="mt-2 text-[14px] text-[#513297]">
              Accurate, scheduled, stakeholder-ready reports delivered
              automatically.
            </p>
          </div>

          {/* Row 2 - Right (Wide) */}
          <div className="relative overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-[#f8f8f8] lg:col-span-8">
            <div className="grid h-full grid-cols-1 md:grid-cols-[1.05fr_0.95fr]">
              {/* Text */}
              <div className="relative z-10 p-5 md:p-6">
                <h3 className="text-[22px] font-semibold text-[#111827]">
                  Bespoke Analytics Dashboards
                </h3>

                <p className="mt-2 text-[14px] text-[#475569]">
                  High-fidelity dashboards that reveal patterns, not just
                  numbers.
                </p>
              </div>

              {/* Image FULL HEIGHT */}
              <div className="group relative h-full min-h-[200px] md:min-h-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDucnldRScZeWBVAnNLzvQNRpzGtfM1CbRqcSp_5kfqtHVWczU5If8OPflOjLBcr_n1BevTRjYNiRU-h1Au1jV9RFLqiwWwwqAGI2sFOtKLRwsVSvSH1wfQz8ib2sD_-5yDxtALhUG70sq1uGNh5iTqWa4egpM1WboUHjsLjoFYX20O4UInomUQfQKP152qpMwB5snMPOe-mc3TaMX7tGkjbD4YdtR-qo-z5tXTvfjACjPxYp4X0jC_011slrrTfF06nSvzVweob-0"
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-[#eef0f3]/70 transition group-hover:bg-[#eef0f3]/10" />
              </div>
            </div>

            {/* Fade overlay */}
            <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-[60%] bg-gradient-to-r from-[#f8f8f8] via-[#f8f8f8]/90 to-transparent md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
