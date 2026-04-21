export default function PhilosophySection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#060b14]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(6,11,20,0.78) 0%, rgba(6,11,20,0.42) 38%, rgba(6,11,20,0.82) 100%),
          url("https://lh3.googleusercontent.com/aida-public/AB6AXuDD2faYKdMV898zGWVl_CHZiVRGGAnmNK84BDA5ATj7Nub9YGgOCcnF01ZA0K6Q6xlVp8_OUX9tfG2g0ukF0eEsAm_tm6RXokeIHMBaZwcnRVMlXnjVmgACQyPNefC6KPAPiw_G1XsItqEOtzoZO8yiPVadykWW5UQWZ68qZ3-xtXq83L84y8QmqG7p6x7nz7WBHSbcLFQmlJk6KnJNsdHRzukPTCu02zSrzh2LRFfmZDXQErd0rLPQ3QH-IqeUkwZxLnTs7NnV4J8")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex min-h-screen max-w-[1280px] items-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="max-w-[780px]">
          <p
            className="mb-8 text-[14px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#8fb4ff" }}
          >
            THE PHILOSOPHY
          </p>

          <h2 className="max-w-[760px] text-[56px] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-[58px] lg:text-[54px]">
            <span className="align-top" style={{ color: "#ffffff" }}>
              "
            </span>
            <span style={{ color: "#ffffff" }}>
              AI isn't a tool we use. It's the
            </span>
            <br />
            <span className="italic" style={{ color: "#b88cff" }}>
              medium
            </span>
            <span style={{ color: "#ffffff" }}> through which we</span>
            <br />
            <span style={{ color: "#ffffff" }}>engineer.</span>
            <span className="align-top" style={{ color: "#ffffff" }}>
              "
            </span>
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
