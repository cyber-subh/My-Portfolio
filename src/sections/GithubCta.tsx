import Reveal from "../components/Reveal";
import { CONFIG } from "../data/config";

export default function GithubCta() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
        <Reveal>
          <p className="font-mono text-xs text-teal mb-4">BUILDING IN PUBLIC</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Follow the repos, not the resume
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-mid mt-4 max-w-lg mx-auto">
            Every project on this site has real, working code behind it — commits and all.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href={CONFIG.links.github}
            target="_blank"
            rel="noopener"
            className="inline-block mt-8 px-6 py-3 rounded-lg btn-primary text-sm"
          >
            View GitHub ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
