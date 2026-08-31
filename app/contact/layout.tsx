import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Thara Car World at Al Nayef Souq, Ain Khalid, Doha, Qatar. Call +974 7009 6565 or email saigokulsethumadhavan@gmail.com.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
