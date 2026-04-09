"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do you ensure code quality?",
    answer:
      "We ensure code quality through rigorous development practices, including code reviews, automated testing, and adherence to industry best standards. Our senior developers follow structured workflows, implement scalable architectures, and use modern tools to maintain clean, efficient, and reliable code throughout the development lifecycle.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern, high-performance technologies across web, mobile, cloud, and data engineering. Our expertise includes advanced analytics, machine learning architectures, scalable web frameworks, cross-platform mobile development, and secure cloud infrastructure tailored to enterprise needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on the scope, complexity, and specific requirements. Smaller projects may take a few weeks, while large-scale enterprise solutions can take several months. We work closely with clients to define clear milestones and deliver results efficiently without compromising quality.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, we offer ongoing maintenance and support to ensure your software remains secure, up-to-date, and optimized. Our team provides continuous monitoring, performance improvements, bug fixes, and feature enhancements as your business evolves.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white mb-20">
      <div className="mx-auto px-6 pt-20">
        <div className="mx-auto max-w-[900px]">
          <h2 className="text-center text-[20px] font-semibold tracking-[-0.02em] text-[#1f3f97] md:text-[40px]">
            Frequently Asked Questions
          </h2>

          <div className="mt-14">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="border-b border-[#d9dde3]">
                  <button
                    type="button"
                    onClick={() => {
                      console.log("clicked", index);
                      toggleFaq(index);
                    }}
                    className="flex w-full items-center justify-between gap-6 py-9 text-left"
                  >
                    <span className="text-[24px] font-semibold leading-[1.35] text-[#1843a3] md:text-[20px]">
                      {faq.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[34px] font-light leading-none text-[#0b57d0]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-8 pr-14 text-[17px] leading-[1.8] text-[#475569]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
