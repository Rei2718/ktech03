/* eslint-disable @next/next/no-img-element */
export default function Slide4() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 背景画像エリア */}
      <div className="absolute inset-0">
        <img
          src="gr4.webp"
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
              VISUAL DESIGN
            </h2>
            <p className="pt-4 sm:pt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              PROCREATE CANVA &MORE
            </p>
            <p className="mt-12 text-sm sm:text-base md:text-lg lg:text-xl font-light">
              デザインは、言葉を超えて思想や熱意を伝える力を持っています。ProcreateやCanvaを活用し、シンプルながら計算されたデザインで、見る人の心に深く響くビジュアル表現を追求しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
