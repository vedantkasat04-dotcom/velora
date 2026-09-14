"use client";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

const STEPS = [
  {
    t: "Talk first.",
    d: "20-minute call, no slide deck. We understand what you're building and whether we're the right team for it.",
  },
  {
    t: "Scope honestly.",
    d: "You get a clear proposal — what we're doing, what we're not, how long, how much. No surprises.",
  },
  {
    t: "Ship in weeks, not months.",
    d: "Small team, tight loop. You see progress every few days, not at the end of a quarter.",
  },
  {
    t: "Stay involved.",
    d: "After launch, we're still around for iterations, ads, and whatever grows next. Optional retainer, not required.",
  },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="pt-28 pb-24">
        <section className="px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-medium mb-4 text-tangerine">About</div>
            <h1
              className="font-display leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              A small studio,
              <br />
              <span className="italic text-violet">on purpose</span>.
            </h1>

            <div className="mt-16 grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-ink-soft">
                <p>
                  Velora is run by{" "}
                  <span className="text-ink font-semibold">
                    Vedant Kasat (King)
                  </span>{" "}
                  — a BBA student, founder, and developer based in Bangalore.
                  We build websites and run marketing for founders who are
                  done with agency slowness and template thinking.
                </p>
                <p>
                  The studio grew out of shipping real products — an
                  e-commerce brand, a community platform, a bakery
                  storefront, an ed-tech site — one after another. Every
                  project taught us something about what actually works on
                  the internet in 2026, and what doesn't.
                </p>
                <p>
                  We stay small on purpose. Direct communication, honest
                  scoping, and code you'd actually be happy to inherit six
                  months later.
                </p>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="font-display text-5xl text-tangerine">5+</div>
                  <div className="text-sm mt-1 text-ink-soft">
                    Projects shipped
                  </div>
                </div>
                <div>
                  <div className="font-display text-5xl text-violet">2026</div>
                  <div className="text-sm mt-1 text-ink-soft">Studio year</div>
                </div>
                <div>
                  <div className="font-display text-5xl text-ink">BLR</div>
                  <div className="text-sm mt-1 text-ink-soft">
                    Based in Bangalore
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24">
              <h2 className="font-display text-4xl md:text-5xl mb-8 text-ink">
                The way we work.
              </h2>
              <div className="space-y-6">
                {STEPS.map((step, i) => (
                  <motion.div
                    key={step.t}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-6 py-4 border-b"
                    style={{ borderColor: "rgba(27,18,0,0.15)" }}
                  >
                    <div
                      className="font-display text-3xl italic text-tangerine"
                      style={{ minWidth: "3rem" }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-display text-2xl mb-1 text-ink">
                        {step.t}
                      </div>
                      <div className="text-ink-soft">{step.d}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
