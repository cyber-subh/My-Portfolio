import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import { CONFIG } from "../data/config";

export default function Dashboard() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="grid grid-cols-2 lg:grid-cols-5 gap-4 text-center">
          {CONFIG.dashboard.map((stat) => (
            <div key={stat.label} className="glass rounded-xl py-6">
              <Counter target={stat.value} />
              <p className="text-xs text-low mt-2">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
