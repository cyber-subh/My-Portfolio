import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const LINES: { cmd: string; out: string[] }[] = [
  { cmd: "whoami", out: ["Subhransu Rout"] },
  { cmd: "role", out: ["Cybersecurity Learner", "Full-Stack Developer", "AI Builder"] },
  { cmd: "focus", out: ["Offensive Security / Red Team"] },
  { cmd: "stack", out: ["MERN · Python · FastAPI · Linux · AI"] },
  { cmd: "currently", out: ["Building + Learning + Breaking + Securing"] },
];

interface RenderedLine {
  cmd: string;
  out: string[];
}

export default function Terminal() {
  const shouldReduceMotion = useReducedMotion();
  const [rendered, setRendered] = useState<RenderedLine[]>(shouldReduceMotion ? LINES : []);
  const [typingCmd, setTypingCmd] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;
    let cancelled = false;

    async function run() {
      for (const line of LINES) {
        if (cancelled) return;
        for (let i = 1; i <= line.cmd.length; i++) {
          if (cancelled) return;
          setTypingCmd(line.cmd.slice(0, i));
          await sleep(38);
        }
        await sleep(200);
        const revealedOut: string[] = [];
        for (const outLine of line.out) {
          if (cancelled) return;
          revealedOut.push(outLine);
          setRendered((prev) => [...prev.filter((l) => l.cmd !== line.cmd), { cmd: line.cmd, out: [...revealedOut] }]);
          await sleep(260);
        }
        setTypingCmd("");
        await sleep(350);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [rendered, typingCmd]);

  return (
    <div className="glass rounded-xl overflow-hidden glow-teal">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#e0725f]" />
        <span className="w-3 h-3 rounded-full bg-amber" />
        <span className="w-3 h-3 rounded-full bg-teal" />
        <span className="ml-3 text-xs font-mono text-low">subhransu@portfolio:~</span>
      </div>
      <div
        ref={bodyRef}
        className="p-5 font-mono text-[13px] sm:text-sm leading-relaxed h-[340px] sm:h-[380px] overflow-y-auto"
      >
        {rendered.map((line, i) => (
          <div key={i} className="mb-4">
            <div>
              <span className="text-teal">$</span> <span className="text-hi">{line.cmd}</span>
            </div>
            {line.out.map((o, j) => (
              <div key={j} className="text-mid pl-4">
                {o}
              </div>
            ))}
          </div>
        ))}
        {!shouldReduceMotion && typingCmd && (
          <div className="mb-4">
            <span className="text-teal">$</span> <span className="text-hi">{typingCmd}</span>
            <span className="inline-block w-2 h-[1.1em] bg-teal ml-0.5 align-middle animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
