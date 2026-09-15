import { useState } from "react";
import { CONFIG } from "../data/config";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "lab", label: "Cyber Lab" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-semibold tracking-tight text-lg flex items-center gap-2">
            <span className="text-teal font-mono">&gt;_</span> Subhransu<span className="text-teal">.</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${active === item.id ? "active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href={CONFIG.links.resume} target="_blank" rel="noopener" className="text-sm px-4 py-2 rounded-lg btn-ghost">
              Resume
            </a>
            <a href="#contact" className="text-sm px-4 py-2 rounded-lg btn-primary">
              Let's talk
            </a>
          </div>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className="w-5 h-px bg-white block" />
            <span className="w-5 h-px bg-white block" />
          </button>
        </nav>
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? "420px" : "0px", opacity: open ? 1 : 0 }}
        >
          <div className="px-5 pb-5 flex flex-col gap-4 text-sm border-t border-white/10 pt-4">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className="nav-link">
                {item.label}
              </a>
            ))}
            <a
              href={CONFIG.links.resume}
              target="_blank"
              rel="noopener"
              className="text-center mt-2 px-4 py-2 rounded-lg btn-primary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
