"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ClientCard from "@/components/ClientCard";
import PageWrapper from "@/components/PageWrapper";
import { CLIENTS, WHATSAPP } from "@/lib/clients";

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="pt-28">
        {/* HERO */}
        <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-10 overflow-hidden noise">
          <motion.div
            className="absolute right-[-8%] top-[15%] w-[380px] h-[380px] rounded-full blur-3xl opacity-40 bg-tangerine"
            animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[-5%] bottom-[10%] w-[280px] h-[280px] rounded-full blur-3xl opacity-30 bg-violet"
            animate={{ scale: [1, 1.25, 1], x: [0, 40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-ink" />
              <span className="text-sm font-medium text-ink-soft">
                A studio for the internet, from Bangalore
              </span>
            </motion.div>

            <h1
              className="font-display leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Websites that{" "}
                <span className="relative inline-block italic text-tangerine">
                  work
                  <motion.svg
                    className="absolute left-0 -bottom-2 w-full"
                    viewBox="0 0 200 10"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.9 }}
                  >
                    <motion.path
                      d="M2 6 Q 50 1, 100 5 T 198 4"
                      stroke="#FF5B1F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </motion.svg>
                </span>
                .
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex items-baseline gap-4 flex-wrap"
              >
                Marketing that{" "}
                <motion.span
                  className="italic inline-block text-violet"
                  animate={{ x: [0, 20, 0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  moves
                </motion.span>
                .
              </motion.div>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl"
            >
              <p className="text-lg md:text-xl max-w-md text-ink-soft">
                We design, build and launch websites for founders who want more
                than just a homepage — plus the SEO and ads to actually get
                seen.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href="/work"
                  className="px-6 py-3.5 rounded-full font-semibold text-sm bg-ink text-cream transition-transform hover:scale-105"
                >
                  See our work
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3.5 rounded-full font-semibold text-sm border-2 border-ink text-ink transition-transform hover:scale-105"
                >
                  What we do
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MARQUEE */}
        <section
          className="py-8 border-y overflow-hidden bg-offwhite"
          style={{ borderColor: "rgba(27,18,0,0.15)" }}
        >
          <motion.div
            className="flex gap-14 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-14 items-center">
                {[
                  "NetVent Parivaar",
                  "JMB Bakers",
                  "Shri Moksham",
                  "Crumbly",
                  "Ambitio",
                  "★",
                ].map((name, j) => (
                  <span
                    key={j}
                    className="font-display text-3xl md:text-4xl"
                    style={{ color: name === "★" ? "#FF5B1F" : "#1B1200" }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </section>

        {/* SERVICES TEASER */}
        <section className="py-24 md:py-32 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
              <div>
                <div className="text-sm font-medium mb-3 text-tangerine">
                  What we do
                </div>
                <h2 className="font-display text-5xl md:text-7xl leading-none tracking-tight text-ink">
                  Four things.
                  <br />
                  Done properly.
                </h2>
              </div>
              <Link
                href="/services"
                className="text-sm font-semibold underline underline-offset-4 text-ink"
              >
                Full services & packages
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  n: "Website Development",
                  d: "Next.js, Shopify headless, custom builds. Fast, indexable, built to convert.",
                  color: "#FF5B1F",
                },
                {
                  n: "SEO",
                  d: "Technical fixes, on-page, content strategy. Ranking that actually brings buyers.",
                  color: "#7B5CFF",
                },
                {
                  n: "Performance Marketing",
                  d: "Meta and Google ads that don't burn budget. ROAS-first, always.",
                  color: "#1B1200",
                },
                {
                  n: "Keyword Optimization",
                  d: "Deep research and mapping. Every page earns its place in search.",
                  color: "#FFB8C6",
                },
              ].map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-8 rounded-3xl relative overflow-hidden bg-offwhite"
                  style={{ border: "1px solid rgba(27,18,0,0.1)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full mb-6"
                    style={{ backgroundColor: s.color }}
                  />
                  <h3 className="font-display text-3xl mb-3 text-ink">
                    {s.n}
                  </h3>
                  <p className="text-base text-ink-soft">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK TEASER */}
        <section className="py-24 px-6 md:px-10 bg-ink text-cream">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
              <h2 className="font-display text-5xl md:text-7xl leading-none tracking-tight">
                Recent
                <br />
                <span className="italic text-tangerine">work</span>.
              </h2>
              <Link
                href="/work"
                className="text-sm font-semibold underline underline-offset-4"
              >
                All projects →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {CLIENTS.slice(0, 3).map((c, i) => (
                <ClientCard key={c.name} client={c} index={i} dark />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="font-display leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            >
              Got a project?
              <br />
              <span className="italic text-tangerine">Let's build it.</span>
            </h2>
            <p className="mt-6 text-lg max-w-xl mx-auto text-ink-soft">
              First call is free. We'll figure out if we're a fit in 20 minutes.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 rounded-full font-semibold bg-tangerine text-ink transition-transform hover:scale-105"
              >
                WhatsApp us
              </a>
              <Link
                href="/contact"
                className="px-7 py-4 rounded-full font-semibold border-2 border-ink text-ink transition-transform hover:scale-105"
              >
                All ways to reach
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
