import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gumede Hardware | Building Materials & Hardware in Mzuzu",
    template: "%s | Gumede Hardware",
  },
  description: "Find building materials, roofing, plumbing, electrical supplies, tools and more at Gumede Hardware in Mzuzu, Malawi. Enquire about products and pricing.",
  openGraph: {
    title: "Gumede Hardware | Building Materials & Hardware in Mzuzu",
    description: "Building materials, tools and everyday essentials for the work ahead. Visit Gumede Hardware in Mzuzu, Malawi.",
    type: "website",
    locale: "en_MW",
    siteName: "Gumede Hardware",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gumede Hardware | Mzuzu, Malawi",
    description: "Building materials, tools and everyday essentials for the work ahead.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}