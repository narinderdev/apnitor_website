import React from "react";

const stack = [
  {
    title: "AI & MACHINE LEARNING",
    groups: [
      {
        label: "LLMS",
        items: ["GPT-4, Claude 3, Llama 3"],
      },
      {
        label: "FRAMEWORKS",
        items: ["LangChain, CrewAI, AutoGPT"],
      },
      {
        label: "VECTOR DBS",
        items: ["Pinecone, Weaviate, Milvus"],
      },
      {
        label: "VOICE",
        items: ["ElevenLabs, Vapi, Whisper"],
      },
    ],
  },
  {
    title: "BACKEND",
    items: ["Python / FastAPI", "Node.js", "Go", "PostgreSQL"],
  },
  {
    title: "FRONTEND",
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "WebAssembly"],
  },
  {
    title: "MOBILE",
    items: ["Flutter", "React Native", "Swift / Kotlin"],
  },
  {
    title: "CLOUD & DEVOPS",
    items: ["AWS / GCP", "Docker / Kubernetes", "Terraform", "CI/CD Pipelines"],
  },
];

export default function TechnologyStack() {
  return (
    <section className="bg-[#11181d] py-10 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4">
        <div>
          <h2 className="text-[30px] font-bold tracking-[-0.03em] text-white md:text-[40px]">
            Our Technology Stack
          </h2>
          <p className="mt-2 text-[18px] leading-[1.6] text-[#8fa6c4]">
            Battle-tested tools for the AI-first era.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          {stack.map((column) => (
            <div key={column.title}>
              <h3 className="text-[14px] uppercase tracking-[0.08em] text-[#7c5cff]">
                {column.title}
              </h3>

              {"groups" in column ? (
                <div className="mt-2 space-y-7">
                  {column.groups.map((group) => (
                    <div key={group.label}>
                      <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#64748b]">
                        {group.label}
                      </p>
                      <ul className="space-y-1">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="text-[12px] leading-[1.55] text-white"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="mt-8 space-y-3">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="text-[12px] leading-[1.55] text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}