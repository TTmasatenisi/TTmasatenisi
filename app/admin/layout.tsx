import { requireAppAdmin } from "@/lib/auth/require-role";

export default async function AdminLayout({
  children,
}: { children: React.ReactNode }) {
  await requireAppAdmin(); // yetki yoksa /public'e yönlendirilir
  return <div className="container py-6">{children}</div>;
}
