import type { Metadata } from 'next';
import { PageIntro } from '@/components/site-parts';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'お問い合わせ | 株式会社Bridge',
  description:
    'AI活用、ソフトウェア、生産管理、DX、営業支援に関するお問い合わせ。現在、オンライン窓口の開設準備中です。',
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        english="Contact"
        title="お問い合わせ"
        lead="AI活用、システム導入、業務改善、営業DXなど、事業や業務に関するご相談をお聞かせください。"
      />
      <section
        className="contact-layout section container"
        aria-label="お問い合わせ入力"
      >
        <aside className="contact-aside">
          <p className="section-label">CONTACT FORM</p>
          <h2>ご相談内容について</h2>
          <p>
            現在の課題や検討していること、ご相談の背景などをお書きください。
          </p>
          <p>
            具体的なサービスが決まっていない場合も、課題に合わせてお選びいただけるよう、各事業をご紹介しています。
          </p>
          <a className="inline-link" href="/business">
            事業紹介を見る
          </a>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
