import type { Metadata } from 'next';
import { company, values } from '@/lib/company';
import {
  ContactBanner,
  PageIntro,
  SectionLabel,
  TextLink,
} from '@/components/site-parts';

export const metadata: Metadata = {
  title: 'Bridgeについて | 株式会社Bridge',
  description:
    'テクノロジーとビジネスをつなぎ、企業の可能性を広げる。Bridgeのミッション、ビジョン、大切にする価値観と事業方針をご紹介します。',
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        english="About us"
        title="Bridgeについて"
        lead="技術をビジネスの成果へつなぐ。私たちは、現場の理解と実行を通じて、企業の成長を支える仕組みをつくります。"
      />
      <section
        className="about section container"
        aria-labelledby="mission-heading"
      >
        <SectionLabel number="01">OUR MISSION</SectionLabel>
        <div>
          <p className="eyebrow">ミッション</p>
          <h2 id="mission-heading">
            テクノロジーとビジネスをつなぎ、
            <br />
            企業の可能性を広げる。
          </h2>
          <div className="about-body">
            <p>
              新しい技術を実際のビジネスに落とし込み、売上向上、コスト削減、生産性向上、業務効率化などの具体的な価値へつなげます。
            </p>
            <p>
              企業に存在する非効率や属人的な業務を、AIやソフトウェア、データを活用した仕組みへ。より少ないリソースで、より大きな成果を生み出せる環境を目指します。
            </p>
          </div>
        </div>
      </section>
      <section className="vision-section">
        <div className="about section container">
          <SectionLabel number="02">OUR VISION</SectionLabel>
          <div>
            <p className="eyebrow">ビジョン</p>
            <h2>{company.vision}</h2>
            <div className="about-body">
              <p>
                AI、Software、Data、Automation、Sales、Business
                Operations。企業活動に必要な領域をつなぎ、成長を支える仕組みを提供します。
              </p>
              <p>
                事業を通じて得た知識、データ、営業力、業務ノウハウを蓄積し、新しいサービスやプロダクトへ展開します。複数の事業を継続的に生み出せる企業体を構築していきます。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="values section" aria-labelledby="values-heading">
        <img
          className="values-orbits"
          src="/decorations/bridge-orbits.svg"
          alt=""
          aria-hidden="true"
          width="1000"
          height="650"
          loading="lazy"
        />
        <div className="container">
          <SectionLabel number="03">OUR VALUES</SectionLabel>
          <div className="values-heading">
            <h2 id="values-heading">
              Our values<span>.</span>
            </h2>
            <p>Bridgeが重視する6つの考え方</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <article key={value.name} className="value-item">
                <span className="value-number">0{index + 1}</span>
                <h3>{value.name}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="about section container"
        aria-labelledby="direction-heading"
      >
        <SectionLabel number="04">OUR DIRECTION</SectionLabel>
        <div>
          <p className="eyebrow">事業方針・中長期の方向性</p>
          <h2 id="direction-heading">
            知識と経験を蓄積し、
            <br />
            次の事業へつなぐ。
          </h2>
          <div className="about-body">
            <p>
              小さく検証し、データや市場の反応を確かめながら、成果が見込める領域へ経営資源を配分します。各事業で培う営業、AI、ソフトウェア、データ、業務ノウハウを共通資産として活用し、事業間の相乗効果を生み出します。
            </p>
            <p>
              将来的には、自社SaaS・ソフトウェアやAIサービス、営業支援システムの開発、BtoBサービスの展開などを通じて、複数の事業を持つテクノロジー企業へ成長することを目指しています。
            </p>
          </div>
          <TextLink href="/company">会社の基本情報を見る</TextLink>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
