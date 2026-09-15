import Reveal from "../components/Reveal";
import { CONFIG } from "../data/config";

export default function ResumeCta() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center glass rounded-2xl py-16">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Want the full picture?</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={CONFIG.links.resume} target="_blank" rel="noopener" className="px-6 py-3 rounded-lg btn-primary text-sm">
            Download Resume
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg btn-ghost text-sm">
            Contact Me
          </a>
        </Reveal>
      </div>
    </section>
  );
}
