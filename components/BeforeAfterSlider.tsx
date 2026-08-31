"use client";

import { useRef, useState, type PointerEvent } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }

  function handlePointerDown(e: PointerEvent<HTMLDivElement>) {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  }

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  }

  function handlePointerUp() {
    dragging.current = false;
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-white/10 shadow-glow-ceramic-sm"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* PLACEHOLDER — replace with real "after" detailing photo */}
      <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {/* PLACEHOLDER — replace with real "before" detailing photo */}
        <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
      </div>

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-ceramic shadow-glow-ceramic-sm"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ceramic shadow-glow-ceramic flex items-center justify-center cursor-ew-resize">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3L1 8L5 13" stroke="#0A0A0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 3L15 8L11 13" stroke="#0A0A0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-carbon/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-chrome-light backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-ceramic/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-carbon backdrop-blur-sm">
        {afterLabel}
      </span>
    </div>
  );
}
