import { Gem, Users, Wallet, BadgeCheck, type LucideIcon } from "lucide-react";
import TiltCard from "./TiltCard";
import type { whyChooseUs } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/dictionary";

const iconMap: Record<string, LucideIcon> = {
  gem: Gem,
  users: Users,
  wallet: Wallet,
  "badge-check": BadgeCheck,
};

export default function WhyChooseUs({
  items,
  locale,
}: {
  items: typeof whyChooseUs;
  locale: Locale;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = iconMap[item.icon] ?? Gem;
        return (
          <TiltCard key={item.en.title} className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-chrome-gradient text-carbon">
              <Icon className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg uppercase tracking-wide text-chrome-light">
              {item[locale].title}
            </h3>
            <p className="mt-2 font-body text-sm text-chrome-dark">{item[locale].desc}</p>
          </TiltCard>
        );
      })}
    </div>
  );
}
