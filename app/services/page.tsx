"use client";

import Image from "next/image";
import { ShieldCheck, Check } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import GlowButton from "@/components/GlowButton";
import RevealOnScroll from "@/components/RevealOnScroll";
import ChromeText from "@/components/ChromeText";
import TiltCard from "@/components/TiltCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { services } from "@/lib/i18n/dictionary";

export default function ServicesPage() {
  const { t, locale } = useLanguage();
  const ceramicCoating = services.find((s) => s.slug === "ceramic-coating")!;
  const otherServices = services.filter((s) => s.slug !== "ceramic-coating");

  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-carbon pb-16 pt-36">
        <div className="absolute inset-0 bg-ceramic-glow opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <RevealOnScroll>
            <span className="font-body text-xs uppercase tracking-widest2 text-ceramic">
              {t.servicesPage.eyebrow}
            </span>
            <h1 className="mt-3 font-display text-5xl uppercase tracking-wide md:text-6xl">
              <ChromeText>{t.servicesPage.heading}</ChromeText>
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-body text-chrome-dark">{t.servicesPage.sub}</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ceramic Coating flagship hero */}
      <section className="bg-panel py-20">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl border border-ceramic/25 bg-carbon shadow-glow-ceramic-sm md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
                {/* PLACEHOLDER — replace with real ceramic coating application photo */}
                <Image
                  src="/placeholder-ceramic-hero.svg"
                  alt="Placeholder: ceramic coating being applied to a vehicle panel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="p-8 md:p-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-ceramic/30 bg-ceramic/5 px-4 py-1.5 font-body text-xs uppercase tracking-widest2 text-ceramic">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {t.servicesPage.flagshipEyebrow}
                </span>
                <h2 className="mt-4 font-display text-4xl uppercase tracking-wide">
                  {ceramicCoating[locale].name}
                </h2>
                <p className="mt-4 font-body text-chrome-dark">{ceramicCoating[locale].short}</p>
                <p className="mt-3 font-body text-sm uppercase tracking-wider text-ceramic/80">
                  {ceramicCoating[locale].bestFor}
                </p>
                <div className="mt-8">
                  <GlowButton href="/book">{t.servicesPage.flagshipCta}</GlowButton>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Full service grid */}
      <section className="bg-carbon py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((service, i) => (
              <RevealOnScroll key={service.slug} delay={(i % 3) * 0.1}>
                <ServiceCard service={service} locale={locale} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-panel py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-4xl uppercase tracking-wide md:text-5xl">
              <ChromeText>{t.servicesPage.packagesHeading}</ChromeText>
            </h2>
            <p className="mt-4 font-body text-chrome-dark">{t.servicesPage.packagesSub}</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {t.servicesPage.packages.map((pkg, i) => (
              <RevealOnScroll key={pkg.tier} delay={i * 0.1}>
                <TiltCard
                  className={`h-full p-8 ${i === 1 ? "border-ceramic/40 shadow-glow-ceramic-sm" : ""}`}
                >
                  <h3 className="font-display text-2xl uppercase tracking-wide text-chrome-light">
                    {pkg.tier}
                  </h3>
                  <p className="mt-1 font-body text-sm text-chrome-dark">{pkg.tagline}</p>
                  <p className="mt-6 font-display text-lg text-racing">{pkg.price}</p>
                  <ul className="mt-6 space-y-2 font-body text-sm text-chrome-dark">
                    {services.slice(0, i + 3).map((s) => (
                      <li key={s.slug} className="flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0 text-ceramic" />
                        {s[locale].name}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <GlowButton
                      href="/book"
                      variant={i === 1 ? "primary" : "outline"}
                      className="w-full"
                    >
                      {t.servicesPage.priceOnRequest}
                    </GlowButton>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
