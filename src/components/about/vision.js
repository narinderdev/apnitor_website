import React from "react";

const items = [
  {
    title: "Mission",
    text: "We develop software that helps our customers to grow their businesses. We are committed to providing our customers with high-quality software development services that are tailored to their specific needs.",
  },
  {
    title: "Vision",
    text: "Our company’s vision is fully defined by a simple but comprehensive phrase: “Smart software for smart people”. We believe that software should be easy to use and it should help people to be more productive.",
  },
  {
    title: "Values",
    text: "We do what we love and we do it well. We are a team of professionals who are passionate about software development. We are always looking for new ways to improve our services and we are always ready to take on new challenges.",
  },
];

export default function Vision() {
  return (
    <section className="relative overflow-hidden bg-[#003b8b] py-16 md:py-20">
      <div className="absolute inset-0 opacity-15">
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 260 C180 180 280 340 450 260 C620 180 760 60 980 140 C1090 180 1140 220 1200 210"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M0 320 C220 220 320 390 520 300 C700 220 880 150 1200 240"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative rounded-[16px] bg-[#054297] px-7 py-7 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              {/* LEFT BORDER LINE */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#f09cff] to-[#f09cff]" />

              <h3 className="text-[28px] font-extrabold tracking-[-0.02em] text-white">
                {item.title}
              </h3>

              <p className="mt-5 text-[14px] leading-[1.85] text-[#d9e6ff]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
