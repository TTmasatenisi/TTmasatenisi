// app/dashboard/layout.tsx
export const revalidate = 30;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      {/* İleride: sidebar, üst menü, vb. */}
      {children}
    </div>
  );
}
