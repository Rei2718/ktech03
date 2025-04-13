"use client"
export default function RecruitmentSection() {
  return (
    <div className="flex items-center justify-center w-full h-auto min-h-svh pt-32">
      <div className="max-w-[85svw] mx-auto" id="join">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          {/* セクション見出し */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              チームに参加
            </h1>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              ひとりひとりの「やってみたい」を原動力に
            </p>
          </div>

          {/* 2カラムグリッド */}
          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            {/* 左カラム：採用に関する概要カード */}
            <div className="flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
              <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                ── 全国・世界が舞台。
              </h2>
              <p className="text-gray-600 dark:text-neutral-400">
                K-Techは、3DCG・アプリ開発・機械学習・メディアアートなど、
                最先端の技術とクリエイティブを武器に、国内外のコンテストやイベントで結果を残しているチームです。
                私たちと共に、あなたの“好きや興味”を世界でも通用する力へと変えていきませんか？
              </p>
            </div>

            {/* 右カラム：アイコンブロック */}
            <div className="divide-y divide-gray-200 dark:divide-neutral-800">
              {/* アイコンブロック 1 */}
              <div className="flex gap-x-7 py-6">
                <svg
                  className="shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                    ご質問等はオフラインでの活動時に
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                    毎週月曜日と木曜日の放課後にCotanもしくは情報1の教室で活動をしています。
                  </p>
                </div>
              </div>

              {/* アイコンブロック 2 */}
              <div className="flex gap-x-7 py-6">
                <svg
                  className="shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                    Discordアカウントのご用意を
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                    メンバー同士の連絡やプロジェクトの進行、オンラインミーティングなどは全てDiscordで行います。
                  </p>
                </div>
              </div>

              {/* アイコンブロック 3 */}
              <div className="flex gap-x-7 py-6">
                <svg
                  className="shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m7 11 2-2-2-2" />
                  <path d="M11 13h4" />
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                    経験の有無は関係ありません
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                    チームメンバーが最大限サポートします。熱意と野心だけはお忘れなく...♡
                  </p>
                </div>
              </div>

              {/* アイコンブロック 4 */}
              <div className="flex gap-x-7 py-6">
                <svg
                  className="shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                    何かご質問がある場合はお気軽に
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                    オフラインでの活動に来ていただくのが望ましいですが、都合が合わない場合は以下の連絡先まで
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                    href="mailto:s2007014@spc.ritsumei.ac.jp"
                  >
                    s2007014@spc.ritsumei.ac.jp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
