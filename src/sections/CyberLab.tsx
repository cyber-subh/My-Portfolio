import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";
import { CONFIG } from "../data/config";
import type { LabArea } from "../data/config";

export default function CyberLab() {
  const [active, setActive] = useState<LabArea | null>(null);

  return (
    <section id="lab" className="py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Cyber Lab</h2>
          <p className="text-mid mt-3 max-w-xl">Click a card to see what I'm learning, practicing, and using.</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONFIG.cyberLab.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 0.05}>
              <Tilt className="glass rounded-xl p-6 card-hover cursor-pointer" >
                <button className="text-left w-full" onClick={() => setActive(area)}>
                  <p className="font-display font-medium">{area.title}</p>
                  <p className="text-xs text-low mt-2">Click to expand</p>
                </button>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70" onClick={() => setActive(null)} />
            <motion.div
              className="relative glass rounded-xl max-w-lg w-full p-6 glow-teal"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <button
                className="absolute top-4 right-4 text-low hover:text-white text-lg"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                ✕
              </button>
              <p className="font-display text-2xl font-semibold mb-4">{active.title}</p>
              <div className="space-y-4 text-sm text-mid">
                <div>
                  <p className="text-xs font-mono text-teal mb-1">LEARNING</p>
                  <p>{active.learning}</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-cyan mb-1">PRACTICING</p>
                  <p>{active.practicing}</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-amber mb-1">TOOLS</p>
                  <p>{active.tools}</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-low mb-1">RELATED PROJECT</p>
                  <p>{active.related}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
