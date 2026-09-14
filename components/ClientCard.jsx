"use client";
import { motion } from "framer-motion";

export default function ClientCard({ client, index, dark = false }) {
  const isPlaceholder = client.placeholder;
  const lightBadge =
    client.color === "#FFB8C6" || client.color === "#F5C542";

  return (
    <motion.a
      href={client.url || "#"}
      target={client.url ? "_blank" : undefined}
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="block group cursor-pointer"
    >
      <div
        className="rounded-2xl overflow-hidden border transition-transform group-hover:-translate-y-1"
        style={{
          borderColor: dark ? "rgba(255,241,201,0.2)" : "rgba(27,18,0,0.15)",
          backgroundColor: dark ? "#2A1F0A" : "#FFFAF0",
        }}
      >
        {/* Browser bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ backgroundColor: dark ? "#1F1608" : "#F5E9B8" }}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5B5B]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <div
            className="flex-1 mx-3 text-xs px-3 py-1 rounded-md truncate"
            style={{
              backgroundColor: dark ? "#1B1200" : "#FFF1C9",
              color: dark ? "#FFF1C9" : "#4A3E20",
            }}
          >
            {client.url
              ? client.url.replace(/https?:\/\//, "")
              : "velora.studio/upcoming"}
          </div>
        </div>

        {/* Preview */}
        <div
          className="aspect-[4/3] relative overflow-hidden flex items-center justify-center"
          style={{
            backgroundColor: client.color,
            backgroundImage: `linear-gradient(135deg, ${client.color}, ${client.color}dd)`,
          }}
        >
          {!isPlaceholder ? (
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <span
                className="font-display text-4xl md:text-5xl text-center leading-tight"
                style={{ color: lightBadge ? "#1B1200" : "#FFF1C9" }}
              >
                {client.name}
              </span>
            </motion.div>
          ) : (
            <div className="text-center">
              <div className="font-display text-4xl italic text-cream">+</div>
              <div className="text-sm mt-2 text-cream">Coming soon</div>
            </div>
          )}
        </div>
      </div>

      {/* Meta */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <div
            className="font-display text-xl"
            style={{ color: dark ? "#FFF1C9" : "#1B1200" }}
          >
            {client.name}
          </div>
          <div
            className="text-sm mt-0.5"
            style={{ color: dark ? "rgba(255,241,201,0.5)" : "#4A3E20" }}
          >
            {client.role}
          </div>
        </div>
        {client.url && (
          <div className="text-xs font-semibold pt-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-tangerine">
            Visit ↗
          </div>
        )}
      </div>
    </motion.a>
  );
}
