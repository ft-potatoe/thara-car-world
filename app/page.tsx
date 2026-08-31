"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Promotions from "@/components/Promotions";
import GlowButton from "@/components/GlowButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import RevealOnScroll from "@/components/RevealOnScroll";
import ChromeText from "@/components/ChromeText";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { services, processSteps, whyChooseUs, businessInfo } from "@/lib/i18n/dictionary";

export default function Home() {
  const { t, locale } = useLanguage();
  const featured = services.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Stats strip */}
      <section className="border-y border-white/10 bg-panel py-16">
        <div className="mx-auto max-w-6xl px-6">
          <StatsCounter items={t.stats.items} />
        </div>
      </section>

      {/* Featured services */}
      <section className="bg-carbon py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll className="mx-auto mb-14 max-w-2xl text-center">
            <span className="font-body text-xs uppercase tracking-widest2 text-ceramic">
              {t.featuredServices.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl uppercase tracking-wide md:text-5xl">
              <ChromeText>{t.featuredServices.heading}</ChromeText>
            </h2>
            <p className="mt-4 font-body text-chrome-dark">{t.featuredServices.sub}</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((service, i) => (
              <RevealOnScroll key={service.slug} delay={i * 0.1}>
                <ServiceCard service={service} locale={locale} />
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <GlowButton href="/services" variant="outline">
              {t.featuredServices.viewAll}
            </GlowButton>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-panel py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll className="mx-auto mb-16 max-w-2xl text-center">
            <span className="font-body text-xs uppercase tracking-widest2 text-ceramic">
              {t.process.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl uppercase tracking-wide md:text-5xl">
              <ChromeText>{t.process.heading}</ChromeText>
            </h2>
            <p className="mt-4 font-body text-chrome-dark">{t.process.sub}</p>
          </RevealOnScroll>

          <ProcessTimeline steps={processSteps} locale={locale} />
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-carbon py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll className="mx-auto mb-14 max-w-2xl text-center">
            <span className="font-body text-xs uppercase tracking-widest2 text-ceramic">
              {t.why.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl uppercase tracking-wide md:text-5xl">
              <ChromeText>{t.why.heading}</ChromeText>
            </h2>
          </RevealOnScroll>

          <WhyChooseUs items={whyChooseUs} locale={locale} />
        </div>
      </section>

      {/* Promotions */}
      <section className="bg-panel py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealOnScroll className="mx-auto mb-14 max-w-2xl text-center">
            <span className="font-body text-xs uppercase tracking-widest2 text-ceramic">
              {t.promotions.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl uppercase tracking-wide md:text-5xl">
              <ChromeText>{t.promotions.heading}</ChromeText>
            </h2>
            <p className="mt-4 font-body text-chrome-dark">{t.promotions.sub}</p>
          </RevealOnScroll>

          <Promotions />
        </div>
      </section>

      {/* Before / After */}
      <section className="border-t border-white/10 bg-carbon py-24">
        <div className="mx-auto max-w-4xl px-6">
          <RevealOnScroll className="mx-auto mb-14 max-w-2xl text-center">
            <span className="font-body text-xs uppercase tracking-widest2 text-ceramic">
              {t.beforeAfter.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl uppercase tracking-wide md:text-5xl">
              <ChromeText>{t.beforeAfter.heading}</ChromeText>
            </h2>
            <p className="mt-4 font-body text-chrome-dark">{t.beforeAfter.sub}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <BeforeAfterSlider
              beforeSrc="/placeholder-before-01.svg"
              afterSrc="/placeholder-after-01.svg"
              beforeAlt="Placeholder: vehicle paint before correction, showing swirl marks"
              afterAlt="Placeholder: vehicle paint after correction and ceramic coating"
              beforeLabel={t.beforeAfter.before}
              afterLabel={t.beforeAfter.after}
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-ceramic-glow opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-4xl uppercase tracking-wide md:text-5xl">
              <ChromeText>{t.ctaBanner.heading}</ChromeText>
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-chrome-dark">{t.ctaBanner.sub}</p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <WhatsAppButton
                label={t.ctaBanner.cta}
                message="Hi Thara Car World, I'd like to book a detailing appointment."
              />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-chrome/40 px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-chrome-light transition-colors hover:border-ceramic hover:text-ceramic"
              >
                <MapPin className="h-4 w-4" />
                {t.ctaBanner.visit}
              </Link>
            </div>

            <p className="mt-6 font-body text-sm text-chrome-dark">{businessInfo.address}</p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
