# LINE英会話スクール LP 仕様書

## 1. 概要

LINEを活用した英会話スクールのランディングページ（LP）です。サービスの魅力と特徴を伝え、資料請求を促すことを目的としています。

## 2. 目的

*   LINE英会話スクールの認知度向上
*   潜在顧客へのサービス訴求
*   資料請求を通じたリード獲得

## 3. ターゲットユーザー

*   手軽に英会話を学びたい社会人
*   忙しい日常の中で効率的に学習したい方
*   LINEを日常的に利用している方

## 4. 主要セクション

*   **ヘッダー (Header)**
    *   ロゴ（テキスト）
    *   ナビゲーションメニュー（特徴、コース、お問い合わせ）
*   **ヒーローセクション (Hero Section)**
    *   キャッチコピー、サブコピー
    *   「資料請求はこちら」ボタン
    *   背景画像（Pexelsより）
*   **特徴セクション (Features Section)**
    *   LINE英会話スクールの3つの特徴（手軽さ、質の高い講師陣、柔軟な予約）
    *   各特徴に対応する画像（Pexelsより）
*   **コース紹介セクション (Course Section)**
    *   日常英会話コース
    *   ビジネス英会話コース
    *   各コースの説明と料金
*   **資料請求セクション (Contact Section)**
    *   お問い合わせフォーム（お名前、メールアドレス、お問い合わせ内容）
    *   フォーム送信シミュレーション機能（確認モーダル、完了モーダル）
*   **フッター (Footer)**
    *   著作権表示
    *   プライバシーポリシー、運営会社、資料請求へのリンク

## 5. 使用技術

*   **HTML5**: ページ構造の定義
*   **CSS3**: スタイリング
*   **Bootstrap 5.3**: レスポンシブデザインとUIコンポーネント
*   **JavaScript**: スムーズスクロール、フォーム送信シミュレーション（モーダル表示）

## 6. デプロイメント

*   **GitHub Pages**: 静的サイトホスティング
*   **ブランチ戦略**: `gh-pages`ブランチをデプロイ用に使用

## 7. 画像ソース

すべての画像は [Pexels](https://www.pexels.com/) から取得し、商用利用可能なライセンスに基づいています。

*   **ヒーローセクション背景**: [https://www.pexels.com/photo/woman-in-white-shirt-using-macbook-air-4145190/](https://www.pexels.com/photo/woman-in-white-shirt-using-macbook-air-4145190/)
*   **特徴 - 手軽さ**: [https://www.pexels.com/photo/person-holding-a-smartphone-5905709/](https://www.pexels.com/photo/person-holding-a-smartphone-5905709/)
*   **特徴 - 質の高い講師陣**: [https://www.pexels.com/photo/three-women-sitting-on-chair-3184431/](https://www.pexels.com/photo/three-women-sitting-on-chair-3184431/)
*   **特徴 - 柔軟な予約**: [https://www.pexels.com/photo/person-writing-on-a-notebook-4348403/](https://www.pexels.com/photo/person-writing-on-a-notebook-4348403/)

## 8. フォーム機能の注意点

お問い合わせフォームは、クライアントサイドJavaScriptによる送信シミュレーション（確認モーダル、完了モーダル表示）のみを実装しており、実際のメール送信機能は含まれていません。実際のメール送信には、別途サーバーサイドの実装または外部フォームサービスとの連携が必要です。
