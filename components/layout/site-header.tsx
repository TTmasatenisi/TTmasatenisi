'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MainNav } from './main-nav';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Brand + Desktop Nav */}
        <div className="flex items-center gap-3">
          <Link
            href="/public"
            className="text-base font-semibold tracking-tight"
          >
            TT MasaTenisi
          </Link>

          {/* Desktop */}
          <MainNav />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/public">Keşfet</Link>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/dashboard">Kulübüm</Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            size="icon"
            variant="ghost"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            className="md:hidden"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-2">
            <MainNav orientation="vertical" onNavigate={() => setOpen(false)} />

            <div className="mt-2 flex gap-2">
              <Button asChild variant="outline" className="flex-1">
                <Link href="/public" onClick={() => setOpen(false)}>
                  Keşfet
                </Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href="/dashboard" onClick={() => setOpen(false)}>
                  Kulübüm
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
