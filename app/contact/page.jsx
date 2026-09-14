"use client";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { WHATSAPP, WHATSAPP_PREFILLED } from "@/lib/clients";

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="pt-28 pb-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-medium mb-4 text-tangerine">Contact</div>
          <h1
            className="font-display leading-[0.95] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          >
            Let's <span className="italic text-violet">talk</span>.
          </h1>
          <p className="mt-8 text-lg max-w-xl text-ink-soft">
            Pick whichever's easiest. WhatsApp is fastest — we usually reply
            within a few hours.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-4">
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl block bg-tangerine text-ink"
            >
              <div className="font-display text-3xl mb-2">WhatsApp</div>
              <div className="text-sm opacity-80 mb-6">
                Fastest, usually a few hours
              </div>
              <div className="font-semibold">+91 91370 61147</div>
            </motion.a>

            <motion.a
              href="tel:+919137061147"
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl block bg-violet text-cream"
            >
              <div className="font-display text-3xl mb-2">Call</div>
              <div className="text-sm opacity-80 mb-6">
                If you'd rather talk
              </div>
              <div className="font-semibold text-sm">+91 91370 61147</div>
              <div className="font-semibold text-sm mt-1">+91 72057 46006</div>
            </motion.a>

            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl block bg-ink text-cream"
            >
              <div className="font-display text-3xl mb-2">Email</div>
              <div className="text-sm opacity-80 mb-6">
                Longer projects, files, briefs
              </div>
              <div className="font-semibold text-sm opacity-70">
                Coming shortly
              </div>
            </motion.div>
          </div>

          <div
            className="mt-20 p-8 md:p-12 rounded-3xl relative overflow-hidden bg-offwhite"
            style={{ border: "1px solid rgba(27,18,0,0.15)" }}
          >
            <div className="relative">
              <h3 className="font-display text-3xl md:text-4xl mb-4 text-ink">
                Not sure what you need?
              </h3>
              <p className="max-w-lg mb-6 text-ink-soft">
                Send us a WhatsApp with a rough idea — even "I need a website
                but don't know where to start" is fine. We'll figure out the
                shape of it on a call.
              </p>
              <a
                href={WHATSAPP_PREFILLED}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-3 rounded-full font-semibold bg-ink text-cream"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
