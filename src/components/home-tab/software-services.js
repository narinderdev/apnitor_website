import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Custom software development",
    description:
      "Tailor-made solutions designed to solve your unique business challenges.",
  },
  {
    title: "Web development",
    description:
      "High-performance web applications built with modern frameworks.",
  },
  {
    title: "Mobile app development",
    description:
      "Native and cross-platform mobile experiences for iOS and Android.",
  },
  {
    title: "UI/UX design",
    description:
      "Human-centric design that prioritizes usability and brand identity.",
  },
];

export default function SoftwareServices() {
  return (
    <section className="bg-surface-container-low py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div className="">
            <h2 className="text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#173f96] md:text-[40px]">
              Our software development services
            </h2>

            <div className="mt-14 space-y-11">
              {services.map((service) => (
                <div key={service.title} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2
                      className="h-6 w-6 text-[#0b57d0]"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-semibold leading-tight text-[#173f96] md:text-[18px]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-[1.65] text-[#3d4b63] md:text-[16px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[576px] lg:mx-0">
            <div className="relative overflow-hidden rounded-[22px] shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo7ROfR0WNVRvS7aWwfHdA6jU54u5XVez_L8bG_D1OTwZ1iFQbBf8gF1HOsXk20ciSOWOBbFwgNZ6QgPP4vd2onhqzrKoxmFsFJWWl-6HRgJwBC4jHVDH87bItnJMsIXMxV9nkzySMNgFnnEfAkV3nFHUY777D_LkmHC3yiFbeoKJnnca-Qt_V0_V6LYS7fUcvgh2uYYEP-ywlEe56AVumVTisW7jvXWpi4WEiM-m0qrTlMi_fDRw4DpEbNrbrp1Tz4sEporxIxR8"
                alt="Developer working at computer"
                width={900}
                height={700}
                className="h-[430px] w-full object-cover md:h-[575px]"
                unoptimized
              />
            </div>

            <div className="absolute -bottom-6 left-[-24px] rounded-[16px] bg-white px-6 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.14)] md:px-6 md:py-5">
              <div className="text-[34px] font-bold leading-none text-[#0b57d0] md:text-[30px]">
                100+
              </div>
              <p className="mt-2 max-w-[185px] text-[12px] font-semibold leading-[1.45] text-[#2d3a52] md:text-[14px]">
                Senior developers ready to start your project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
