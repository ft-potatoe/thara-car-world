"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "exterior" | "interior" | "ceramic";

type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: Category;
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`;

const items: GalleryItem[] = [
  { id: "gallery-01", src: unsplash("1520340356584-f9917d1eea6f"), alt: "Sports car exterior rinse, water beading on dark paint", category: "exterior" },
  { id: "gallery-02", src: unsplash("1607860108855-64acf2078ed9"), alt: "Detailer hand-washing a black car exterior", category: "exterior" },
  { id: "gallery-03", src: unsplash("1620584899131-a5ff5f8fbb03"), alt: "SUV exterior covered in wash foam", category: "exterior" },
  { id: "gallery-04", src: unsplash("1605164598708-25701594473e"), alt: "Sedan exterior foam wash under wash-bay lighting", category: "exterior" },
  { id: "gallery-05", src: unsplash("1605437241278-c1806d14a4d9"), alt: "Luxury sedan black leather interior and dashboard", category: "interior" },
  { id: "gallery-06", src: unsplash("1629019878500-302b516de84c"), alt: "Open car door showing detailed tan leather interior", category: "interior" },
  { id: "gallery-07", src: unsplash("1583573278124-e8d4fd3edf3c"), alt: "Car interior dashboard and steering wheel detail", category: "interior" },
  { id: "gallery-08", src: unsplash("1549064233-945d7063292f"), alt: "Sports car red leather interior detailing", category: "interior" },
  { id: "gallery-09", src: unsplash("1714434087918-4b9abedef3c6"), alt: "Close-up of glossy ceramic-coated black car hood", category: "ceramic" },
  { id: "gallery-10", src: unsplash("1708805282676-0c15476eb8a2"), alt: "Detailer applying ceramic coating to a car panel", category: "ceramic" },
  { id: "gallery-11", src: unsplash("1711513503808-53380d724182"), alt: "Red coupe with deep ceramic-coated gloss finish", category: "ceramic" },
  { id: "gallery-12", src: unsplash("1750800668889-aa4c851bd7a8"), alt: "Detailer buffing ceramic coating on a car headlight area", category: "ceramic" },
];

export default function GalleryGrid({
  filters,
}: {
  filters: { all: string; exterior: string; interior: string; ceramic: string };
}) {
  const [active, setActive] = useState<"all" | Category>("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filterOptions: { key: "all" | Category; label: string }[] = [
    { key: "all", label: filters.all },
    { key: "exterior", label: filters.exterior },
    { key: "interior", label: filters.interior },
    { key: "ceramic", label: filters.ceramic },
  ];

  const filtered = active === "all" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filterOptions.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setActive(opt.key)}
            className={cn(
              "rounded-full border px-5 py-2 font-body text-sm uppercase tracking-wider transition-colors",
              active === opt.key
                ? "border-ceramic bg-ceramic/10 text-ceramic"
                : "border-white/15 text-chrome-dark hover:border-white/30 hover:text-chrome-light"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightbox(item)}
              className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-white/10 break-inside-avoid"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-carbon/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <span className="p-4 font-body text-xs uppercase tracking-widest2 text-chrome-light">
                  {item.category}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-carbon/95 p-6 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute right-6 top-6 text-chrome-light transition-colors hover:text-ceramic"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[80vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={1200}
                className="max-h-[80vh] w-auto rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
