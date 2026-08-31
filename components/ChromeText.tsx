import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

export default function ChromeText({
  children,
  as: Tag = "span",
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "bg-chrome-gradient bg-clip-text text-transparent bg-[length:200%_auto] drop-shadow-[0_0_25px_rgba(199,203,209,0.25)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
