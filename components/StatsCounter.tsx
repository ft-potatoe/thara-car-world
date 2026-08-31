"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-chrome-light">
      {display}
      <span className="text-ceramic">{suffix}</span>
    </span>
  );
}

export default function StatsCounter({
  items,
}: {
  items: readonly { value: number; suffix: string; label: string; placeholder: boolean }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="relative flex flex-col items-center text-center"
        >
          <Counter value={item.value} suffix={item.suffix} />
          <span className="mt-2 font-body text-xs uppercase tracking-widest2 text-chrome-dark">
            {item.label}
          </span>
          {item.placeholder && (
            <span className="mt-1 text-[10px] uppercase tracking-wider text-racing/70">
              placeholder figure
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
