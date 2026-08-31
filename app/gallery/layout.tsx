import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse before-and-after detailing work from Thara Car World in Doha, Qatar — exterior, interior, and ceramic coating results.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
