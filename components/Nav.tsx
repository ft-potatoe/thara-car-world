"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import GlowButton from "./GlowButton";
import ChromeText from "./ChromeText";

export default function Nav() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-carbon/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-display text-2xl tracking-widest2 uppercase">
          <ChromeText>Thara</ChromeText>{" "}
          <span className="text-chrome-light/90">Car World</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm uppercase tracking-wider transition-colors hover:text-ceramic ${
                pathname === link.href ? "text-ceramic" : "text-chrome-light/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle />
          <GlowButton href="/book" className="!px-6 !py-2.5 text-xs">
            {t.nav.bookNow}
          </GlowButton>
        </div>

        <button
          className="flex items-center justify-center text-chrome-light md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-carbon/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 font-body text-base uppercase tracking-wider transition-colors ${
                    pathname === link.href ? "text-ceramic" : "text-chrome-light/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-3">
                <LanguageToggle />
                <GlowButton href="/book" className="!px-6 !py-2.5 text-xs">
                  {t.nav.bookNow}
                </GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
