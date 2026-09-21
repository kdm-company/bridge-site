'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';

const navigation = [
  { href: '/business', label: '事業紹介', english: 'Business' },
  { href: '/about', label: 'Bridgeについて', english: 'About us' },
  { href: '/company', label: '会社概要', english: 'Company' },
  { href: '/contact', label: 'お問い合わせ', english: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        本文へ移動
      </a>
      <header id="top" className="site-header container">
        <Link href="/" className="wordmark" aria-label="株式会社Bridge トップ">
          Bridge<span>.</span>
        </Link>
        <nav className="main-nav desktop-nav" aria-label="メインナビゲーション">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={item.href === '/contact' ? 'company-link' : undefined}
            >
              {item.label}
              {item.href === '/contact' && (
                <ArrowUpRight size={17} aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>
        <div className="mobile-navigation">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="mobile-menu-button"
              aria-label="メニューを開く"
            >
              <Menu size={22} aria-hidden="true" />
              <span>MENU</span>
            </SheetTrigger>
            <SheetContent className="bridge-menu" showCloseButton={false}>
              <SheetHeader>
                <SheetTitle className="wordmark">
                  Bridge<span>.</span>
                </SheetTitle>
                <SheetDescription>サイトメニュー</SheetDescription>
              </SheetHeader>
              <SheetClose
                className="mobile-menu-close"
                aria-label="メニューを閉じる"
              >
                <X size={24} aria-hidden="true" />
              </SheetClose>
              <nav aria-label="モバイルナビゲーション">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  aria-current={pathname === '/' ? 'page' : undefined}
                >
                  <span>Top</span>トップ
                </Link>
                {navigation.map((item) => (
                  <Link
                    href={item.href}
                    key={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    <span>{item.english}</span>
                    {item.label}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                ))}
              </nav>
              <Link
                href="/privacy"
                className="mobile-privacy"
                onClick={() => setOpen(false)}
              >
                プライバシーポリシー
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
