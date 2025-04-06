/* eslint-disable @next/next/no-img-element */
export default function HandSection() {
    return (
      <section className="bg-black text-white flex items-center justify-center min-h-screen">
        <div className="relative inline-block">
          {/* テキスト要素を先に配置 */}
          <div className="relative flex items-center justify-center pt-14 pb-24">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              俺が欲しいのは IPhone 16 Pro この後は製作中
            </p>
          </div>
          {/* デフォルトは横幅に合わせ、md:以降は高さを固定して object-cover */}
          <img
            src="hand.jpg"
            alt="Hand"
            className="w-full h-[150svw] lg:h-[150svh] object-cover"
          />
        </div>
      </section>
    );
  }
  