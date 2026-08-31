"use client";

import { motion } from "framer-motion";
import type { processSteps } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/dictionary";

export default function ProcessTimeline({
  steps,
  locale,
}: {
  steps: typeof processSteps;
  locale: Locale;
}) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-0 right-0 top-[38px] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <motion.div
        className="hidden md:block absolute left-0 top-[38px] h-px bg-gradient-to-r from-ceramic/0 via-ceramic to-ceramic/0"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.en.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="relative z-10 mb-5 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-ceramic/40 bg-panel font-display text-2xl text-ceramic shadow-glow-ceramic-sm">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display text-lg uppercase tracking-wide text-chrome-light">
              {step[locale].title}
            </h3>
            <p className="mt-2 max-w-[220px] font-body text-sm text-chrome-dark">
              {step[locale].desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
