// app/dashboard/page.tsx
export const revalidate = 30;

export default function DashboardPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4 text-muted-foreground">
        Dashboard alanı (owner/coach) — yakında.
      </p>
    </main>
  );
}
