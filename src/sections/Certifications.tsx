import Reveal from "../components/Reveal";
import { CONFIG } from "../data/config";
import type { Certification } from "../data/config";

function CertColumn({
  title,
  color,
  list,
  emptyMsg,
  delay,
}: {
  title: string;
  color: string;
  list: Certification[];
  emptyMsg: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <p className={`font-mono text-xs mb-4 ${color}`}>{title}</p>
      {list.length === 0 ? (
        <p className="text-sm text-low glass rounded-lg px-4 py-4">{emptyMsg}</p>
      ) : (
        <div className="space-y-3">
          {list.map((c) => (
            <div key={c.name} className="glass rounded-lg px-4 py-4 card-hover">
              <p className="font-display font-medium">{c.name}</p>
              <p className="text-xs text-low mt-1">{c.issuer}</p>
              {c.status && <p className="text-xs font-mono text-amber mt-2">{c.status}</p>}
              {!c.status && c.year && <p className="text-xs font-mono text-teal mt-2">{c.year}</p>}
            </div>
          ))}
        </div>
      )}
    </Reveal>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Certifications</h2>
        </Reveal>
        <div className="grid lg:grid-cols-3 gap-8">
          <CertColumn
            title="COMPLETED"
            color="text-teal"
            list={CONFIG.certifications.completed}
            emptyMsg="None yet — verified certifications will appear here."
            delay={0}
          />
          <CertColumn
            title="IN PROGRESS"
            color="text-amber"
            list={CONFIG.certifications.inProgress}
            emptyMsg="Nothing in progress right now."
            delay={0.05}
          />
          <CertColumn
            title="PLANNED"
            color="text-low"
            list={CONFIG.certifications.planned}
            emptyMsg="Nothing planned yet."
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}
