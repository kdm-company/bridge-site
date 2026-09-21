import type { Metadata } from 'next';
import { PageIntro } from '@/components/site-parts';

export const metadata: Metadata = {
  title: 'プライバシーポリシー（案） | 株式会社Bridge',
  description:
    '株式会社Bridgeの個人情報の取り扱いに関する方針案です。問い合わせ窓口や実際の運用を確認したうえで確定します。',
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        english="Privacy policy"
        title="プライバシーポリシー"
        lead="個人情報の取り扱いについて"
      />
      <div className="policy-content container">
        <div className="form-notice">
          <strong>公開準備中の方針案です。</strong>
          <p>
            本ページは確定前の案です。窓口、保管方法、委託先、安全管理措置などを実際の運用に合わせて確認し、正式な方針として公開します。現在のお問い合わせ画面から情報は送信されません。
          </p>
        </div>
        <section>
          <h2>01　基本方針</h2>
          <p>
            株式会社Bridge（以下「当社」）は、事業活動において取り扱う個人情報の重要性を認識し、個人情報の保護に関する法令等に沿った適切な取り扱いを基本方針とします。
          </p>
        </section>
        <section>
          <h2>02　取得する情報と利用目的</h2>
          <p>
            お問い合わせ窓口の開設後は、会社名、氏名、メールアドレス、ご相談内容など、ご本人が入力した情報を、次の目的で利用することを予定しています。
          </p>
          <ul>
            <li>お問い合わせ内容の確認と回答</li>
            <li>ご相談に関連するサービスの説明、提案、連絡</li>
            <li>依頼された支援の検討および対応</li>
          </ul>
          <p>
            上記以外の情報の取得や利用を行う場合は、その内容と目的に合わせて本方針を整えます。
          </p>
        </section>
        <section>
          <h2>03　第三者への提供・業務委託</h2>
          <p>
            個人データの第三者への提供は、法令上認められる場合等を除き、ご本人の同意を得ることを基本とします。取り扱いを委託する場合の委託先、管理方法、必要な監督については、利用サービスを決定したうえで確認します。
          </p>
        </section>
        <section>
          <h2>04　安全管理と保管</h2>
          <p>
            情報へのアクセス権限、保存先、保存期間、不要となった情報の削除、従業者・委託先の管理など、実施する安全管理措置を運用に合わせて定めます。正式公開時には、実際に講じる措置について必要な内容を記載します。
          </p>
        </section>
        <section>
          <h2>05　開示・訂正・利用停止等</h2>
          <p>
            ご本人からの利用目的の通知、開示、訂正、利用停止等のご相談に対応する窓口と手続きを設けます。本人確認の方法、対応手順、手数料の有無などは、窓口の開設に合わせて案内します。
          </p>
        </section>
        <section>
          <h2>06　Cookie・外部サービス</h2>
          <p>
            現時点のサイトには、当社がアクセス解析や広告配信のために設置したタグはありません。公開時に利用するホスティング、問い合わせ受付、アクセス解析等のサービスを確認し、Cookieの利用や外部への情報送信がある場合は、その内容に合わせて案内を整えます。
          </p>
        </section>
        <section>
          <h2>07　事業者・お問い合わせ窓口</h2>
          <dl className="policy-company">
            <div>
              <dt>事業者</dt>
              <dd>株式会社Bridge</dd>
            </div>
            <div>
              <dt>所在地</dt>
              <dd>大阪府藤井寺市</dd>
            </div>
            <div>
              <dt>窓口</dt>
              <dd>開設準備中</dd>
            </div>
          </dl>
          <p>
            正式公開に向けて、詳細な所在地、代表者、連絡先および受付手順を確定します。
          </p>
        </section>
        <section>
          <h2>08　方針の見直し</h2>
          <p>
            事業内容、利用するサービス、運用の変更等に応じて方針を見直します。制定日・改定日は、正式な方針の公開時に記載します。
          </p>
        </section>
        <p className="policy-reference">
          作成時の参考：
          <a
            href="https://www.ppc.go.jp/personalinfo/faq/APPI_QA/"
            target="_blank"
            rel="noopener noreferrer"
          >
            個人情報保護委員会「個人情報保護法ガイドラインに関するQ&amp;A」
          </a>
        </p>
      </div>
    </>
  );
}
