import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Thara Car World at Al-Nayef Souq, Shop-32, Doha, Qatar. Call +974 7009 6565 or email info@cardetailing.qa.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
