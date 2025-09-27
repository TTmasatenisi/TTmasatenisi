'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type Orientation = 'horizontal' | 'vertical';

const NAV_ITEMS = [
  { href: '/public', label: 'Keşfet' },
  { href: '/dashboard', label: 'Kulübüm' },
  { href: '/admin', label: 'Admin' },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active =
    pathname === href ||
    (href !== '/public' && (pathname?.startsWith(href) ?? false));

  return (
    <Link
      href={href}
      className={cn(
        'rounded-md px-3 py-2 text-sm font-medium transition',
        active
          ? 'bg-primary text-primary-foreground'
          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
      )}
    >
      {label}
    </Link>
  );
}

export function MainNav({
  orientation = 'horizontal',
  onNavigate,
}: {
  orientation?: Orientation;
  onNavigate?: () => void;
}) {
  const isVertical = orientation === 'vertical';

  return (
    <nav
      className={cn(
        isVertical
          ? 'flex flex-col gap-1'
          : 'hidden md:flex items-center gap-1'
      )}
    >
      {NAV_ITEMS.map((item) => (
        <div key={item.href} onClick={onNavigate}>
          <NavLink {...item} />
        </div>
      ))}
    </nav>
  );
}
