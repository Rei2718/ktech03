/* eslint-disable @next/next/no-img-element */
export default function Slide5() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 背景画像エリア */}
      <div className="absolute inset-0">
        <img
          src="Screen05.png"
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
              MOBILE APP DEVELOPMENT
            </h2>
            <p className="pt-4 sm:pt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              FLUTTER REACT-NATIVE
            </p>
            <p className="mt-12 text-sm sm:text-base md:text-lg lg:text-xl font-light text-[#A2A2A2]">
              日々進化するモバイルアプリの世界。FlutterやReact Nativeを用いて、iOSとAndroid両方に対応したアプリ開発を行い、デジタルを通じて新たな価値創造の可能性を広げています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
