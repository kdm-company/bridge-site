import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react';
import { businesses, company } from '@/lib/company';
import { ContactBanner, SectionLabel, TextLink } from '@/components/site-parts';

export const metadata: Metadata = {
  title: '株式会社Bridge | AI・ソフトウェア・DX支援',
  description: company.overview,
};

export default function Home() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-heading">
        <div className="hero-topline">
          <p>
            <span className="status-dot" />
            TECHNOLOGY × BUSINESS
          </p>
          <span>OSAKA, JAPAN</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 id="hero-heading">
              <span>テクノロジーと</span>
              <span>ビジネスをつなぎ、</span>
              <span className="blue-text">企業の可能性を</span>
              <span className="blue-text">広げる。</span>
            </h1>
            <p className="hero-description">
              AI・ソフトウェア・デジタル技術を活用し、
              <br className="desktop-break" />
              企業の業務効率化、生産性向上、事業成長を支援します。
            </p>
            <TextLink href="/business">事業を見る</TextLink>
          </div>
          <div className="hero-visual">
            <img
              className="hero-connections"
              src="/decorations/bridge-connections.svg"
              alt=""
              aria-hidden="true"
              width="800"
              height="900"
            />
            <div className="hero-photo-frame">
              <img
                className="hero-photo"
                src="/images/bridge-main.png"
                alt="資料を囲んで業務改善について話し合うチームのイメージ"
                width="1122"
                height="1402"
                fetchPriority="high"
              />
            </div>
            <div className="visual-caption">
              <span>AI / SOFTWARE / BUSINESS</span>
              <span>IMAGE PHOTO</span>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <span className="hero-signature">TECHNOLOGY & BUSINESS</span>
          <a href="#about">
            SCROLL TO EXPLORE
            <ArrowDown size={14} aria-hidden="true" />
          </a>
        </div>
      </section>

      <div className="expertise-strip" aria-label="事業領域">
        <div className="container">
          {[
            'AI',
            'Software',
            'Data',
            'Automation',
            'Sales',
            'Business Operations',
          ].map((area, index) => (
            <span key={area}>
              {index > 0 && <Plus size={14} aria-hidden="true" />}
              {area}
            </span>
          ))}
        </div>
      </div>

      <section
        id="about"
        className="about section container"
        aria-labelledby="about-heading"
      >
        <SectionLabel number="01">ABOUT US</SectionLabel>
        <div className="section-content">
          <p className="eyebrow">Bridgeについて</p>
          <h2 id="about-heading">
            次世代の企業活動を支える
            <br />
            ビジネスインフラをつくる。
          </h2>
          <div className="about-body">
            <p>{company.overview}</p>
            <p>
              現場の課題を理解し、仕組みの設計から導入、運用、改善まで。テクノロジーを企業の具体的な成果につなげます。
            </p>
          </div>
          <TextLink href="/about">私たちの考え方</TextLink>
        </div>
      </section>

      <section className="business section" aria-labelledby="business-heading">
        <div className="container">
          <div className="section-heading">
            <SectionLabel number="02">OUR BUSINESS</SectionLabel>
            <div>
              <h2 id="business-heading">
                企業の課題に、
                <br />
                領域を超えた解決策を。
              </h2>
              <p className="section-intro">
                AI、ソフトウェア、データ、営業、業務オペレーション。必要な技術とノウハウを組み合わせ、企業ごとに最適な仕組みをつくります。
              </p>
            </div>
          </div>
          <div className="home-business-list">
            {businesses.map((business) => (
              <Link
                href={`/business#${business.slug}`}
                key={business.number}
                className="home-business-row"
              >
                <span className="business-number">{business.number}</span>
                <div>
                  <p>{business.english}</p>
                  <h3>{business.title}</h3>
                </div>
                <ArrowUpRight size={22} aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className="section-end-link">
            <TextLink href="/business">すべての事業を見る</TextLink>
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <img
          src="/decorations/bridge-divider.svg"
          alt=""
          width="1440"
          height="180"
          loading="lazy"
        />
      </div>
      <section
        className="section container home-strengths"
        aria-labelledby="strengths-heading"
      >
        <div className="section-heading">
          <SectionLabel number="03">OUR STRENGTHS</SectionLabel>
          <div>
            <h2 id="strengths-heading">
              現場を理解し、
              <br />
              実行と改善を重ねる。
            </h2>
          </div>
        </div>
        <div className="strengths-grid">
          {[
            [
              '01',
              '現場を起点に考える',
              '実際の業務や課題を整理し、企業ごとの運用に合う仕組みを設計します。',
            ],
            [
              '02',
              '複数の領域をつなぐ',
              'AI、ソフトウェア、営業、データを組み合わせ、課題を横断的に解決します。',
            ],
            [
              '03',
              '導入後も改善を続ける',
              '現場への定着と成果を見据え、運用を通じて仕組みを継続的に改善します。',
            ],
          ].map(([number, title, description]) => (
            <article key={number}>
              <span className="business-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-company">
        <div className="container">
          <div>
            <p className="eyebrow">COMPANY</p>
            <h2>株式会社Bridge</h2>
            <p>{company.location}</p>
          </div>
          <TextLink href="/company">会社概要を見る</TextLink>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
