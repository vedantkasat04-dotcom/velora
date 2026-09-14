"use client";
import { useEffect, useRef, useState } from "react";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

export default function TextScramble({ text, className, style, delay = 0 }) {
  const [display, setDisplay] = useState("");
  const iteration = useRef(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      iteration.current = 0;
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setDisplay(text.split("").map((char, idx) => {
          if (idx < Math.floor(iteration.current)) return char;
          if (char === " ") return " ";
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join(""));
        iteration.current += text.length / 18;
        if (iteration.current >= text.length) { clearInterval(intervalRef.current); setDisplay(text); }
      }, 35);
    }, delay);
    return () => { clearTimeout(timeout); clearInterval(intervalRef.current); };
  }, [text, delay]);
  return <span className={className} style={style}>{display || "\u00A0".repeat(text.length)}</span>;
}
