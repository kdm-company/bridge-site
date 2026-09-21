import type { Metadata } from 'next';
import { ArrowDown } from 'lucide-react';
import { businesses } from '@/lib/company';
import {
  ContactBanner,
  PageIntro,
  SectionLabel,
} from '@/components/site-parts';

export const metadata: Metadata = {
  title: '事業紹介 | 株式会社Bridge',
  description:
    'AI、ソフトウェア、生産管理・業務管理、DX・業務改善、営業DX。企業の課題に応じたBridgeの5つの支援領域をご紹介します。',
};

export default function BusinessPage() {
  return (
    <>
      <PageIntro
        english="Business"
        title="事業紹介"
        lead="企業ごとの課題に、必要な技術と仕組みを。複数の専門領域をつなぎ、業務の改善から事業成長まで支援します。"
      />
      <nav className="business-index container" aria-label="事業紹介の目次">
        {businesses.map((business) => (
          <a href={`#${business.slug}`} key={business.number}>
            <span>{business.number}</span>
            {business.title}
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        ))}
      </nav>
      <div className="service-sections">
        {businesses.map((business) => (
          <section
            id={business.slug}
            key={business.number}
            className="service-section section"
            aria-labelledby={`${business.slug}-heading`}
          >
            <div className="container service-layout">
              <div className="service-aside">
                <SectionLabel number={business.number}>
                  {business.english}
                </SectionLabel>
                <p className="service-large-number" aria-hidden="true">
                  {business.number}
                </p>
              </div>
              <div className="service-content">
                <h2 id={`${business.slug}-heading`}>{business.title}</h2>
                <p className="service-lead">{business.description}</p>
                <p className="service-description">{business.detail}</p>
                <div className="service-columns">
                  <div>
                    <h3>こんな課題に</h3>
                    <ul>
                      {business.challenges.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>主な支援内容</h3>
                    <ul>
                      {business.support.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <section className="section container" aria-labelledby="approach-heading">
        <div className="section-heading">
          <SectionLabel number="06">OUR APPROACH</SectionLabel>
          <div>
            <h2 id="approach-heading">導入から、現場への定着へ。</h2>
            <p className="section-intro">
              企業ごとの業務を理解したうえで仕組みを設計し、実際に使われる環境へ。運用から得られる情報を、次の改善につなげます。
            </p>
          </div>
        </div>
        <ol className="approach-steps">
          {[
            ['業務・課題の整理', '現場の業務フローと目指す成果を整理します。'],
            [
              '仕組みの設計・導入',
              '課題に合う技術やサービスを組み合わせ、運用方法を設計します。',
            ],
            [
              '運用・継続改善',
              '現場への定着を支援し、運用状況を踏まえて改善します。',
            ],
          ].map(([title, description], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>
      <ContactBanner />
    </>
  );
}
