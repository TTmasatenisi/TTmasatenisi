import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TT MasaTenisi",
  description: "Kulüpler ve duyurular için V1/MVP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
