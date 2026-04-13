"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const days = ["S", "M", "T", "W", "T", "F", "S"];

const dates = [
  { value: 29, muted: true },
  { value: 30, muted: true },
  { value: 31, muted: true },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: 10 },
  { value: 11 },
  { value: 12 },
  { value: 13 },
  { value: 14 },
  { value: 15, accent: true },
  { value: 16 },
  { value: 17 },
];

const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM"];

export default function ConsultationSection() {
  const [selectedDate, setSelectedDate] = useState(5);
  const [selectedTime, setSelectedTime] = useState("10:30 AM");

  return (
    <section className="bg-[#f5f7fb] px-6 py-20 md:px-10 lg:px-12 lg:py-24 mt-16 lg:mt-14">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-[24px] font-bold leading-[0.95] tracking-[-0.04em] text-[#0f469f] md:text-[56px]">
            Schedule Your Strategic{" "}
            <span className="bg-gradient-to-r from-[#7f67d8] to-[#6c4fc2] bg-clip-text text-transparent">
              Consultation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-body text-[18px] leading-[1.6] text-[#3f4d63] md:text-[20px]">
            Engineering excellence meets AI-first strategy. Let&apos;s discuss
            how we can architect fluid, resilient solutions tailored to your
            unique enterprise challenges.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.25fr]">
          <div className="rounded-[24px] bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] md:p-9">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-[12px] font-bold text-[#11459d] md:text-[18px]">
                Select Date &amp; Time
              </h3>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="rounded-full p-1 text-[#4b5563] transition hover:bg-slate-100"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="rounded-full p-1 text-[#4b5563] transition hover:bg-slate-100"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-7 gap-y-6 text-center">
                {days.map((day, index) => (
                  <div
                    key={`${day}-${index}`}
                    className="font-body text-[15px] font-medium text-[#4b5563]"
                  >
                    {day}
                  </div>
                ))}

                {dates.map((date, index) => {
                  const isSelected = selectedDate === date.value;

                  return (
                    <button
                      key={`${date.value}-${index}`}
                      type="button"
                      disabled={date.muted}
                      onClick={() => !date.muted && setSelectedDate(date.value)}
                      className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl font-body text-[18px] font-medium transition ${
                        isSelected
                          ? "bg-[#0f469f] text-white shadow-sm"
                          : date.muted
                          ? "cursor-not-allowed text-[#c3c8d1]"
                          : date.accent
                          ? "text-[#7b61d1] hover:bg-slate-100"
                          : "text-[#2f3747] hover:bg-slate-100"
                      }`}
                    >
                      {date.value}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-12">
              <p className="font-label text-[14px] font-extrabold uppercase tracking-[0.14em] text-[#525b6b]">
                Available Times (EST)
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot;

                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`h-12 rounded-xl border text-center font-body text-[16px] font-medium transition ${
                        isSelected
                          ? "border-[#a88cf2] bg-[#a88cf2] text-[#3f2a7d]"
                          : "border-[#e5e7eb] bg-white text-[#2f3747] hover:border-[#cfd6e0]"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-[24px] bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] md:p-9">
            <form className="space-y-7">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block font-label text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#445066]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="h-12 w-full rounded-xl border border-transparent bg-[#f1f3f7] px-4 font-body text-[16px] text-[#334155] outline-none placeholder:text-[#a0a7b4] focus:border-[#1843a3]"
                  />
                </div>

                <div>
                  <label className="mb-3 block font-label text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#445066]">
                    Company Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@enterprise.com"
                    className="h-12 w-full rounded-xl border border-transparent bg-[#f1f3f7] px-4 font-body text-[16px] text-[#334155] outline-none placeholder:text-[#a0a7b4] focus:border-[#1843a3]"
                  />
                </div>

                <div>
                  <label className="mb-3 block font-label text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#445066]">
                    LinkedIn Profile (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="linkedin.com/in/username"
                    className="h-12 w-full rounded-xl border border-transparent bg-[#f1f3f7] px-4 font-body text-[16px] text-[#334155] outline-none placeholder:text-[#a0a7b4] focus:border-[#1843a3]"
                  />
                </div>

                <div>
                  <label className="mb-3 block font-label text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#445066]">
                    Primary Interest
                  </label>
                  <div className="relative">
                    <select className="h-12 w-full appearance-none rounded-xl border border-transparent bg-[#f1f3f7] px-4 pr-11 font-body text-[16px] text-[#334155] outline-none focus:border-[#1843a3]">
                      <option>AI Agents</option>
                      <option>AI Consulting</option>
                      <option>Custom Software</option>
                      <option>Cloud Architecture</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b7280]" />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-3 block font-label text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#445066]">
                  Tell Us About Your Project Challenges
                </label>
                <textarea
                  rows={5}
                  placeholder="Briefly describe your goals..."
                  className="w-full rounded-xl border border-transparent bg-[#f1f3f7] px-4 py-4 font-body text-[16px] text-[#334155] outline-none placeholder:text-[#a0a7b4] focus:border-[#1843a3]"
                />
              </div>

              <button
                type="submit"
                className="flex h-[56px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#0f469f] to-[#6d4dc3] font-headline text-[16px] font-bold text-white shadow-[0_14px_28px_rgba(15,70,159,0.22)] transition hover:opacity-95"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}