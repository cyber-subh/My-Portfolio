import { useState } from "react";
import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";
import { CONFIG } from "../data/config";
import type { Project } from "../data/config";

const FILTERS: { key: "all" | Project["categories"][number]; label: string }[] = [
  { key: "all", label: "All" },
  { key: "cybersecurity", label: "Cybersecurity" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "ai", label: "AI" },
  { key: "websites", label: "Websites" },
];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");

  const filtered = CONFIG.projects.filter((p) => filter === "all" || p.categories.includes(filter));

  return (
    <section id="projects" className="py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Things I've built</h2>
          <p className="text-mid mt-3 max-w-xl">Full-stack products, not just class assignments.</p>
        </Reveal>

        <Reveal className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`tag-filter px-4 py-2 rounded-full text-xs font-mono border border-white/10 ${
                filter === f.key ? "active" : ""
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Tilt key={p.name} className="glass rounded-xl p-6 card-hover">
              <p className="font-display text-lg font-medium">{p.name}</p>
              <p className="text-xs font-mono text-teal mt-1">{p.tag}</p>
              <p className="text-sm text-mid mt-3 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.stack.map((s) => (
                  <span key={s} className="chip px-2.5 py-1 rounded-full border border-white/10 text-low">
                    {s}
                  </span>
                ))}
              </div>
              <a href={p.url} target="_blank" rel="noopener" className="inline-block mt-4 text-xs font-mono text-teal hover:underline">
                View project ↗
              </a>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
