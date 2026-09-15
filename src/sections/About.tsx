import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";

const LOOP = ["Learn", "Build", "Break", "Fix", "Secure", "Repeat ↺"];

const IDENTITY_CARDS = [
  { label: "BUILD", title: "Full-Stack Applications", color: "text-teal" },
  { label: "BREAK", title: "Security & Vulnerability Thinking", color: "text-amber" },
  { label: "SECURE", title: "Cybersecurity & Defensive Concepts", color: "text-cyan" },
  { label: "CREATE", title: "AI + Vibe Coding", color: "text-teal" },
];

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">About</h2>
            <p className="mt-6 text-mid leading-relaxed">
              I'm a BCA student building a career at the intersection of cybersecurity, software
              development, and AI. I like taking an idea and turning it into something that actually
              runs — then poking at it until I understand how it could break.
            </p>
            <p className="mt-4 text-mid leading-relaxed">
              I build websites and full-stack applications, experiment with AI-assisted development,
              and in parallel I'm developing practical cybersecurity skills. My strongest interest is
              Offensive Security and Red Teaming, while I'm also studying defensive security, SOC
              operations, threat detection, and Microsoft Security tooling.
            </p>
            <p className="mt-4 text-mid leading-relaxed">
              Currently pursuing a Bachelor of Computer Applications (BCA) in Odisha, India — expected
              graduation 2027. Everything on this site is framed honestly: what I've built, what I'm
              practicing, and what I'm still learning.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-mono text-xs text-low mb-4">MY LEARNING LOOP</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center mb-8">
              {LOOP.map((step) => (
                <div key={step} className="glass rounded-lg py-3 text-xs font-mono text-teal">
                  {step}
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {IDENTITY_CARDS.map((card) => (
                <Tilt key={card.label} className="glass rounded-xl p-5 card-hover">
                  <p className={`text-xs font-mono mb-2 ${card.color}`}>{card.label}</p>
                  <p className="font-display font-medium">{card.title}</p>
                </Tilt>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
