import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { clubs, getClubBySlug } from "@/lib/mock/clubs";

export const revalidate = 60; // mock için 60 sn

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return clubs.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const club = getClubBySlug(params.slug);
  if (!club) return { title: "Kulüp Bulunamadı • TT MasaTenisi" };
  return { title: `${club.name} • TT MasaTenisi` };
}

export default async function ClubDetailPage({ params }: Props) {
  const club = getClubBySlug(params.slug);
  if (!club) notFound();

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{club!.name}</h1>
          <p className="text-sm text-muted-foreground">
            {club!.district ? `${club!.district}, ` : ""}
            {club!.city}
          </p>
        </div>

        <Link
          href="/public"
          className="text-sm text-primary underline-offset-4 hover:underline"
        >
          ← Keşfet&apos;e dön
        </Link>
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <p className="leading-7">{club!.description}</p>

          <div className="flex flex-wrap gap-2">
            {club!.tags.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>

          {/* İleride: antrenman saatleri, kadro, duyurular gibi bölümler buraya eklenecek */}
        </CardContent>
      </Card>
    </main>
  );
}
