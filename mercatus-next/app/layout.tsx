import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercatus Matched Market Prototype",
  description: "Mobile-first prototype for a matched-user NRL Fantasy prediction market."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ink font-sans text-white antialiased">{children}</body>
    </html>
  );
}
