"use client";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/clients";

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-12 border-t bg-cream"
      style={{ borderColor: "rgba(27,18,0,0.15)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-ink">
            <span className="font-display text-lg italic text-cream">v</span>
          </div>
          <div>
            <div className="font-display text-xl text-ink">Velora</div>
            <div className="text-xs text-ink-soft">Bangalore · Est. 2026</div>
          </div>
        </Link>
        <div className="flex gap-6 text-sm font-medium text-ink-soft">
          {NAV_ITEMS.map((n) => (
            <Link key={n.key} href={n.key}>
              {n.label}
            </Link>
          ))}
        </div>
        <div className="text-xs text-ink-soft">© 2026 Velora Studio</div>
      </div>
    </footer>
  );
}
