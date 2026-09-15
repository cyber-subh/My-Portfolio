import Reveal from "../components/Reveal";
import { CONFIG } from "../data/config";

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-14">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              Let's Build
              <br />
              Something.
            </h2>
            <p className="text-mid mt-6 max-w-md leading-relaxed">
              Open to cybersecurity internships, development opportunities, collaborations,
              hackathons, security projects, and opportunities to learn and build.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-4">
            <a href={`mailto:${CONFIG.links.email}`} className="flex items-center justify-between glass rounded-xl px-5 py-4 card-hover">
              <span className="text-sm">Email</span>
              <span className="font-mono text-sm text-teal">{CONFIG.links.email}</span>
            </a>
            <a href={CONFIG.links.github} target="_blank" rel="noopener" className="flex items-center justify-between glass rounded-xl px-5 py-4 card-hover">
              <span className="text-sm">GitHub</span>
              <span className="font-mono text-sm text-teal">↗</span>
            </a>
            <a href={CONFIG.links.linkedin} target="_blank" rel="noopener" className="flex items-center justify-between glass rounded-xl px-5 py-4 card-hover">
              <span className="text-sm">LinkedIn</span>
              <span className="font-mono text-sm text-teal">↗</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
