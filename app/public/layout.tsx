// app/public/layout.tsx
export const revalidate = 30;

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      {/* Sekmeler ileride: Kulüp | Kadro | Duyurular */}
      {children}
    </div>
  );
}
