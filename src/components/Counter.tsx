import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CounterProps {
  target: number;
}

export default function Counter({ target }: CounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(shouldReduceMotion ? target : 0);

  useEffect(() => {
    if (!inView || shouldReduceMotion) return;
    const step = Math.max(1, Math.ceil(target / 40));
    let cur = 0;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) {
        cur = target;
        clearInterval(t);
      }
      setValue(cur);
    }, 25);
    return () => clearInterval(t);
  }, [inView, target, shouldReduceMotion]);

  return (
    <p ref={ref} className="mono-num text-3xl sm:text-4xl font-semibold text-teal">
      {value}
    </p>
  );
}
