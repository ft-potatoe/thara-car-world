"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ChromeText from "./ChromeText";
import GlowButton from "./GlowButton";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-carbon">
      {/* PLACEHOLDER — replace with real hero video/image: car mid-detail, water beading on ceramic coat */}
      <Image
        src="/placeholder-hero-detailing.svg"
        alt="Placeholder: car mid-detail with water beading on ceramic-coated paint"
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-carbon/60 via-carbon/70 to-carbon" />
      <div className="absolute inset-0 bg-ceramic-glow" />

      <div className="absolute inset-0 opacity-30 bg-carbon-weave [background-size:24px_24px]" aria-hidden />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-ceramic/30 bg-ceramic/5 px-4 py-1.5 font-body text-xs uppercase tracking-widest2 text-ceramic"
        >
          {t.hero.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative font-display text-6xl uppercase leading-none tracking-wide sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <ChromeText className="relative inline-block">
            {t.hero.title}
            <span className="absolute inset-0 -z-0 overflow-hidden">
              <span className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/60 to-transparent animate-light-sweep" />
            </span>
          </ChromeText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl font-body text-base text-chrome-dark md:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <GlowButton href="/book">{t.hero.cta}</GlowButton>
          <GlowButton href="/services" variant="outline">
            {t.hero.secondaryCta}
          </GlowButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-chrome-dark"
      >
        <span className="font-body text-[11px] uppercase tracking-widest2">{t.hero.scrollCue}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="h-5 w-5 text-ceramic" />
        </motion.div>
      </motion.div>
    </section>
  );
}
