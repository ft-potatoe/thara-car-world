"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import ChromeText from "@/components/ChromeText";
import WhatsAppButton from "@/components/WhatsAppButton";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { businessInfo } from "@/lib/i18n/dictionary";

export default function ContactPage() {
  const { t } = useLanguage();

  const details = [
    { icon: MapPin, label: t.contactPage.addressLabel, value: businessInfo.address, href: undefined },
    { icon: Phone, label: t.contactPage.phoneLabel, value: businessInfo.phone, href: `tel:${businessInfo.phoneHref}` },
    { icon: Mail, label: t.contactPage.emailLabel, value: businessInfo.email, href: `mailto:${businessInfo.email}` },
    { icon: Clock, label: t.contactPage.hoursLabel, value: t.contactPage.hoursValue, href: undefined },
  ];

  return (
    <section className="bg-carbon pb-24 pt-36">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-body text-xs uppercase tracking-widest2 text-ceramic">
            {t.contactPage.eyebrow}
          </span>
          <h1 className="mt-3 font-display text-5xl uppercase tracking-wide md:text-6xl">
            <ChromeText>{t.contactPage.heading}</ChromeText>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-chrome-dark">{t.contactPage.sub}</p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <RevealOnScroll>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
              {/* PLACEHOLDER — embed real Google Maps iframe pinned at Al Nayef Souq, Ain Khalid */}
              <Image
                src="/placeholder-map.svg"
                alt="Placeholder map: Al Nayef Souq, Ain Khalid, Doha, Qatar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-carbon/80 px-4 py-2 text-xs text-chrome-dark backdrop-blur-sm">
                {t.contactPage.mapNote}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-panel p-8">
              <ul className="space-y-6">
                {details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ceramic/10 text-ceramic ring-1 ring-ceramic/20">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-body text-xs uppercase tracking-widest2 text-chrome-dark">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="font-body text-base text-chrome-light transition-colors hover:text-ceramic break-words"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="font-body text-base text-chrome-light break-words">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="mb-4 font-body text-xs uppercase tracking-widest2 text-chrome-dark">
                  {t.contactPage.socialLabel}
                </p>
                <div className="flex gap-3">
                  {/* PLACEHOLDER — link to real Instagram profile */}
                  <a
                    href="#"
                    aria-label="Instagram (placeholder link)"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-chrome-light/80 transition-colors hover:border-ceramic hover:text-ceramic"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  {/* PLACEHOLDER — link to real Facebook page */}
                  <a
                    href="#"
                    aria-label="Facebook (placeholder link)"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-chrome-light/80 transition-colors hover:border-ceramic hover:text-ceramic"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <WhatsAppButton
                  label={t.common.whatsapp}
                  message="Hi Thara Car World, I have a question."
                  className="w-full justify-center"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
