"use client";

import { useState, type FormEvent } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import ChromeText from "@/components/ChromeText";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { services } from "@/lib/i18n/dictionary";
import { CheckCircle2 } from "lucide-react";

export default function BookPage() {
  const { t, locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    car: "",
    service: "",
    date: "",
    time: "",
  });

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClasses =
    "w-full rounded-lg border border-white/15 bg-panel px-4 py-3 font-body text-sm text-chrome-light placeholder:text-chrome-dark/60 transition-colors focus:border-ceramic focus:outline-none focus:ring-1 focus:ring-ceramic";
  const labelClasses = "mb-2 block font-body text-xs uppercase tracking-widest2 text-chrome-dark";

  return (
    <section className="bg-carbon pb-24 pt-36">
      <div className="mx-auto max-w-3xl px-6">
        <RevealOnScroll className="mb-12 text-center">
          <span className="font-body text-xs uppercase tracking-widest2 text-ceramic">
            {t.bookPage.eyebrow}
          </span>
          <h1 className="mt-3 font-display text-5xl uppercase tracking-wide md:text-6xl">
            <ChromeText>{t.bookPage.heading}</ChromeText>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-chrome-dark">{t.bookPage.sub}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mb-10 flex flex-col items-center gap-3 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-6 text-center">
            <p className="font-body text-sm text-chrome-light">{t.bookPage.whatsappNote}</p>
            <WhatsAppButton
              label={t.bookPage.whatsappCta}
              message="Hi Thara Car World, I'd like to book a detailing appointment."
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="rounded-2xl border border-white/10 bg-panel p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-ceramic" />
                <p className="max-w-md font-body text-sm text-chrome-dark">
                  {t.bookPage.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className={labelClasses} htmlFor="name">
                    {t.bookPage.form.name}
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder={t.bookPage.form.namePlaceholder}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses} htmlFor="phone">
                    {t.bookPage.form.phone}
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    placeholder={t.bookPage.form.phonePlaceholder}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses} htmlFor="car">
                    {t.bookPage.form.carModel}
                  </label>
                  <input
                    id="car"
                    required
                    type="text"
                    value={form.car}
                    onChange={handleChange("car")}
                    placeholder={t.bookPage.form.carPlaceholder}
                    className={inputClasses}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className={labelClasses} htmlFor="service">
                    {t.bookPage.form.service}
                  </label>
                  <select
                    id="service"
                    required
                    value={form.service}
                    onChange={handleChange("service")}
                    className={inputClasses}
                  >
                    <option value="" disabled>
                      {t.bookPage.form.servicePlaceholder}
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s[locale].name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClasses} htmlFor="date">
                    {t.bookPage.form.date}
                  </label>
                  <input
                    id="date"
                    required
                    type="date"
                    value={form.date}
                    onChange={handleChange("date")}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses} htmlFor="time">
                    {t.bookPage.form.time}
                  </label>
                  <input
                    id="time"
                    required
                    type="time"
                    value={form.time}
                    onChange={handleChange("time")}
                    className={inputClasses}
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="relative w-full overflow-hidden rounded-full bg-ceramic px-8 py-4 font-body text-sm font-semibold uppercase tracking-wide text-carbon shadow-glow-ceramic-sm transition-all hover:shadow-glow-ceramic"
                  >
                    {t.bookPage.form.submit}
                  </button>
                </div>
              </form>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
