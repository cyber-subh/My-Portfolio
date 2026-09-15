import Reveal from "../components/Reveal";
import { CONFIG } from "../data/config";

export default function Timeline() {
  return (
    <section className="py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Experience &amp; activities</h2>
        </Reveal>

        <div>
          {CONFIG.timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.03}>
              <div className="grid sm:grid-cols-[140px_1fr] gap-4 py-6 border-t border-white/10 first:border-t-0">
                <p className="font-mono text-xs text-teal">{item.period}</p>
                <div>
                  <p className="font-display font-medium">{item.title}</p>
                  <p className="text-sm text-mid mt-1 leading-relaxed">{item.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
