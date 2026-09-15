import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";
import Terminal from "../components/Terminal";
import { CONFIG } from "../data/config";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center relative">
        <div>
          <Reveal className="flex items-center gap-2 text-xs font-mono text-mid mb-6">
            <span className="w-[7px] h-[7px] rounded-full bg-teal shadow-[0_0_8px_var(--color-teal)] inline-block" />
            open to cybersecurity &amp; dev opportunities
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-semibold text-[2.6rem] sm:text-6xl leading-[1.05] tracking-tight">
              I Build.
              <br />
              I Break.
              <br />
              I Secure.
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 text-lg text-mid font-medium">
            Cybersecurity Engineer in the Making · Full-Stack Developer · AI Builder
          </Reveal>
          <Reveal delay={0.15} className="mt-4 text-base text-low max-w-lg leading-relaxed">
            Building modern web applications, experimenting with AI, and developing practical
            cybersecurity skills — with a long-term focus on Offensive Security and Red Teaming.
          </Reveal>
          <Reveal delay={0.2} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg btn-primary text-sm">
              Explore My Work
            </a>
            <a href={CONFIG.links.resume} target="_blank" rel="noopener" className="px-5 py-3 rounded-lg btn-ghost text-sm">
              View Resume
            </a>
          </Reveal>
          <Reveal delay={0.25} className="mt-6 flex gap-5 text-sm text-mid">
            <a href={CONFIG.links.github} target="_blank" rel="noopener" className="hover:text-teal transition-colors">
              GitHub ↗
            </a>
            <a href={CONFIG.links.linkedin} target="_blank" rel="noopener" className="hover:text-teal transition-colors">
              LinkedIn ↗
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Tilt className="rounded-xl">
            <Terminal />
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
