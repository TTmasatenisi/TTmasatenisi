import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border p-8 md:p-12 bg-gradient-to-br from-muted/50 to-background">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-3 text-base md:text-lg text-muted-foreground">{subtitle}</p>}
        <div className="mt-6 flex gap-3">
          <Link href="/public"><Button>Keşfet</Button></Link>
          <Link href="/dashboard"><Button variant="secondary">Kulübüm</Button></Link>
        </div>
      </div>
    </section>
  );
}
