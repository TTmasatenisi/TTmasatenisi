import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { clubs } from "@/lib/mock/clubs";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Keşfet • TT MasaTenisi",
};

export default function PublicHome() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Keşfet</h1>
      <p className="text-muted-foreground">
        Kulüpler ve duyuruları keşfet. Herkese açık içerikler burada.
      </p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {clubs.map((club) => (
          <Link
            key={club.slug}
            href={`/public/club/${club.slug}`}
            aria-label={`${club.name} detay`}
            className="block"
          >
            <Card className="transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{club.name}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {club.district ? `${club.district}, ` : ""}
                  {club.city}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-6">{club.description}</p>
                <div className="flex flex-wrap gap-2">
                  {club.tags.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
