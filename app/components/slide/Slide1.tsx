/* eslint-disable @next/next/no-img-element */
export default function Slide1() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 背景画像エリア */}
      <div className="absolute inset-0">
        <img
          src="dr1.webp"
          alt="Procreate"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* コンテンツエリア */}
      <div
        className="relative z-10 flex flex-col h-full overflow-y-auto 
                   px-6 sm:px-10 md:px-16 lg:px-24 py-10 sm:py-12 md:py-20 
                   max-w-screen-xl mx-auto"
      >
        {/* 中央寄せ用のラッパー */}
        <div className="flex items-center justify-center w-full h-full">
          {/* テキストコンテンツ群（左揃え） */}
          <div className="w-full max-w-3xl text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
              3DCG GRAPHICS
            </h2>
            <p className="pt-4 sm:pt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              BLENDER MAYA CINEMA4D
            </p>
            <p className="mt-12 text-sm sm:text-base md:text-lg lg:text-xl font-light">
              光と影が織りなす仮想の舞台。Blenderを主に駆使し、私たちは想像の翼を広げ、形なき夢を具現化します。モデリングからアニメーションまで、創造の旅路は終わることなく、国内外のコンテストでの栄誉もその一歩に過ぎません。常に新たな表現を求め、最先端のクリエイティブシーンを探求し続けます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
