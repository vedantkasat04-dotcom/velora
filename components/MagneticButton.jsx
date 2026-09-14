"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({ children, className, style, onClick, href, target, rel, strength = 0.4 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const onMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width/2) * strength);
    y.set((e.clientY - r.top - r.height/2) * strength);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };
  const Tag = href ? motion.a : motion.button;
  return <Tag ref={ref} href={href} target={target} rel={rel} onClick={onClick} className={className} style={{ ...style, x: sx, y: sy, display:"inline-block" }} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>{children}</Tag>;
}
