/* eslint-disable @next/next/no-img-element */
export default function Mac2() {
  return (
    <div className="relative w-full h-full bg-black/90 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" />
      <div className="absolute top-0 left-0 z-10 flex flex-col justify-between h-full px-6 sm:px-10 md:px-16 lg:px-24 py-10 sm:py-12 md:py-20">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-left">
          <div className="pb-6">WEB ENGINEERING</div>
          <div className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl max-w-3xl mx-auto">HTML・CSS・JavaScriptフロントエンド基礎</div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="gr8.webp"
          alt="mac1"
          className="w-full h-full object-cover brightness-90"
        />
      </div>
    </div>
  );
}
