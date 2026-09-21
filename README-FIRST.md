# 株式会社Bridge Webサイト 引き継ぎ一式

このZIPには、6ページのWebサイトの編集用ソースと、HTML・CSS・JavaScriptとして書き出した静的版を収録しています。

## フォルダ構成

- `static-site/`：表示用の完成ファイル。HTML、CSS、JavaScript、画像、SVG、フォント、画面遷移用データを含みます。
- `source/`：編集用のReact / TypeScript / Vinextプロジェクト。設定ファイル・依存関係のロックファイルを含みます。
- `preview.mjs`：追加パッケージ不要の静的版プレビューサーバー。
- `HANDOVER.md`：構成、編集箇所、未確定事項の引き継ぎ資料。

## まず表示を確認する

Node.js 22.13以上を用意し、このREADMEがあるフォルダで次を実行してください。

```sh
node preview.mjs
```

ブラウザーで http://localhost:4173/ を開きます。停止するにはターミナルでCtrl+Cを押してください。

Python 3がある場合は、次の方法でも表示できます。

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory static-site
```

HTMLファイルのダブルクリック（file://）には対応していません。サイトはドメインのルートを基準にCSS・JavaScript・画像を読み込みます。必ずHTTPサーバーを経由してください。

## 編集する

Node.js 22.13以上とpnpm 11.19.0を使用します。初回の依存パッケージ取得にはインターネット接続が必要です。

```sh
cd source
pnpm install --frozen-lockfile
pnpm run dev
```

表示URLはターミナルに出力されます。

静的版を再作成する場合：

```sh
pnpm run build:static
```

`source/dist/client/` に書き出されます。このフォルダの全内容を `static-site/` の内容と置き換えてください。更新時には古い静的版を別途バックアップしてください。

従来のCloudflare向けビルドは `pnpm run build` で実行できます。静的版とサーバー版は同じdistを使用するため、用途に応じてビルドし直してください。

## 共有・配置時の注意

- `static-site/` の内容一式を、静的ホスティングのドキュメントルートに配置できます。サブディレクトリ設置は追加調整が必要です。
- 各ページはディレクトリ内のindex.html形式です。サーバーはディレクトリのindex.html配信に対応させてください。
- ビルド済み静的版の表示にnode_modulesは不要です。編集用の依存パッケージはロックファイルをもとに再取得します。
- 秘密情報、認証情報、Git履歴、node_modules、ローカルキャッシュは収録していません。
- ドメイン候補はbridge-tech.jpですが、この引き継ぎ時点で取得・DNS接続・公開は確認できていません。

## 現在の制限

お問い合わせは入力・確認・修正までです。メール送信やサーバーへの保存は未接続です。プライバシーポリシーは案で、検索インデックスも無効のままです。公開前に `HANDOVER.md` の未確定項目を確認してください。
