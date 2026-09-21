import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { company } from '@/lib/company';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="footer-company-name">{company.name}</p>
            <p className="footer-location">{company.location}</p>
          </div>
          <nav aria-label="フッターナビゲーション">
            <Link href="/">トップ</Link>
            <Link href="/business">事業紹介</Link>
            <Link href="/about">Bridgeについて</Link>
            <Link href="/company">会社概要</Link>
            <Link href="/contact">お問い合わせ</Link>
          </nav>
          <a
            href="#top"
            className="back-to-top"
            aria-label="ページの先頭に戻る"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </a>
        </div>
        <Link
          href="/"
          className="footer-wordmark"
          aria-label="株式会社Bridge トップ"
        >
          Bridge<span>.</span>
        </Link>
        <div className="footer-bottom">
          <span>TECHNOLOGY × BUSINESS</span>
          <Link href="/privacy">プライバシーポリシー</Link>
          <small>© Bridge Inc.</small>
        </div>
      </div>
    </footer>
  );
}
