"use client";

import { MessageCircle } from "lucide-react";
import { businessInfo } from "@/lib/i18n/dictionary";
import { cn } from "@/lib/utils";

export default function WhatsAppButton({
  label,
  message,
  className,
  floating = false,
}: {
  label: string;
  message?: string;
  className?: string;
  floating?: boolean;
}) {
  const url = message
    ? `${businessInfo.whatsappHref}?text=${encodeURIComponent(message)}`
    : businessInfo.whatsappHref;

  if (floating) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
          "fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/40",
          "transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ceramic",
          className
        )}
      >
        <MessageCircle className="h-7 w-7 text-white" fill="white" strokeWidth={0} />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-body font-semibold text-white",
        "transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ceramic",
        className
      )}
    >
      <MessageCircle className="h-5 w-5" fill="white" strokeWidth={0} />
      {label}
    </a>
  );
}
