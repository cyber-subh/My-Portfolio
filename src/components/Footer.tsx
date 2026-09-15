export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-low font-mono">
        <span>© {new Date().getFullYear()} Subhransu Rout</span>
        <span>Built with intent — configured, not faked.</span>
      </div>
    </footer>
  );
}
