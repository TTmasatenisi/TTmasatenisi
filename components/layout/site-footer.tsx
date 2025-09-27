// components/layout/site-footer.tsx
export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 text-sm text-muted-foreground">
        TT MasaTenisi • {new Date().getFullYear()} • v0.1
      </div>
    </footer>
  );
}
