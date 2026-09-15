import { useState } from "react";
import Reveal from "../components/Reveal";
import { CONFIG } from "../data/config";

const TECH = ["Python", "FastAPI", "Claude AI", "Synthetic Security Logs", "MITRE ATT&CK", "REST API"];

const CAPABILITIES = [
  "Log analysis",
  "Event correlation",
  "Threat identification",
  "MITRE ATT&CK mapping",
  "AI-assisted investigation",
  "Incident report generation",
  "Chat interface",
  "API endpoint",
];

export default function HawkProject() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section id="hawk" className="py-28 border-t border-white/10 relative">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      <div className="max-w-6xl mx-auto px-5 md:px-8 relative">
        <Reveal className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <p className="font-mono text-xs text-teal">FLAGSHIP PROJECT · CYBERSECURITY + AI</p>
          <div className="flex gap-3">
            <a href={CONFIG.links.hawkProjectUrl} target="_blank" rel="noopener" className="px-4 py-2 rounded-lg btn-primary text-xs">
              View Project
            </a>
            <a href={CONFIG.links.hawkGithubUrl} target="_blank" rel="noopener" className="px-4 py-2 rounded-lg btn-ghost text-xs">
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">HAWK AI</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-mid mt-2 text-lg">AI SOC Analyst Copilot</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-mid mt-5 max-w-2xl leading-relaxed">
            An AI-powered SOC analyst assistant designed to analyze security logs, correlate suspicious
            events, map activity to MITRE ATT&amp;CK techniques, and generate structured incident reports.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-wrap gap-2 mt-6">
          {TECH.map((t) => (
            <span key={t} className="chip glass px-3 py-1.5 rounded-full text-teal">
              {t}
            </span>
          ))}
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <Reveal delay={0.1}>
            <p className="font-mono text-xs text-low mb-5">ARCHITECTURE — click a stage</p>
            <div className="flex flex-col items-center gap-0">
              {CONFIG.hawkArchitecture.map((stage, i) => (
                <div key={stage.label} className="w-full flex flex-col items-center">
                  <button
                    onClick={() => setActiveStage(i)}
                    className={`w-full max-w-xs glass rounded-lg px-5 py-3 text-sm text-left card-hover ${
                      activeStage === i ? "glow-teal" : ""
                    }`}
                  >
                    {stage.label}
                  </button>
                  {i < CONFIG.hawkArchitecture.length - 1 && <div className="flow-line" />}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-mono text-xs text-low mb-5">CAPABILITIES</p>
            <div className="grid grid-cols-2 gap-3">
              {CAPABILITIES.map((c) => (
                <div key={c} className="glass rounded-lg p-4 text-sm card-hover">
                  {c}
                </div>
              ))}
            </div>
            <div className="mt-5 glass rounded-lg p-4 text-sm text-mid min-h-[64px] border-l-2 border-teal">
              {activeStage === null
                ? "Click any stage in the architecture diagram to see what happens there."
                : CONFIG.hawkArchitecture[activeStage].detail}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
