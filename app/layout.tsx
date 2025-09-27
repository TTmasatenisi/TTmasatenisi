import "../styles/globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";


export const metadata: Metadata = {
  title: "TT MasaTenisi",
  description: "Kulüpler ve duyurular için V1/MVP",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SiteHeader />
        <main className="container py-6">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
