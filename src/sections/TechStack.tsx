import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";
import { CONFIG } from "../data/config";
import type { SkillStatus } from "../data/config";

const STATUS_COLOR: Record<SkillStatus, string> = {
  building: "bg-teal",
  practicing: "bg-cyan",
  learning: "bg-amber",
  familiar: "bg-[#8b9894]",
  exploring: "bg-[#4d5652]",
};

const LEGEND: { status: SkillStatus; label: string }[] = [
  { status: "building", label: "Building" },
  { status: "practicing", label: "Practicing" },
  { status: "learning", label: "Learning" },
  { status: "familiar", label: "Familiar" },
  { status: "exploring", label: "Exploring" },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Technology ecosystem
          </h2>
          <p className="text-mid mt-3 max-w-xl">
            No invented percentages — every label reflects where I actually am with a tool.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONFIG.stack.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 0.05}>
              <Tilt className="glass rounded-xl p-6 card-hover h-full">
                <p className="font-display font-medium mb-4">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(([name, status]) => (
                    <span
                      key={name}
                      className="chip flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-mid"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${STATUS_COLOR[status]}`} />
                      {name}
                    </span>
                  ))}
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-wrap gap-4 text-xs font-mono text-low">
          {LEGEND.map((item) => (
            <span key={item.status} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${STATUS_COLOR[item.status]}`} />
              {item.label}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
