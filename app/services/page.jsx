"use client";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { WHATSAPP } from "@/lib/clients";

const SERVICES = [
  {
    title: "Website Development",
    tag: "Build",
    body: "From landing pages to full custom Next.js and headless Shopify builds. Fast load times, clean code, and everything set up to be found and to convert. No page builder bloat.",
    details: [
      "Next.js / React",
      "Shopify headless",
      "Razorpay & payment integrations",
      "CMS setup (Sanity, Contentful)",
    ],
  },
  {
    title: "SEO",
    tag: "Rank",
    body: "Technical SEO audits, on-page optimization, content structure, and internal linking. We fix what's broken and build what's missing — so you rank for terms that actually bring buyers.",
    details: [
      "Technical audit & fixes",
      "On-page optimization",
      "Schema & structured data",
      "Content strategy",
    ],
  },
  {
    title: "Performance Marketing",
    tag: "Scale",
    body: "Meta and Google ads run with a ROAS-first head. Full-funnel setup, creative iteration, and weekly reporting you can actually read.",
    details: [
      "Meta ads (IG + FB)",
      "Google Ads & Shopping",
      "Landing page CRO",
      "Weekly reporting",
    ],
  },
  {
    title: "Keyword Optimization",
    tag: "Research",
    body: "Deep keyword research mapped page-by-page. Search intent, competition, opportunity gaps — the whole map, not just a list.",
    details: [
      "Keyword research",
      "Intent mapping",
      "Competitor analysis",
      "Content briefs",
    ],
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "₹25,000+",
    forWhom: "Solo founders, side projects",
    incl: [
      "Landing page (up to 5 sections)",
      "Mobile-first responsive",
      "Basic on-page SEO",
      "1 revision round",
    ],
    bg: "#FFFAF0",
  },
  {
    name: "Growth",
    price: "₹75,000+",
    forWhom: "Small businesses ready to scale",
    incl: [
      "Full website (up to 8 pages)",
      "Complete SEO setup",
      "Meta/Google ads initial setup",
      "CMS integration",
      "2 revision rounds",
    ],
    bg: "#FFF1C9",
    featured: true,
  },
  {
    name: "Scale",
    price: "Let's talk",
    forWhom: "Serious brands, e-commerce, custom builds",
    incl: [
      "Custom Next.js / headless Shopify",
      "Ongoing SEO retainer option",
      "Full performance marketing",
      "Analytics & CRO",
      "Priority support",
    ],
    bg: "#1B1200",
    dark: true,
  },
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <div className="pt-28 pb-24">
        <section className="px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-sm font-medium mb-4 text-tangerine">
              Services
            </div>
            <h1
              className="font-display leading-[0.95] tracking-tight max-w-4xl text-ink"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              What we <span className="italic text-violet">do</span>, in detail.
            </h1>
            <p className="mt-8 text-lg md:text-xl max-w-2xl text-ink-soft">
              We're small on purpose. Every project is handled directly by the
              people who build it — no account managers, no PDF theatre.
            </p>
          </div>
        </section>

        <section className="mt-20 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            {SERVICES.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-12 gap-6 py-12 border-t"
                style={{ borderColor: "rgba(27,18,0,0.25)" }}
              >
                <div className="md:col-span-3">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-ink text-cream">
                    {s.tag}
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl mt-4 leading-none text-ink">
                    {s.title.split(" ").map((word, wi) => (
                      <div key={wi}>{word}</div>
                    ))}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-lg leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <ul className="space-y-2">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="text-sm flex items-start gap-2 text-ink"
                      >
                        <span className="text-tangerine">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
            <div className="border-t" style={{ borderColor: "rgba(27,18,0,0.25)" }} />
          </div>
        </section>

        {/* PACKAGES */}
        <section className="mt-24 px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <div className="text-sm font-medium mb-3 text-tangerine">
                  Packages
                </div>
                <h2 className="font-display text-5xl md:text-6xl leading-none text-ink">
                  Ballpark, not final.
                </h2>
                <p className="mt-4 text-base max-w-lg text-ink-soft">
                  Every project is different. These are starting points —
                  actual scope, tech, and timeline are locked on the first
                  call.
                </p>
              </div>
            </div>

            <div
              className="rounded-3xl overflow-hidden border-2"
              style={{ borderColor: "#1B1200" }}
            >
              {PACKAGES.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid md:grid-cols-12 gap-4 p-8 md:p-10 border-b-2 last:border-b-0 relative"
                  style={{
                    backgroundColor: p.bg,
                    color: p.dark ? "#FFF1C9" : "#1B1200",
                    borderColor: "#1B1200",
                  }}
                >
                  {p.featured && (
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold bg-tangerine text-ink">
                      Most projects start here
                    </div>
                  )}
                  <div className="md:col-span-3">
                    <div className="font-display text-4xl md:text-5xl leading-none">
                      {p.name}
                    </div>
                    <div className="mt-3 text-sm opacity-80">{p.forWhom}</div>
                  </div>
                  <div className="md:col-span-6">
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {p.incl.map((item) => (
                        <li
                          key={item}
                          className="text-sm flex items-start gap-2"
                        >
                          <span className="text-tangerine">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <div className="font-display text-3xl md:text-4xl">
                      {p.price}
                    </div>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block px-4 py-2 rounded-full text-sm font-semibold border-2"
                      style={{
                        borderColor: p.dark ? "#FFF1C9" : "#1B1200",
                        color: p.dark ? "#FFF1C9" : "#1B1200",
                      }}
                    >
                      Enquire
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
