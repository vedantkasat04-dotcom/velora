"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NAV_ITEMS, WHATSAPP } from "@/lib/clients";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur border-b"
        style={{
          backgroundColor: "rgba(255,241,201,0.85)",
          borderColor: "rgba(27,18,0,0.08)",
        }}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 flex items-center justify-center rounded-full bg-ink overflow-hidden">
            <span className="font-display text-xl italic leading-none text-cream">
              v
            </span>
          </div>
          <span className="font-display text-2xl tracking-tight text-ink">
            Velora
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.key;
            return (
              <Link
                key={item.key}
                href={item.key}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
                style={{ color: active ? "#1B1200" : "#4A3E20" }}
              >
                {item.label}
                {active && (
                  <motion.div
                    layoutId="navDot"
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1.5 h-1.5 rounded-full bg-tangerine"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-ink text-cream transition-transform hover:scale-105"
        >
          Start a project
        </a>

        <button
          className="md:hidden text-sm font-semibold px-4 py-2 rounded-full bg-ink text-cream"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[68px] left-0 right-0 z-40 md:hidden bg-cream border-b p-6"
            style={{ borderColor: "rgba(27,18,0,0.08)" }}
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.key}
                  href={item.key}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-4 px-5 py-3 text-center rounded-full bg-ink text-cream font-semibold"
              >
                WhatsApp us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
