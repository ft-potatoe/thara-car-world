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

const items: GalleryItem[] = Array.from({ length: 12 }, (_, i) => {
  const n = i + 1;
  const categories: Category[] = ["exterior", "interior", "ceramic"];
  const category = categories[n % 3];
  return {
    id: `gallery-${n}`,
    // PLACEHOLDER — replace with real gallery photo for this slot
    src: `/placeholder-gallery-${String(n).padStart(2, "0")}.svg`,
    alt: `Placeholder: ${category} detailing work sample ${n}`,
    category,
  };
});

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
