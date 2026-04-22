"use client";

export default function AudienceSplitSection() {
  return (
    <section className="bg-[#eef0f3] px-6 py-20 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-8 lg:grid-cols-2">
        
        {/* Left card */}
        <div className="rounded-[32px] border border-[#e3e6eb] bg-[#f8f8f8] px-10 py-10">
          <p className="text-[14px] font-semibold uppercase tracking-[0.28em] text-[#0b4aa6]">
            For Startups
          </p>

          <h2 className="mt-5 text-[34px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#111827]">
            Market-Entry Speed
          </h2>

          <p className="mt-6 max-w-[640px] text-[16px] leading-[1.5] text-[#334155]">
            Launch your core product fast to start learning from real users and
            secure your next funding round.
          </p>

          <ul className="mt-5 space-y-2">
            <li className="flex items-center gap-3 text-[16px] text-[#334155]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6c4fd3]" />
              <span>Focus on essential features</span>
            </li>
            <li className="flex items-center gap-3 text-[16px] text-[#334155]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6c4fd3]" />
              <span>Cost-effective engineering squads</span>
            </li>
          </ul>
        </div>

        {/* Right card */}
        <div className="rounded-[32px] border border-[#e3e6eb] bg-[#f3f4f8] px-10 py-10 shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
          <p className="text-[14px] font-semibold uppercase tracking-[0.28em] text-[#7a59d1]">
            For Enterprises
          </p>

          <h2 className="mt-5 text-[34px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#3f2a9b]">
            Innovation Labs
          </h2>

          <p className="mt-6 max-w-[640px] text-[16px] leading-[1.5] text-[#5a43a8]">
            Test internal ventures and digital transformation concepts without
            disrupting core infrastructure.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3 text-[16px] text-[#3f2a9b]">
              <span className="h-2 w-2 rounded-full bg-[#0b4aa6]" />
              <span>Compliance-first engineering</span>
            </li>
            <li className="flex items-center gap-3 text-[16px] text-[#3f2a9b]">
              <span className="h-2 w-2 rounded-full bg-[#0b4aa6]" />
              <span>Seamless enterprise integration</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}