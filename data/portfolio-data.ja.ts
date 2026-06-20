// Japanese (日本語) content. Mirrors the shape of ./portfolio-data exactly.
// Non-translatable data (icons, urls, ids, tech names) is re-used from the
// English module so it stays in a single source of truth.
import {
  experienceContent as enExperience,
  footerContent as enFooter,
  heroContent as enHero,
  personalInfo as enPersonalInfo,
  projectsContent as enProjects,
  skillsContent as enSkills,
} from "./portfolio-data";

export const personalInfo = {
  ...enPersonalInfo,
  title: enPersonalInfo.titleJp,
  location: "インド・ムンバイ",
};

export const heroContent = {
  index: enHero.index,
  intro:
    "負荷に耐えるバックエンドを構築しています。非同期ジョブパイプライン、型安全な API、そして TypeScript / Node / Postgres スタック上の LLM ワークフロー。冪等性、クラッシュからの復旧、障害時にもデータが正しく保たれること。そんな地味だけれど大切な部分にこだわっています。",
  tagline:
    "本番運用を見据えた AI プラットフォームのバックエンドをゼロから設計しました。次の難しい課題を探しています。",
};

export const aboutContent = {
  index: "00",
  title: "概要",
  meta: "whoami",
  bio: [
    "ムンバイ大学で情報技術を学び、最近卒業しました(GPA 8.38)。バックエンドに強く惹かれています。多くの人が UI を見る一方で、私はその裏側で何が起きているかを考えます。ジョブを処理し続けるキュー、書き込みをまとめ上げるトランザクション、状態を失わずにクラッシュから復旧するワーカー。",
    "Slaab.ai では AI SEO プラットフォームのバックエンドをゼロから設計し、「本番運用」が実際に何を求めるのかを学びました。それ以外の時間は、Linux で自分の環境を壊しては直し、日本語(JLPT N3)を少しずつ勉強し、楽しいふりをしながら LeetCode に取り組んでいます。",
  ],
  facts: [
    { label: "拠点", value: "インド・ムンバイ" },
    { label: "専門", value: "バックエンド · 非同期ジョブ処理 · API" },
    { label: "愛用環境", value: "Linux (Fedora) · Neovim 入門中" },
    { label: "学習中", value: "日本語(JLPT N3)" },
    { label: "学歴", value: "ムンバイ大学 情報技術学士 · GPA 8.38" },
  ],
  interests: [
    "分散システム",
    "非同期ジョブ処理",
    "API 設計",
    "データベースとインデックス",
    "AI / LLM ワークフロー",
    "Linux とセルフホスティング",
  ],
};

export const skillsContent = {
  index: enSkills.index,
  title: "スキル",
  meta: enSkills.meta,
  description: "何かを作るときに手に取る道具たち。",
  categories: {
    languages: {
      label: "言語",
      icon: enSkills.categories.languages.icon,
      skills: enSkills.categories.languages.skills,
    },
    backend: {
      label: "バックエンド",
      icon: enSkills.categories.backend.icon,
      skills: enSkills.categories.backend.skills,
    },
    frontend: {
      label: "フロントエンド",
      icon: enSkills.categories.frontend.icon,
      skills: enSkills.categories.frontend.skills,
    },
    data: {
      label: "データ & キャッシュ",
      icon: enSkills.categories.data.icon,
      skills: enSkills.categories.data.skills,
    },
    devops: {
      label: "DevOps & ツール",
      icon: enSkills.categories.devops.icon,
      skills: enSkills.categories.devops.skills,
    },
  },
};

