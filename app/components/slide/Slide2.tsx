/* eslint-disable @next/next/no-img-element */
export default function Slide2() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 背景画像エリア */}
      <div className="absolute inset-0">
        <img
          src="Screen02.png"
          alt="背景画像"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
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
              MACHINE-LEARNING DATA-SCIENCE
            </h2>
            <p className="pt-4 sm:pt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              PANDAS TENSORFLOW PYTORCH
            </p>
            <p className="mt-12 text-sm sm:text-base md:text-lg lg:text-xl font-light text-[#A2A2A2]">
              膨大なデータの海から、価値ある特徴を見つけ出す。Pythonの豊富なライブラリを用い、分析・可視化からモデルの設計・評価まで、数値の背後にある物語を紐解きます。理論と実践を結びつけ、データが語る声に耳を傾けています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
