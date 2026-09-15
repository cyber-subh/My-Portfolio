import Reveal from "../components/Reveal";

const BUILD_SIDE = [
  ["React", "frontend"],
  ["Node.js", "runtime"],
  ["MongoDB", "data"],
  ["APIs", "integration"],
  ["AI", "applications"],
  ["Web Applications", "product"],
];

const SECURE_SIDE = [
  ["Linux", "environment"],
  ["Networking", "foundation"],
  ["Security", "mindset"],
  ["Threat Detection", "SOC"],
  ["Offensive Security", "goal"],
  ["SOC", "blue team"],
];

export default function BuildBreakSplit() {
  return (
    <section className="py-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Two sides, one engineer
          </h2>
          <p className="text-mid mt-3 max-w-xl mx-auto">
            The same curiosity that makes me want to build software is what makes me want to know how
            it fails.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          <Reveal>
            <p className="font-mono text-xs text-teal mb-4">BUILD SIDE</p>
            <ul className="space-y-3">
              {BUILD_SIDE.map(([name, tag]) => (
                <li key={name} className="glass rounded-lg px-4 py-3 text-sm flex justify-between">
                  <span>{name}</span>
                  <span className="text-low font-mono text-xs">{tag}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="flex md:flex-col items-center justify-center gap-3 py-4">
            <div className="split-line h-16 hidden md:block" />
            <div className="glass rounded-full w-20 h-20 flex items-center justify-center text-center px-2 glow-teal">
              <span className="font-mono text-[10px] text-teal leading-tight">
                BUILD
                <br />
                ↔<br />
                SECURE
              </span>
            </div>
            <div className="split-line h-16 hidden md:block" />
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-mono text-xs text-amber mb-4">BREAK / SECURE SIDE</p>
            <ul className="space-y-3">
              {SECURE_SIDE.map(([name, tag]) => (
                <li key={name} className="glass rounded-lg px-4 py-3 text-sm flex justify-between">
                  <span>{name}</span>
                  <span className="text-low font-mono text-xs">{tag}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal>
          <p className="text-center mt-14 font-display text-xl sm:text-2xl text-teal tracking-tight">
            Build it. Break it. Understand it. Secure it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
