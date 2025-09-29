// lib/mock/clubs.ts
export type Club = {
  slug: string;
  name: string;
  city: string;
  district?: string;
  description: string;
  tags: string[];
};

export const clubs: Club[] = [
  {
    slug: "istanbul-tt-kulubu",
    name: "İstanbul TT Kulübü",
    city: "İstanbul",
    district: "Beyoğlu",
    description:
      "Haftada 3 gün antrenman, her yaş grubuna açık. Turnuva hazırlık grupları da mevcut.",
    tags: ["Minikler", "Turnuva"],
  },
  {
    slug: "anadolu-tt-spor",
    name: "Anadolu TT Spor",
    city: "İstanbul",
    district: "Kadıköy",
    description:
      "Profesyonel koçlar eşliğinde bireysel gelişim fırsatı. Gelişim grupları ve gençler için programlar.",
    tags: ["Gençler"],
  },
  {
    slug: "bursa-tt-akademi",
    name: "Bursa TT Akademi",
    city: "Bursa",
    district: "Nilüfer",
    description:
      "Çocuk ve yetişkin grupları için düzenli eğitim. Aile dostu haftasonu seansları.",
    tags: ["Haftasonu", "Aile Dostu"],
  },
];

export function getClubBySlug(slug: string) {
  return clubs.find((c) => c.slug === slug);
}
