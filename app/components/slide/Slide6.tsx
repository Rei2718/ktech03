/* eslint-disable @next/next/no-img-element */
export default function Slide6() {
  return (
    <div className="relative w-full h-full bg-black/90 overflow-hidden">
      {/* コンテンツエリア */}
      <div className="absolute inset-0 z-10 
                      px-6 sm:px-10 md:px-16 lg:px-24 
                      py-10 sm:py-12 md:py-20 
                      flex flex-col md:flex-row 
                      items-center justify-center 
                      gap-6 sm:gap-10 md:gap-16 lg:gap-24
                      max-w-screen-xl mx-auto">
        
        {/* 左側（タイトル・情報） */}
        <div className="flex-1 min-w-0 flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Procreate6
          </h2>
          <p className="pt-4 sm:pt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            究極なアートスタジオ
          </p>
          <div className="pt-10 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">
              レベル : ★☆☆☆☆
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">
              進行度 : 進行中
            </p>
          </div>
          <button
            className="mt-4 sm:mt-6 border border-gray-300 text-gray-300 hover:text-white transition
                      text-xs sm:text-sm md:text-sm lg:text-base
                      py-1 sm:py-2 md:py-2 lg:py-2
                      px-2 sm:px-4 md:px-5 lg:px-6
                      rounded">
            詳細を見る
          </button>
        </div>

        {/* 右側（説明） */}
        <div className="flex-1 min-w-0 max-w-md text-center md:text-left pt-8 md:pt-0">
          <p className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-gray-200">
            ここに約100字の説明文が入ります。画面サイズに合わせ自動改行され、モバイルではできるだけ表示され、
            大画面では全文が右側にフル表示されるよう調整されています。
          </p>
        </div>
      </div>

      {/* 画像エリア（上部をフェード透過） */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        <img
          src="Screen06.png"
          alt="Procreate"
          className="w-full h-full object-cover object-center brightness-70 blur-[1px]"
        />
      </div>
    </div>
  );
}
