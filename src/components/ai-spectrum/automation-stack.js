import {
  Bot,
  PhoneCall,
  Workflow,
  FileText,
  ArrowUpRight,
  ArrowRight,
  Circle,
} from "lucide-react";

export default function AutomationStackSection() {
  return (
    <section className="bg-[#F6F6F8] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            The Automation Stack
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-500 md:text-base">
            Four pillars of intelligent operations, seamlessly integrated into
            your existing infrastructure.
          </p>
        </div>

        {/* Grid */}
        <div className="relative mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* AI Assistants */}
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm lg:col-span-8">
            <div className="relative z-10 max-w-md">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F5FB]">
                <Bot className="h-5 w-5 text-[#2F65D9]" />
              </div>

              <h3 className="text-3xl font-semibold text-slate-900">
                AI Assistants
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Custom-trained large language models (LLMs) specialized in your
                engineering data and internal protocols.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Semantic Search", "Natural Querying", "Internal Knowledge Bases"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-500"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Decorative background graphic */}
            <div className="pointer-events-none absolute -bottom-10 right-0 opacity-10">
              <svg
                width="320"
                height="280"
                viewBox="0 0 320 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-slate-500"
              >
                <circle cx="170" cy="130" r="34" stroke="currentColor" strokeWidth="12" />
                <circle cx="100" cy="80" r="18" stroke="currentColor" strokeWidth="10" />
                <circle cx="230" cy="65" r="18" stroke="currentColor" strokeWidth="10" />
                <circle cx="265" cy="165" r="18" stroke="currentColor" strokeWidth="10" />
                <circle cx="105" cy="190" r="18" stroke="currentColor" strokeWidth="10" />
                <path d="M118 92L148 114" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M194 110L218 82" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M201 146L244 159" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M142 154L118 179" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Call Tracking */}
          <div className="rounded-[28px] bg-gradient-to-b from-[#5D35C7] to-[#2F006E] p-8 text-white shadow-sm lg:col-span-4">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <PhoneCall className="h-5 w-5 text-white" />
            </div>

            <h3 className="max-w-xs text-3xl font-semibold leading-tight">
              Call Tracking &amp; Sentiment
            </h3>

            <p className="mt-4 max-w-sm text-base leading-7 text-white/80">
              Real-time voice intelligence that converts conversations into
              actionable engineering tasks.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-white/90">
              {["Auto-Transcription", "Sentiment Mapping", "CRM Sync"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Circle className="h-4 w-4 fill-current stroke-0 text-white/90" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workflow Automations */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:col-span-4">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F4F7FF]">
              <Workflow className="h-5 w-5 text-[#2F65D9]" />
            </div>

            <h3 className="text-2xl font-semibold text-slate-900">
              Workflow Automations
            </h3>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Eliminate the mundane. We connect disparate legacy systems into a
              singular, fluid stream.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl bg-slate-100">
              <div className="h-40 w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),_transparent_35%),linear-gradient(135deg,_#222_0%,_#444_45%,_#111_100%)]" />
            </div>
          </div>

          {/* Document Processing */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:col-span-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5F0FF]">
                  <FileText className="h-5 w-5 text-[#7A4CE0]" />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  Document Processing
                </h3>

                <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                  Intelligent OCR and data extraction for complex technical
                  drawings, blueprints, and regulatory compliance filings.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#7A4CE0] transition hover:opacity-80"
                >
                  Review Technical Specs
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Right-side mock doc card */}
              <div className="rounded-[24px] bg-[#F4F4F7] p-5">
                <div className="space-y-4">
                  <div className="h-2.5 w-40 rounded-full bg-[#D8CDF8]" />
                  <div className="h-2.5 w-52 rounded-full bg-[#C8B7F3]" />
                  <div className="h-2.5 w-44 rounded-full bg-[#B79BE9]" />
                </div>

                <div className="mt-10 flex gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8DDFF]">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DDEAFF]">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#60A5FA]" />
                  </div>
                </div>

                <div className="mt-8 h-28 rounded-2xl border border-dashed border-slate-200 bg-white/40" />
              </div>
            </div>
          </div>

          {/* Right floating arrow button */}
          <button
            className="absolute right-[-20px] top-16 hidden h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md lg:flex"
            aria-label="Next"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}