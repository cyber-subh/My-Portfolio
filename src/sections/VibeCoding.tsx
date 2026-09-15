import Reveal from "../components/Reveal";
import { CONFIG } from "../data/config";

export default function VibeCoding() {
  return (
    <section id="vibe" className="py-28 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-center">
          <Reveal>
            <p className="font-mono text-xs text-teal mb-4">FROM IDEA → WORKING PRODUCT</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              Vibe coding, seriously
            </h2>
            <p className="text-mid mt-5 leading-relaxed">
              Rapidly turning ideas into working products using AI-assisted development,
              experimentation, and iterative problem solving.
            </p>
            <p className="text-mid mt-4 leading-relaxed">
              I enjoy using AI-assisted development to move quickly from an idea to a working product.
              The goal isn't to blindly generate code — it's to understand, test, debug, improve, and
              ship.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="chip glass px-3 py-1.5 rounded-full text-mid">Idea → Prototype in hours</span>
              <span className="chip glass px-3 py-1.5 rounded-full text-mid">Human-reviewed, not auto-shipped</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-0">
              {CONFIG.vibeFlow.map((step, i) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="glass rounded-lg px-5 py-3 text-sm font-mono text-center w-full">{step}</div>
                  {i < CONFIG.vibeFlow.length - 1 && <div className="flow-line" />}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
