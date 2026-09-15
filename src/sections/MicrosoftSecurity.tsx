import Reveal from "../components/Reveal";

const TOPICS = [
  "Microsoft Defender XDR",
  "Microsoft Defender",
  "Defender for Endpoint",
  "Defender for Identity",
  "Defender for Cloud Apps",
  "Entra ID Protection",
  "Microsoft Sentinel",
  "KQL",
  "Security Copilot",
  "Incident Investigation",
];

export default function MicrosoftSecurity() {
  return (
    <section className="py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14">
          <Reveal>
            <p className="font-mono text-xs text-cyan mb-4">SECURITY OPERATIONS &amp; MICROSOFT SECURITY</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">SC-200 track</h2>
            <p className="text-mid mt-5 leading-relaxed">Microsoft Security Operations Analyst</p>
            <div className="mt-4 inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-mono text-amber">
              <span className="w-[7px] h-[7px] rounded-full bg-amber inline-block" /> IN PROGRESS / PREPARING
            </div>
          </Reveal>
          <Reveal delay={0.1} className="grid sm:grid-cols-2 gap-3">
            {TOPICS.map((topic) => (
              <div key={topic} className="glass rounded-lg px-4 py-3 text-sm card-hover">
                {topic}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
