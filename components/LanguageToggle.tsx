"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export default function LanguageToggle({ className }: { className?: string }) {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      aria-label="Toggle language"
      className={cn(
        "flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-chrome-light",
        "transition-colors hover:border-ceramic hover:text-ceramic",
        className
      )}
    >
      <span className={locale === "en" ? "text-ceramic" : ""}>EN</span>
      <span className="text-white/30">/</span>
      <span className={locale === "ar" ? "text-ceramic" : ""}>ع</span>
    </button>
  );
}
