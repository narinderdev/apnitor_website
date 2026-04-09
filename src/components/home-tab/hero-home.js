import React from "react";
import { ArrowRight, Database, Landmark, Users, BadgePlus } from "lucide-react";

const cards = [
  {
    icon: Database,
    title: "Data & AI hub",
    description:
      "Advanced analytics and machine learning architectures for data-driven enterprises.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
  },
  {
    icon: Landmark,
    title: "Finance hub",
    description:
      "Secure, compliant FinTech solutions and modern banking infrastructure.",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
  },
  {
    icon: BadgePlus,
    title: "Healthcare hub",
    description:
      "HIPAA-compliant healthcare systems and patient-centric digital experiences.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-700",
  },
  {
    icon: Users,
    title: "Staff augmentation",
    description:
      "Vetted engineering talent to scale your internal technical capabilities seamlessly.",
    iconBg: "bg-amber-50",
    iconColor: "text-blue-700",
  },
];

const HeroHome = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f6f8] pt-24">
      <div className="absolute inset-x-0 top-0 h-[320px] bg-[#f7f8fa]" />
      <div className="absolute left-[-8%] top-[130px] h-[220px] w-[45%] rounded-[50%] bg-[#eef3f6]" />
      <div className="absolute right-[-10%] top-[150px] h-[260px] w-[52%] rounded-[50%] bg-[#eef3f6]" />

      <div className="relative mx-auto max-w-7xl px-8 pb-20 pt-6 lg:pb-24">
        <div className="max-w-[760px]">
          <div className="inline-flex items-center rounded-full bg-primary-container px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-on-primary-container">
            Trusted Technology Partner
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-blue-900 md:text-7xl">
            Result-driven <br />software development company
          </h1>

          <p className="mt-8 text-[18px] leading-[1.6] text-[#334155]">
            We architect scalable, high-performance digital solutions that
            empower global enterprises to lead through innovation and technical
            excellence.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <button className="inline-flex h-[56px] items-center justify-center rounded-md bg-gradient-to-r from-[#0b57c2] to-[#6a49c8] px-8 text-[18px] font-bold text-white shadow-[0_10px_24px_rgba(30,64,175,0.18)] transition hover:opacity-95">
              Speed Up Development
            </button>

            <a
              href="#"
              className="inline-flex items-center gap-3 text-[18px] font-bold text-[#0b57c2]"
            >
              View Portfolio
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="group px-8 py-5 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${card.iconBg}`}
                >
                  <Icon
                    className={`h-7 w-7 ${card.iconColor}`}
                    strokeWidth={2.1}
                  />
                </div>

                <h3 className="mt-8 text-[18px] font-bold text-[#163d96]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.7] text-[#475569]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
