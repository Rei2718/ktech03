"use client";

export default function GallerySection() {
  const galleryItems = [
    { src: "slide1.jpg", title: "Artwork 1" },
    { src: "slide2.jpg", title: "Artwork 2" },
    { src: "slide3.jpg", title: "Artwork 3" },
    { src: "slide4.jpg", title: "Artwork 4" },
    { src: "slide5.jpg", title: "Artwork 5" },
    { src: "slide6.jpg", title: "Artwork 6" },
  ];

  return (
    <section id="gallery" className="py-10 text-white">
      <div className="w-full mx-auto">
        <div className="w-11/12 mx-auto text-left px-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
            Gallery
          </h2>
        </div>
        {/* 横スクロール可能なコンテナの左右パディングを w-1/12 の半分に設定 */}
        <div className="overflow-x-auto no-scrollbar px-[calc(100%/24)]">
          <div className="flex snap-x snap-mandatory">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center px-6 w-[85lvw] lg:w-[80lvh]"
              >
                {/* 正方形を維持するため aspect-square を利用 */}
                <div className="relative overflow-hidden rounded-4xl border-[1.5px] border-white/20 aspect-square">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center brightness-85"
                  />
                  {/* グラデーションオーバーレイ */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-1/2"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 0%, #000000 70%, #000000 100%)",
                    }}
                  />
                  {/* 作品名の表示 */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end justify-center p-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* スクロールバー（およびスクロールインジケーター）を完全に非表示にするスタイル */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
    </section>
  );
}
