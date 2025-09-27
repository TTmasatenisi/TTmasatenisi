// components/layout/main-nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Item = { href: string; label: string; exact?: boolean };

const items: Item[] = [
  { href: "/public", label: "Keşfet", exact: true },
  { href: "/dashboard", label: "Kulübüm" },
  { href: "/admin", label: "Admin" },
];

export function MainNav({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";

  return (
    <nav className={cn("flex items-center gap-4 text-sm", className)}>
      {items.map((it) => {
        const isActive = it.exact
          ? pathname === it.href
          : pathname === it.href || pathname.startsWith(it.href + "/");

        return (
          <Link
            key={it.href}
            href={it.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-md px-3 py-2 transition-colors",
              "text-muted-foreground hover:text-foreground hover:bg-muted/60",
              isActive && "bg-muted text-foreground"
            )}
          >
            {it.label}
          </Link>
        );
      })}
    </nav>
  );
}
