# 引き継ぎ資料

## ページ

| URL | 内容 | ソース |
| --- | --- | --- |
| / | トップ、事業・強みの概要 | source/app/page.tsx |
| /business/ | 5事業、支援する課題、導入の流れ | source/app/business/page.tsx |
| /about/ | ミッション、ビジョン、価値観、将来方針 | source/app/about/page.tsx |
| /company/ | 会社概要 | source/app/company/page.tsx |
| /contact/ | 問い合わせ入力・確認画面 | source/app/contact/page.tsx |
| /privacy/ | プライバシーポリシー案 | source/app/privacy/page.tsx |

## 編集箇所

- 会社・事業データ：`source/lib/company.ts`
- 問い合わせフォーム：`source/components/contact-form.tsx`
- 共通メニュー・フッター：`source/components/site-header.tsx`、`site-footer.tsx`
- 基本デザイン：`source/app/globals.css`
- 各ページのデザイン：`source/app/pages.css`
- 写真・装飾の配置：`source/app/assets.css`
- 共通メタデータ・検索設定：`source/app/layout.tsx`

## 素材

`source/public/` と `static-site/` に写真2点・装飾SVG3点・faviconを収録しています。

- `images/bridge-main.png`：トップの打ち合わせイメージ（1122×1402）
- `images/bridge-company.png`：会社概要のオフィスイメージ（1448×1086）
- `decorations/bridge-connections.svg`：トップの接続ライン
- `decorations/bridge-orbits.svg`：価値観の円弧
- `decorations/bridge-divider.svg`：トップの区切り線

写真とSVGは依頼者が生成して提供した素材です。写真は実在する社員・オフィスを示すものではありません。ロゴはテキストの仮表記です。素材の生成条件・利用権限の確認は依頼者と引き継ぎ先で行ってください。

## 未確定・未接続の事項

1. 問い合わせ受信先、送信サービス、認証情報は未設定。送信準備中の表示を維持しています。
2. プライバシーポリシーは案。代表者、詳細住所、個人情報窓口、保管期間、委託先、安全管理措置等を実運用に合わせて確定してください。
3. 代表者名、設立日、詳細住所、電話番号など未提供の会社情報は推測で掲載していません。
4. `robots: { index: false, follow: false }` を設定しています。正式公開時に検索方針を確認してください。
5. bridge-tech.jpは候補として選択されましたが、取得済みとは確認できていません。DNS、HTTPS、ホスティングは別途設定が必要です。
6. 自社SaaSなどは将来構想として記載しています。提供中のサービスと混同しないでください。

## 引き継ぎ用に追加した機能

元プロジェクトのデザイン・本文・機能を保持し、共有用コピーにだけ静的書き出しを追加しています。

- `BRIDGE_STATIC_EXPORT=1` の場合は静的HTMLを生成。
- その場合だけCloudflare / Sitesの実行プラグインを外し、サーバー不要の配布版を生成。
- `scripts/build-static.mjs` からOS共通で実行可能。
- 元の作業用siteフォルダには変更を加えていません。

第三者パッケージの依存バージョンはpnpm-lock.yamlに固定されています。再配布・商用利用時は各依存パッケージのライセンスも確認してください。
