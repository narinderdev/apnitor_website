"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapReveal({
  children,
  className = "",
  variant = "section",
  delay = 0,
  duration = 0.9,
  y = 56,
  start = "top 82%",
}) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const target = rootRef.current;

      if (!target) {
        return;
      }

      const animationConfig = {
        y,
        autoAlpha: 0,
        duration,
        delay,
        ease: "power3.out",
        clearProps: "transform,opacity,visibility",
      };

      if (variant === "hero") {
        gsap.from(target, animationConfig);
        return;
      }

      gsap.from(target, {
        ...animationConfig,
        scrollTrigger: {
          trigger: target,
          start,
          once: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [delay, duration, start, variant, y]);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
