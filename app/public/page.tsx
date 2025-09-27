import { Hero } from "@/components/hero/Hero";
export const revalidate = 30;

export default function PublicHome() {
  return (
    <main>
      <Hero title="TT MasaTenisi" subtitle="Kulüpler, duyurular ve daha fazlası" />
      <div className="mt-8 text-sm text-muted-foreground">
        Public alan hazır. Kurulum başarılı 🎉
      </div>
    </main>
  );
}
