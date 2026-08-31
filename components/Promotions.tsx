"use client";

import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

const promoImages = [
  { src: "/gallery/1.jpg", alt: "Thara Car World premium quality detailing promotion" },
  { src: "/gallery/4.jpg", alt: "Thara Car World 3D floor mat installation promotion" },
  { src: "/gallery/5.jpg", alt: "Thara Car World nano ceramic premium tints promotion" },
  { src: "/gallery/6.jpg", alt: "Thara Car World window tinting promotion" },
];

export default function Promotions() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {promoImages.map((promo, i) => (
        <RevealOnScroll key={promo.src} delay={i * 0.1}>
          <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={promo.src}
              alt={promo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
