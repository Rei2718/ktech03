/* eslint-disable @next/next/no-img-element */
export default function Slide4() {
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
            WEB APP
          </h2>
          <p className="pt-4 sm:pt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            WEBアプリ <br/>
            NEXT.JS
          </p>
          <p className="mt-12 text-sm sm:text-base md:text-lg lg:text-xl font-light">
            ここに約100字の説明文が入ります。画面サイズに合わせ自動改行され、モバイルではできるだけ表示され、
            大画面では全文が右側にフル表示されるよう調整されています。
          </p>
        </div>
      </div>

      {/* 画像エリア（上部をフェード透過） */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        <img
          src="Screen04.png"
          alt="Procreate"
          className="w-full h-full object-cover object-center brightness-80"
        />
      </div>
    </div>
  );
}
