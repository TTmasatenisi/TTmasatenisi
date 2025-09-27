// components/layout/site-header.tsx
import Link from "next/link";
import { MainNav } from "./main-nav";
import { Button } from "@/components/ui/button";
import { supabaseServer } from "@/lib/supabase/server";

async function getFlags() {
  try {
    const supabase = supabaseServer();
    const { data } = await supabase.rpc("is_app_admin");
    return { isAdmin: Boolean(data) };
  } catch {
    return { isAdmin: false };
  }
}

export async function SiteHeader() {
  const { isAdmin } = await getFlags();

  const items = [
    { href: "/public", label: "Public" },
    { href: "/dashboard", label: "Kulübüm" },
    ...(isAdmin ? [{ href: "/admin", label: "Admin" }] : []),
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/public" className="font-semibold tracking-tight text-xl">
            TT <span className="opacity-60">MasaTenisi</span>
          </Link>
          <MainNav items={items} />
        </div>

        <div className="flex items-center gap-2">
          {/* Örnek CTA: ileride login/account gelecek */}
          <Button asChild variant="secondary">
            <Link href="/public">Keşfet</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
