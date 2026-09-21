import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-link">
      {children}
      <span className="arrow-circle">
        <ArrowUpRight size={18} aria-hidden="true" />
      </span>
    </Link>
  );
}

export function PageIntro({
  english,
  title,
  lead,
}: {
  english: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="page-intro container">
      <p className="page-intro-english" aria-hidden="true">
        {english}
        <span>.</span>
      </p>
      <div className="page-intro-bottom">
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  );
}

export function ContactBanner() {
  return (
    <section
      className="contact-banner"
      aria-labelledby="contact-banner-heading"
    >
      <div className="container">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2 id="contact-banner-heading">
            事業や業務の課題を、
            <br />
            お聞かせください。
          </h2>
        </div>
        <Link href="/contact" className="contact-banner-link">
          お問い合わせ
          <ArrowUpRight size={28} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
