export const revalidate = 30;
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <div className="container py-6">{children}</div>;
}
