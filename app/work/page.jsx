"use client";
import ClientCard from "@/components/ClientCard";
import PageWrapper from "@/components/PageWrapper";
import { CLIENTS } from "@/lib/clients";

export default function WorkPage() {
  return (
    <PageWrapper>
      <div className="pt-28 pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm font-medium mb-4 text-tangerine">
            Selected work
          </div>
          <h1
            className="font-display leading-[0.95] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          >
            Real projects.
            <br />
            <span className="italic text-violet">Real founders</span>.
          </h1>
          <p className="mt-8 text-lg max-w-xl text-ink-soft">
            Click any project to open it live. More case studies with metrics
            and process coming soon.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-x-6 gap-y-12">
            {CLIENTS.map((c, i) => (
              <ClientCard key={c.name} client={c} index={i} />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
