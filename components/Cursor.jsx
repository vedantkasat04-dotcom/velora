"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;
    dot.style.opacity = "1";
    ringEl.style.opacity = "1";
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    const onEnter = () => {
      dot.style.transform = "translate(-50%,-50%) scale(2.5)";
      ringEl.style.borderColor = "#FF5B1F";
    };
    const onLeave = () => {
      dot.style.transform = "translate(-50%,-50%) scale(1)";
      ringEl.style.borderColor = "#1B1200";
    };
    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      dot.style.left = pos.current.x + "px";
      dot.style.top = pos.current.y + "px";
      ringEl.style.left = ring.current.x + "px";
      ringEl.style.top = ring.current.y + "px";
      raf.current = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    raf.current = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf.current); };
  }, []);

  return (
    <>
      <div ref={dotRef} className="fixed z-[9999] pointer-events-none" style={{ width:8, height:8, borderRadius:"50%", backgroundColor:"#FF5B1F", transform:"translate(-50%,-50%)", opacity:0, transition:"transform 0.15s ease", top:0, left:0 }} />
      <div ref={ringRef} className="fixed z-[9998] pointer-events-none" style={{ width:36, height:36, borderRadius:"50%", border:"1.5px solid #1B1200", transform:"translate(-50%,-50%)", opacity:0, transition:"transform 0.3s ease, border-color 0.2s ease", top:0, left:0 }} />
    </>
  );
}
