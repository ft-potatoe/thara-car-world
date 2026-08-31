import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your car detailing appointment with Thara Car World in Doha, Qatar. Choose your service and preferred time, or message us directly on WhatsApp.",
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
