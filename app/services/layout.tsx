import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Thara Car World's full detailing menu: ceramic coating, paint correction, interior deep cleaning, engine bay cleaning, and more in Doha, Qatar.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
