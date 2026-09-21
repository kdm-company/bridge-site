import type { Metadata } from 'next';
import { businesses, company } from '@/lib/company';
import { ContactBanner, PageIntro, TextLink } from '@/components/site-parts';

export const metadata: Metadata = {
  title: '会社概要 | 株式会社Bridge',
  description:
    '大阪府藤井寺市の株式会社Bridge。AI・ソフトウェア・デジタル技術を活用し、企業の業務改善と事業成長を支援しています。',
};

export default function CompanyPage() {
  return (
    <>
      <PageIntro
        english="Company"
        title="会社概要"
        lead="大阪府藤井寺市を拠点に、テクノロジーと事業開発を通じて、企業の成長に必要な仕組みを提供します。"
      />
      <section
        className="company section container"
        aria-label="会社の基本情報"
      >
        <div className="company-grid">
          <div className="company-photo">
            <img
              className="company-image"
              src="/images/bridge-company.png"
              alt="自然光が差し込むワークスペースのイメージ"
              width="1448"
              height="1086"
              loading="lazy"
              decoding="async"
            />
            <p className="company-photo-caption">
              事業イメージ（実際のオフィスではありません）
            </p>
          </div>
          <div>
            <dl className="company-facts">
              <div>
                <dt>会社名</dt>
                <dd>{company.name}</dd>
              </div>
              <div>
                <dt>所在地</dt>
                <dd>{company.location}</dd>
              </div>
              <div>
                <dt>事業内容</dt>
                <dd>
                  <ul>
                    {businesses.map((business) => (
                      <li key={business.number}>
                        {business.title}
                        {business.number === '03' ? '支援' : '事業'}
                      </li>
                    ))}
                    <li>各種BtoBサービス</li>
                    <li>既存事業および新規事業の企画・運営</li>
                  </ul>
                </dd>
              </div>
            </dl>
            <TextLink href="/business">事業の詳細を見る</TextLink>
          </div>
        </div>
      </section>
      <section className="company-note container">
        <h2>
          テクノロジーと事業開発を通じて、
          <br />
          新しい価値を継続的に生み出す。
        </h2>
        <p>
          市場や技術の変化を捉え、自社自身も変化と挑戦を続けながら成長していきます。
        </p>
        <TextLink href="/about">Bridgeの理念と価値観</TextLink>
      </section>
      <ContactBanner />
    </>
  );
}
