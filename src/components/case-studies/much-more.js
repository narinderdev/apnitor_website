"use client";

export default function AndMuchMoreSection() {
  return (
    <section className="bg-[#003b8b] px-6 py-24 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1100px] text-center">
        <h2 className="text-[34px] font-semibold tracking-[-0.04em] text-white md:text-[62px]">
          And Much More
        </h2>

        <div className="mx-auto mt-8 h-[8px] w-24 rounded-full bg-[#2c63b7]" />

        <p className="mx-auto mt-12 max-w-[980px] text-[20px] leading-[1.45] text-[#d8e5ff] md:text-[24px]">
          These are just the beginning. With dozens of projects currently in
          development, Apnitor is continuously engineering the future of
          enterprise software across every industry.
        </p>

        <div className="mt-16">
          <button className="inline-flex items-center justify-center rounded-[16px] bg-[#694bb0] px-10 py-4 text-[18px] font-semibold text-white hover:text-[#45248b] transition hover:bg-[#b394ff]">
            Start Your Innovation Journey
          </button>
        </div>
      </div>
    </section>
  );
}