export const experienceContent = {
  index: enExperience.index,
  title: "職務経歴",
  meta: enExperience.meta,
  description: "実際にシステムを世に出した場所。",
  experiences: [
    {
      company: enExperience.experiences[0].company,
      position: "フルスタックデベロッパー",
      location: "リモート(インド)",
      duration: "2025年5月 〜 2025年7月",
      type: "正社員",
      summary:
        "本番運用を見据えた AI SEO プラットフォーム(自動監査、キーワード調査、AI コンテンツ生成)のバックエンドをゼロから設計・構築。システム面をエンドツーエンドで担当し、フロントエンドも並行して開発・リリースしました。",
      achievements: [
        "バックエンドアーキテクチャをゼロから設計:14 個の REST エンドポイント、tRPC レイヤー、監査・コンテンツ・エージェント領域にまたがる 200 以上の TypeScript モジュール。",
        "10 段階のエージェント型監査パイプラインを構築。外部データ(SERP、Lighthouse、セキュリティヘッダー、クロール)に対して LLM の推論をオーケストレーションし、生のサイトデータを採点済みで実行可能な改善策へと変換。",
        "非同期かつキューベースの実行モデル(BullMQ + Redis)を設計し、数分かかる監査をリクエストパスの外で実行。耐障害性のあるワーカー、グレースフルシャットダウン、クラッシュ復旧のための Postgres によるジョブ状態管理を実装。",
        "DataForSEO、FireCrawl、Google Lighthouse との冪等な連携を実装し、大規模なクロール/SERP データを正規化。ジョブごとのトークンと API 使用量を追跡し、LLM のコストを抑制。",
        "永続的なメモリとツール呼び出しを備えた対話型 SEO エージェントと、3 段階の記事生成ツール(アウトライン → セクション生成 → 自然な文章化)を実装。",
        "Next.js 15 / React 19 のフロントエンドをリリース:セッションミドルウェアを用いた Supabase SSR 認証、TanStack Query のデータ層、Zustand による状態管理、リロードをまたいで進行中のジョブを復元するライブ進捗ポーリング。",
      ],
      technologies: enExperience.experiences[0].technologies,
      icon: enExperience.experiences[0].icon,
    },
  ],
};

