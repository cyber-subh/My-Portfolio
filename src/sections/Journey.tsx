import Reveal from "../components/Reveal";
import { CONFIG } from "../data/config";
import type { JourneyStep } from "../data/config";

const STYLE: Record<JourneyStep["status"], { dot: string; text: string; badge: string }> = {
  done: { dot: "bg-teal", text: "text-hi", badge: "Completed" },
  current: { dot: "bg-amber", text: "text-hi", badge: "In progress" },
  upcoming: { dot: "bg-[#4d5652]", text: "text-low", badge: "Upcoming" },
  goal: { dot: "bg-cyan", text: "text-cyan", badge: "Long-term goal" },
};

export default function Journey() {
  return (
    <section id="journey" className="py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Cybersecurity journey</h2>
          <p className="text-mid mt-3 max-w-xl">Where I am, honestly — not where I'll pretend to be.</p>
        </Reveal>

        <div className="relative">
          {CONFIG.journey.map((step, i) => {
            const s = STYLE[step.status];
            return (
              <Reveal key={step.label} delay={i * 0.03} className="flex items-start gap-4 pb-8 relative">
                <>
                  {i < CONFIG.journey.length - 1 && (
                    <div className="absolute left-[7px] top-5 bottom-0 w-px bg-white/10" />
                  )}
                  <span
                    className={`w-4 h-4 rounded-full ${s.dot} mt-1 shrink-0`}
                    style={{ boxShadow: "0 0 10px rgba(61,220,151,0.25)" }}
                  />
                  <div>
                    <p className={`font-display font-medium ${s.text}`}>{step.label}</p>
                    <p className="text-xs font-mono text-low mt-1">{s.badge}</p>
                  </div>
                </>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
