/* eslint-disable @next/next/no-img-element */
export default function Slide6() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 背景画像エリア */}
      <div className="absolute inset-0">
        <img
          src="gr6.webp"
          alt="背景画像"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      
      {/* コンテンツエリア */}
      <div
        className="relative z-10 flex flex-col h-full overflow-y-auto 
                   px-6 sm:px-10 md:px-16 lg:px-24 py-10 sm:py-12 md:py-20 
                   max-w-screen-xl mx-auto"
      >
        {/* 中央寄せ用ラッパー */}
        <div className="flex items-center justify-center w-full h-full">
          {/* テキストコンテンツ群（左揃え） */}
          <div className="w-full max-w-3xl text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
              BUSINESS CREATIVE INITIATIVES
            </h2>
            <p className="pt-4 sm:pt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              COLLABORATIONS PRESENTATIONS
            </p>
            <p className="mt-12 text-sm sm:text-base md:text-lg lg:text-xl font-light">
              技術だけでなくビジネス視点やコミュニケーション能力も大切にしています。ボードゲーム開発や学会発表を通じて思考を磨き、外部との協力やプレゼンテーションで新たなイノベーションの可能性を追求しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
