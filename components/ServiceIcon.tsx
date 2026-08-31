import {
  Sparkles,
  SprayCan,
  ShieldCheck,
  Cog,
  Wand2,
  Armchair,
  Lightbulb,
  Droplets,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  spray: SprayCan,
  shield: ShieldCheck,
  engine: Cog,
  wand: Wand2,
  seat: Armchair,
  headlight: Lightbulb,
  wax: Droplets,
};

export default function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={className} strokeWidth={1.5} />;
}
