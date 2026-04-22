"use client";

export default function PhilosophySection() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-[#060b14] group">
      
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 grayscale transition duration-700 ease-out group-hover:opacity-100 group-hover:grayscale-0"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDD2faYKdMV898zGWVl_CHZiVRGGAnmNK84BDA5ATj7Nub9YGgOCcnF01ZA0K6Q6xlVp8_OUX9tfG2g0ukF0eEsAm_tm6RXokeIHMBaZwcnRVMlXnjVmgACQyPNefC6KPAPiw_G1XsItqEOtzoZO8yiPVadykWW5UQWZ68qZ3-xtXq83L84y8QmqG7p6x7nz7WBHSbcLFQmlJk6KnJNsdHRzukPTCu02zSrzh2LRFfmZDXQErd0rLPQ3QH-IqeUkwZxLnTs7NnV4J8")`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,11,20,0.78)_0%,rgba(6,11,20,0.42)_38%,rgba(6,11,20,0.82)_100%)] pointer-events-none" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[60vh] max-w-[1280px] items-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="max-w-[780px]">
          
          <p className="mb-8 text-[14px] font-semibold uppercase tracking-[0.2em] text-[#8fb4ff]">
            THE PHILOSOPHY
          </p>

          <h2 className="max-w-[760px] text-[56px] font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-[58px] lg:text-[54px]">
            <span className="align-top">"</span>
            <span>AI isn't a tool we use. It's the</span>
            <br />
            <span className="italic text-[#b88cff]">medium</span>
            <span> through which we</span>
            <br />
            <span>engineer.</span>
            <span className="align-top">"</span>
          </h2>

          <div className="mt-12 grid max-w-[800px] grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            
            <p className="max-w-[360px] text-[16px] leading-[1.45] text-white">
              The traditional approach to B2B software is monolithic and static.
              We architect for the fluid world—where intelligence is baked into
              every node and action is taken autonomously before the human eye
              detects the need.
            </p>

            <p className="max-w-[360px] text-[16px] leading-[1.45] text-white">
              This "Fluid Vibe" is about frictionlessness. We remove the
              cognitive load from your teams, allowing human genius to focus on
              creation while our AI handles the orchestration.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}