"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import ChromeText from "@/components/ChromeText";
import GalleryGrid from "@/components/GalleryGrid";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <section className="bg-carbon pb-24 pt-36">
      <div className="mx-auto max-w-7xl px-6">
        <RevealOnScroll className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-body text-xs uppercase tracking-widest2 text-ceramic">
            {t.galleryPage.eyebrow}
          </span>
          <h1 className="mt-3 font-display text-5xl uppercase tracking-wide md:text-6xl">
            <ChromeText>{t.galleryPage.heading}</ChromeText>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-chrome-dark">{t.galleryPage.sub}</p>
        </RevealOnScroll>

        <GalleryGrid filters={t.galleryPage.filters} />
      </div>
    </section>
  );
}