export const projectsContent = {
  index: enProjects.index,
  title: "主な制作物",
  meta: enProjects.meta,
  description:
    "ページネーション戦略、リアルタイムの整合性、デプロイまで、難しい判断をすべて自分で下せた個人プロジェクト。",
  projects: [
    {
      id: enProjects.projects[0].id,
      title: enProjects.projects[0].title,
      subtitle: "Discord 風のリアルタイムチャットプラットフォーム",
      period: "2023年8月 〜 2024年3月",
      summary:
        "サーバー、チャンネル、ロール、リアルタイムメッセージング、メディアアップロード、ボイスを備えた本格的な Discord 風チャットアプリ。エンドツーエンドの型安全性を持つ Turborepo モノレポとして構築。",
      highlights: [
        "Turborepo モノレポ(Bun/Hono API + Next.js クライアント)。共有 Zod 契約パッケージにより 25 の REST エンドポイント全体で型安全性を担保。",
        "UUIDv7 キーによるキーセットページネーションと、頻繁に使う外部キーへの複合インデックス。メッセージ量に関係なくチャンネル履歴の読み取りを定数時間に維持。",
        "クエリ層の ACID トランザクション内で Guest/Mod/Admin の RBAC を強制。Socket.io 上の楽観的リアルタイムメッセージングと TanStack Query のキャッシュ更新により、即時の編集/削除を再フェッチなしで実現。",
        "署名付き S3 アップロード(7 種のメディア、サーバー側で制限を強制)、Better Auth による OAuth + メール認証、Nginx TLS リバースプロキシ配下のマルチステージ Docker ビルド。",
      ],
      tech: enProjects.projects[0].tech,
      github: enProjects.projects[0].github,
    },
    {
      id: enProjects.projects[1].id,
      title: enProjects.projects[1].title,
      subtitle: "共同編集ドキュメントワークスペース",
      period: "2023年11月 〜 2023年12月",
      summary:
        "ライブカーソル、プレゼンス、コンフリクトのない同時編集を備えた、リアルタイムな Notion 風ワークスペース。無限にネストできるページと、公開/共有フローを完備。",
      highlights: [
        "Yjs + Convex のリアクティブクエリによるコンフリクトフリーな共同編集。カーソルとプレゼンスの調整には Cloudflare Worker + Durable Object を採用。",
        "16 個の Convex サーバーレス関数と 2 つの複合インデックスにより、無限ネストのページツリー、再帰的なアーカイブ/復元、孤立を防ぐ親子付け替えをサーバー側の所有権チェック付きで実現。",
        "公開プレビュー用ルートを備えた公開/共有フロー。60 以上のコンポーネントから成るエディタスタック(BlockNote リッチテキスト、カバー画像、絵文字アイコン、全文検索、ダーク/ライト、モバイル対応)。",
      ],
      tech: enProjects.projects[1].tech,
      github: enProjects.projects[1].github,
      demo: enProjects.projects[1].demo,
    },
    {
      id: enProjects.projects[2].id,
      title: enProjects.projects[2].title,
      subtitle: "RAWG API を用いたゲーム探索 SPA",
      period: "2023年4月 〜 2023年6月",
      summary:
        "RAWG の 88 万件以上のゲームカタログを対象としたレスポンシブな探索アプリ。多条件フィルタリング、無限スクロール、そして冗長なフェッチをほぼ排除するキャッシュ戦略を備えています。",
      highlights: [
        "多条件フィルタリング(ジャンル、プラットフォーム、並び替え、検索)と無限スクロールページネーションを、25 以上のコンポーネントと 11 のカスタムフックで実装。",
        "ジャンル/プラットフォームの一覧を TanStack Query の initialData として事前投入し、staleTime を 24 時間に設定。フィルターサイドバーをネットワークなしで初回描画し、キャッシュ期間中は再フェッチなし。",
        "プロップドリリングしていたツリーを Zustand ストアと Axios ベースの汎用 ApiClient<T> にリファクタリング。ルート単位のコード分割、動的 SEO、マルチステージ Docker ビルド(Bun → Nginx)を実装。",
      ],
      tech: enProjects.projects[2].tech,
      github: enProjects.projects[2].github,
      demo: enProjects.projects[2].demo,
    },
    {
      id: enProjects.projects[3].id,
      title: enProjects.projects[3].title,
      subtitle: "システム的に Go を学ぶ",
      period: "2024年",
      summary:
        "Go に習熟するために作った小さな REST API。クリーンなハンドラ構成、ORM ではなく生 SQL、デプロイ向けにコンテナ化。",
      highlights: [
        "Gin を用いたイディオマティックな Go サービス、LibSQL に対する手書き SQL、小さなイメージ向けに調整した Dockerfile。「Go らしく読める Go」を書くための意図的な練習です。",
      ],
      tech: enProjects.projects[3].tech,
      github: enProjects.projects[3].github,
    },
    {
      id: enProjects.projects[4].id,
      title: enProjects.projects[4].title,
      subtitle: "公開済み npm ライブラリ · Lua で実装したトークンバケット",
      period: "2025年",
      summary:
        "レート制限を「あるべき形」で実現する、公開済みの npm パッケージ。トークンバケットの判定処理を丸ごと Redis 内のアトミックな Lua スクリプトとして実行するため、各チェックはネットワーク往復 1 回で済み、競合状態が一切発生しません。そのまま使える RateLimiter クラスと、任意の Hono ミドルウェアを同梱。",
      highlights: [
        "トークンバケットを Redis の Lua スクリプトでエンドツーエンドに実装。状態の読み取り、経過時間に応じた補充、上限のキャップ、減算をすべてサーバー側でアトミックに実行し、素朴な実装が並行時に陥る check-then-act の競合を根絶。",
        "リクエストごとに EVALSHA 呼び出し 1 回:スクリプトを Redis にキャッシュするため、負荷に関係なく各チェックは往復 1 回で完結。ボトルネックにならず、ホットパスに置けるよう設計。",
        "フレームワーク非依存の RateLimiter コアと、429 のクリーンな JSON レスポンスを返す任意の Hono ミドルウェア。完全に型付けされ、maxRequests / windowSizeInSeconds を設定可能、tsup により ESM として配布。",
        "@zjunaidz/rate-limiter として npm に公開。インストール可能でドキュメント付き、実プロジェクトで再利用できます。使い捨てのデモではありません。",
      ],
      tech: enProjects.projects[4].tech,
      github: enProjects.projects[4].github,
    },
  ],
  outro: "他のプロジェクトは GitHub に置いています。そしていつも、もっと大きな何かを作っている途中です。",
};

export const footerContent = {
  index: enFooter.index,
  title: "お問い合わせ",
  meta: enFooter.meta,
  blurb:
    "バックエンド/フルスタックの仕事や、面白い課題を歓迎します。一番早い連絡手段はメールです。すべて目を通します。",
  links: enFooter.links,
};
