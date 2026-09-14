"use client";
import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, className, style, delay = 0, y = 60, duration = 1 }) {
  const ref = useRef(null);
  useEffect(() => {
    let ctx;
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(ref.current, { opacity: 0, y }, { opacity: 1, y: 0, duration, delay, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 88%", toggleActions: "play none none none" } });
      });
    };
    init();
    return () => ctx && ctx.revert();
  }, [delay, y, duration]);
  return <div ref={ref} className={className} style={{ opacity: 0, ...style }}>{children}</div>;
}
