"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    function handleMove(e: PointerEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    function tick() {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      if (el) {
        el.style.transform = `translate3d(${currentX - 200}px, ${currentY - 200}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", handleMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[400px] w-[400px] rounded-full opacity-40 mix-blend-screen will-change-transform hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(47,210,255,0.18) 0%, rgba(47,210,255,0.05) 40%, transparent 70%)",
      }}
    />
  );
}
