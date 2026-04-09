import React from "react";
import Image from "next/image";
import {
  Brain,
  Bot,
  Database,
  ArrowUpRight,
  MicVocal,
  CheckCircle2,
} from "lucide-react";

const foundationModels = [
  { name: "GPT-4", vendor: "OPENAI" },
  { name: "Claude 3", vendor: "ANTHROPIC" },
  { name: "Llama 3", vendor: "META AI" },
];

const vectorDbs = ["Pinecone", "Weaviate", "Milvus"];
const frameworkTags = ["LangChain", "CrewAI", "AutoGPT"];
const voiceTools = ["ElevenLabs", "Vapi", "Whisper"];

export default function AiMachineLearningSection() {
  return (
    <section className="bg-[#f7f9fb] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="max-w-[760px]">
          <h2 className="text-[30px] font-semibold tracking-[-0.03em] text-[#111827] md:text-[44px]">
            AI &amp; Machine Learning
          </h2>
          <p className="mt-2 max-w-[760px] text-[18px] leading-[1.6] text-[#475569]">
            Building the next generation of intelligence with cutting-edge LLMs
            and agentic frameworks.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.08fr_0.52fr]">
          <div className="rounded-[18px] bg-white p-8 shadow-[0_0_0_1px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-3">
              <Bot className="h-6 w-6 text-[#0b57d0]" strokeWidth={2.1} />
              <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[#111827]">
                LLMs &amp; Foundation Models
              </h3>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto]">
              {foundationModels.map((model) => (
                <div
                  key={model.name}
                  className="rounded-[12px] bg-[#f4f6f8] px-4 py-5 shadow-[0_0_0_1px_rgba(15,23,42,0.04)]"
                >
                  <h4 className="text-[18px] font-semibold tracking-[-0.02em] text-[#1843a3]">
                    {model.name}
                  </h4>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                    {model.vendor}
                  </p>
                </div>
              ))}

              <div className="hidden items-center justify-center rounded-[12px] bg-[#f4f6f8] px-6 md:flex">
                <Brain className="h-16 w-16 text-[#d7dee9]" strokeWidth={1.8} />
              </div>
            </div>
          </div>

          <div className="rounded-[18px] bg-gradient-to-br from-[#6b4bc8] to-[#5a39b5] p-8 text-white shadow-[0_14px_30px_rgba(91,58,181,0.22)]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/12">
                <MicVocal className="h-6 w-6 text-white" strokeWidth={2.1} />
              </div>
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white">
                Real-Time
              </span>
            </div>

            <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.02em] text-white">
              Voice AI
            </h3>

            <ul className="mt-2 space-y-4">
              {voiceTools.map((tool) => (
                <li key={tool} className="flex items-center gap-3">
                  <CheckCircle2
                    className="h-5 w-5 text-white/90"
                    strokeWidth={2.1}
                  />
                  <span className="text-[16px] font-semibold text-white/90">
                    {tool}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.62fr_1.38fr]">
          <div className="rounded-[18px] bg-white p-8 shadow-[0_0_0_1px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-3">
              <Database className="h-6 w-6 text-[#0b57d0]" strokeWidth={2.1} />
              <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[#111827]">
                Vector Databases
              </h3>
            </div>

            <div className="mt-7 divide-y divide-[#e8edf3]">
              {vectorDbs.map((db) => (
                <div
                  key={db}
                  className="flex items-center justify-between py-5 first:pt-0 last:pb-0"
                >
                  <span className="text-[18px] tracking-[-0.02em] text-[#111827]">
                    {db}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-[#64748b]"
                    strokeWidth={2.1}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[18px] bg-white p-8 shadow-[0_0_0_1px_rgba(15,23,42,0.04)]">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[#111827]">
                  Agentic Frameworks
                </h3>

                <p className="mt-4 max-w-[640px] text-[16px] leading-[1.7] text-[#475569]">
                  Orchestrating complex autonomous workflows using leading
                  industry standards.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {frameworkTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#dfe7ff] px-4 py-2 text-[14px] text-[#1843a3]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mx-auto md:mx-0">
                <div className="overflow-hidden rounded-[12px] shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                  <Image
                    src="/ai-image.png"
                    alt="AI frameworks"
                    width={190}
                    height={190}
                    className="h-[190px] w-[190px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}