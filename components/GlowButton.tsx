import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function GlowButton({
  href,
  children,
  variant = "primary",
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  [key: string]: unknown;
}) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-body font-semibold uppercase tracking-wide text-sm transition-all duration-300 overflow-hidden group";

  if (variant === "outline") {
    return (
      <Link
        href={href}
        className={cn(
          base,
          "border border-chrome/40 text-chrome-light hover:border-ceramic hover:text-ceramic hover:shadow-glow-ceramic-sm",
          className
        )}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        base,
        "bg-ceramic text-carbon shadow-glow-ceramic-sm hover:shadow-glow-ceramic hover:scale-[1.03]",
        className
      )}
      {...rest}
    >
      <span className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/3 animate-light-sweep" />
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
