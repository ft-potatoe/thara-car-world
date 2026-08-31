import TiltCard from "./TiltCard";
import ServiceIcon from "./ServiceIcon";
import type { services } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/dictionary";

type Service = (typeof services)[number];

export default function ServiceCard({ service, locale }: { service: Service; locale: Locale }) {
  const content = service[locale];

  return (
    <TiltCard className="h-full p-7">
      <div className="flex h-full flex-col">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-ceramic/10 text-ceramic ring-1 ring-ceramic/20">
          <ServiceIcon name={service.icon} className="h-7 w-7" />
        </div>
        <h3 className="font-display text-xl uppercase tracking-wide text-chrome-light">
          {content.name}
        </h3>
        <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-chrome-dark">
          {content.short}
        </p>
        <p className="mt-4 font-body text-xs uppercase tracking-wider text-ceramic/80">
          {content.bestFor}
        </p>
      </div>
    </TiltCard>
  );
}
