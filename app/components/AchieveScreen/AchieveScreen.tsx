/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MarqueeProps {
  images: string[];
  direction?: "normal" | "reverse";
  speed?: number; // px per second
}

const Marquee: React.FC<MarqueeProps> = ({
  images,
  direction = "normal",
  speed = 50,
}) => {
  // 複数セット（両端に余分に設置）の個数設定（奇数にして中央に基準セットが来るように）
  const copies = 5;
  const middleIndex = Math.floor(copies / 2); // 中央セットのインデックス（例：5なら2）

  // marquee 全体のコンテナ ref
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  // 中央セットの幅計測用 ref
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  // 各画像の読み込み状態をカウント
  const [loadedImages, setLoadedImages] = useState<number>(0);
  const allImagesLoaded = loadedImages >= images.length;

  // onLoad で読み込み完了をカウント
  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  // キャッシュ対応：マウント後に ref 内の画像の complete 状態をチェック
  useLayoutEffect(() => {
    if (!imageContainerRef.current) return;
    const imgs = imageContainerRef.current.querySelectorAll("img");
    imgs.forEach((img) => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        setLoadedImages((prev) => prev + 1);
      }
    });
  }, [images]);

  // すべての画像が読み込まれたタイミングでアニメーション初期化
  useLayoutEffect(() => {
    if (!allImagesLoaded) return;
    if (!marqueeRef.current || !imageContainerRef.current) return;

    // 1セット分の横幅を計測
    const containerWidth = imageContainerRef.current.offsetWidth;
    console.log("Container width:", containerWidth);
    if (containerWidth === 0) {
      console.error("画像セットの横幅が0です。CSS設定や画像パスを確認してください。");
      return;
    }

    const marqueeEl = marqueeRef.current;

    if (direction === "normal") {
      // 通常方向の場合：
      // 初期表示を中央セットが表示されるように配置（index = middleIndex）
      gsap.set(marqueeEl, { x: -middleIndex * containerWidth });
      // 1セット分左へ移動（次のセットへ）
      gsap.to(marqueeEl, {
        x: -(middleIndex + 1) * containerWidth,
        duration: containerWidth / speed,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) =>
            // ラップ範囲を中央セット付近に設定：
            // x の値が [-(middleIndex+1)*containerWidth, -middleIndex*containerWidth] でループ
            gsap.utils.wrap(
              -(middleIndex + 1) * containerWidth,
              -middleIndex * containerWidth,
              parseFloat(x)
            )
          ),
        },
      });
    } else {
      // 逆方向の場合：
      gsap.set(marqueeEl, { x: -middleIndex * containerWidth });
      // 逆方向は右へ移動（x の値が大きくなる方向）
      gsap.to(marqueeEl, {
        x: -(middleIndex - 1) * containerWidth,
        duration: containerWidth / speed,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) =>
            // ラップ範囲は [ -middleIndex*containerWidth, -(middleIndex-1)*containerWidth ]
            gsap.utils.wrap(
              -middleIndex * containerWidth,
              -(middleIndex - 1) * containerWidth,
              parseFloat(x)
            )
          ),
        },
      });
    }

    // クリーンアップ：アンマウント時にアニメーション停止
    return () => {
      gsap.killTweensOf(marqueeEl);
    };
  }, [allImagesLoaded, direction, speed, middleIndex]);

  // 中央セット（ref 用）を用いる JSX
  const imageSetWithRef = (
    <div className="marquee-inner" ref={imageContainerRef}>
      {images.map((img: string, index: number) => (
        <img
          key={`img-${index}`}
          src={`/${img}.svg`}
          alt={`Award ${index + 1}`}
          onLoad={handleImageLoad}
          className="mx-4 inline-block h-[20svh] filter invert"
        />
      ))}
    </div>
  );

  // 他は単なる複製としてレンダリング（key で区別）
  const imageSetWithoutRef = (
    <div className="marquee-inner">
      {images.map((img: string, index: number) => (
        <img
          key={`clone-img-${index}`}
          src={`/${img}.svg`}
          alt={`Award ${index + 1}`}
          onLoad={handleImageLoad}
          className="mx-4 inline-block h-[20svh] filter invert"
        />
      ))}
    </div>
  );

  // copies 個分のセットを用意。中央のみ ref 付き、それ以外は単純な複製とする
  const imageCopies = Array.from({ length: copies }).map((_, i) => {
    if (i === middleIndex) {
      return (
        <React.Fragment key={`copy-${i}`}>
          {imageSetWithRef}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={`copy-${i}`}>
        {imageSetWithoutRef}
      </React.Fragment>
    );
  });

  return (
    <div className="marquee-wrapper overflow-hidden relative">
      <div className="marquee whitespace-nowrap" ref={marqueeRef}>
        {imageCopies}
      </div>
    </div>
  );
};

export default function AchieveScreen() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    // タイトルのフェード＆スライドアニメーション
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // テキストのフェード＆スライドアニメーション
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // public フォルダ内の SVG 画像（拡張子除く）のファイル名配列
  const awardImages: string[] = [
    "award1",
    "award2",
    "award3",
    "award4",
    "award5",
    "award6",
    "award7",
  ];

  return (
    <section className="w-full h-auto flex flex-col items-center py-10" id="achieve">
      <div className="text-center">
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl pb-12 sm:pb-16 md:pb-20 lg:pb-24 font-bold w-10/12 mx-auto"
        >
          国内外で爪痕を残す
        </h1>
        <p
          ref={textRef}
          className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2x text-center mx-auto w-10/12 text-[#A2A2A2] max-w-6xl"
        >
          k-Techは単なるIT同好会の枠を超え、国内外のコンテストで次々と実績を刻んでいます。
          3DCGの精緻な作品、機械学習を活用したプロジェクトやコンテスト、洗練されたWebデザイン、
          それぞれの分野で高い評価を獲得し、私たちの足跡は確かに残されています。
          ここでの努力と挑戦が変えていく。あなたも共に、新たな爪痕を残しませんか。
        </p>
      </div>

      {/* 第一バナー（通常方向：右→左スクロール） */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        <Marquee images={awardImages} direction="normal" speed={50} />
      </div>

      {/* 第二バナー（逆方向：左→右スクロール） */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 mt-4">
        <Marquee images={awardImages} direction="reverse" speed={50} />
      </div>
    </section>
  );
}
