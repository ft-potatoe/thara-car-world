"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function TiltCard({
  children,
  className,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const px = useMotionValue(50);
  const py = useMotionValue(50);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
  const glowBackground = useTransform([px, py], ([latestX, latestY]) =>
    `radial-gradient(300px circle at ${latestX}% ${latestY}%, rgba(47,210,255,0.18), transparent 60%)`
  );

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    x.set(nx - 0.5);
    y.set(ny - 0.5);
    px.set(nx * 100);
    py.set(ny * 100);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 800 }}
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-panel/80 backdrop-blur-sm overflow-hidden",
        "transition-shadow duration-300 hover:shadow-glow-ceramic-sm",
        className
      )}
    >
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glowBackground }}
        />
      )}
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </motion.div>
  );
}
