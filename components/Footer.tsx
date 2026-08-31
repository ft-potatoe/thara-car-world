"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { businessInfo } from "@/lib/i18n/dictionary";
import ChromeText from "./ChromeText";
import LanguageToggle from "./LanguageToggle";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/10 bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="font-display text-2xl uppercase tracking-widest2">
              <ChromeText>Thara</ChromeText> <span className="text-chrome-light/90">Car World</span>
            </div>
            <p className="mt-4 max-w-xs font-body text-sm text-chrome-dark">{t.footer.tagline}</p>
            <div className="mt-6">
              <LanguageToggle />
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-widest2 text-ceramic">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-3 font-body text-sm text-chrome-light/80">
              <li><Link href="/" className="hover:text-ceramic transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/services" className="hover:text-ceramic transition-colors">{t.nav.services}</Link></li>
              <li><Link href="/gallery" className="hover:text-ceramic transition-colors">{t.nav.gallery}</Link></li>
              <li><Link href="/book" className="hover:text-ceramic transition-colors">{t.nav.book}</Link></li>
              <li><Link href="/contact" className="hover:text-ceramic transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-widest2 text-ceramic">
              {t.footer.contactUs}
            </h3>
            <ul className="mt-4 space-y-3 font-body text-sm text-chrome-light/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ceramic" />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-ceramic" />
                <a href={`tel:${businessInfo.phoneHref}`} className="hover:text-ceramic transition-colors">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-ceramic" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-ceramic transition-colors">
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-widest2 text-ceramic">
              {t.footer.followUs}
            </h3>
            <div className="mt-4 flex gap-3">
              {/* PLACEHOLDER — link to real Instagram profile */}
              <a
                href="#"
                aria-label="Instagram (placeholder link)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-chrome-light/80 transition-colors hover:border-ceramic hover:text-ceramic"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              {/* PLACEHOLDER — link to real Facebook page */}
              <a
                href="#"
                aria-label="Facebook (placeholder link)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-chrome-light/80 transition-colors hover:border-ceramic hover:text-ceramic"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-chrome-dark md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {businessInfo.name}. {t.footer.rights}
          </p>
          <p>
            {t.footer.crLabel}: {businessInfo.cr}
          </p>
        </div>
      </div>
    </footer>
  );
}
