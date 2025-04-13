/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!imageRef.current) return;
  
    // パララックス効果
    gsap.to(imageRef.current.querySelector("img"), {
      y: "-100",
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  
    // アニメーション効果
    gsap.utils.toArray<HTMLElement>(".animate-on-scroll").forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  
    ScrollTrigger.refresh();
  }, []);  

  return (
    <div className="relative">
      {/* セクション1 */}
      <div className="h-[100svh] relative z-10 flex items-center justify-center pb-10" id="about">
        <div className="mx-auto flex flex-col items-center text-center animate-on-scroll">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-3 sm:pb-4 md:pb-5 lg:pb-6 font-bold w-10/12">
            About Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold pb-8 sm:pb-12 md:pb-16 lg:pb-20 w-10/12">
            最高にプロフェッショナルで <br />
            クリエイティブなチーム
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2x text-center text-[#A2A2A2] max-w-5xl w-10/12">
            私たち k-Tech は、先端技術とアートの境界を超え、独自の領域を切り開いてきました。
            3DCG、AI、Web開発など多様な専門性を持つメンバーが集い、
            互いの知識と感性を共有しながら革新的なプロジェクトを生み出しています。
            国内外のコンテストでの受賞実績は、技術力と創造性の証。単なる技術習得に留まらず、
            その先の可能性を追求する姿勢がk-Techの核心です。
          </p>
        </div>
      </div>

      {/* 背景画像＋無限スクロールテキスト */}
      <div
        ref={imageRef}
        className="absolute top-[50svh] w-full h-[120svh] z-0 overflow-hidden"
      >
        <img
          src="Screen01.png"
          alt="Transition Image"
          className="w-full h-[120svh] object-cover"
        />

        {/* オーバーレイ */}
        <div
          className="pointer-events-none absolute top-0 left-0 w-full z-10"
          style={{
            height: "50svh",
            background: "linear-gradient(to bottom, #000 0%, #000 10svh, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full z-10"
          style={{
            height: "50svh",
            background: "linear-gradient(to top, #000 0%, #000 10svh, transparent 100%)",
          }}
        />
      </div>

      {/* セクション2 */}
      <div className="h-[100svh] relative z-10 flex items-center justify-center pb-10" id="our_vision">
        <div className="mx-auto flex flex-col items-center text-center animate-on-scroll">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-3 sm:pb-4 md:pb-5 lg:pb-6 font-bold w-10/12">
            OUR VISION
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold pb-8 sm:pb-12 md:pb-16 lg:pb-20 w-10/12">
            個性が融合し、唯一無二を生み出す
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2x text-center text-[#A2A2A2] max-w-5xl w-10/12">
            技術と芸術、理論と実践。これらが融合する瞬間に未来は生まれます。k-Techでは一人ひとりの独自性を尊重し、
            異なる視点や専門知識が交わる化学反応を大切にしています。受け身ではなく自ら提案し行動する文化を育み、
            互いを高め合う環境を創造。技術を操るだけでなく、技術で世界をより良くするビジョナリーであり続けることがk-Techの使命です。
          </p>
        </div>
      </div>
    </div>
  );
}
