/* eslint-disable @next/next/no-img-element */
export default function Mac1() {
  return (
    <div className="relative w-full h-full bg-black/90 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" />
      <div className="absolute top-0 left-0 z-10 flex flex-col justify-between h-full px-6 sm:px-10 md:px-16 lg:px-24 py-10 sm:py-12 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-left">
          Built for Apple Intelligence.<br />
          Personal, private, powerful.
        </h2>
        <button className="mx-auto border border-gray-300 text-gray-300 hover:text-white transition text-xs sm:text-sm md:text-sm lg:text-base py-1 sm:py-2 md:py-2 lg:py-2 px-2 sm:px-4 md:px-5 lg:px-6 rounded">
          詳細を見る
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-0">
        <img
          src="Screen01.png"
          alt="mac1"
          className="w-full object-cover object-bottom brightness-70"
        />
      </div>
    </div>
  );
}
