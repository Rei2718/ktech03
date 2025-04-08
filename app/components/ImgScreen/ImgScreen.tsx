"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ImgScreen() {
  const bgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // ✅ 背景パララックス：画像自体をトリガーにスクロール時に上下移動
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // ✅ タイトルのフェード＆スライドアニメーション
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

    // ✅ テキストのフェード＆スライドアニメーション
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

    // ✅ メイン画像のフェード＆スケールアニメーション
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { autoAlpha: 0, scale: 0.9, y: 30 },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative overflow-hidden my-5">
      {/* テキストコンテンツを上部に配置 */}
      <div className="absolute top-0 left-0 w-full z-20 flex flex-col items-center">
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-center pb-8 sm:pb-12 md:pb-16 lg:pb-20 max-w-4xl font-bold"
        >
          生き生きとしたシーンを
        </h1>
        <p
          ref={textRef}
          className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-center w-10/12 max-w-3xl text-[#A2A2A2]"
        >
          キャラクターに命を吹き込む大規模なセットを1つのプロジェクトで作成できます。
          ステージで描画するか、要素を完璧な瞬間まで舞台裏に留める。
        </p>
      </div>

      {/* 背景とその他の要素 */}
      <div className="relative z-0">
        {/* 上部グラデーション */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-[20svh] bg-gradient-to-b from-black via-black/70 to-transparent z-10" />
        {/* 下部グラデーション */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[20svh] bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

        {/* 背景画像 */}
        <div className="image-container relative z-0">
            <img
            ref={bgRef}
            src="BG-1.jpg"
            alt=""
            className="w-full h-[80svh] sm:h-[90svh] md:h-[100svh] lg:h-[110svh] xl:h-[120svh] object-cover z-0"
            />
        </div>
      </div>
    </section>
  );
}
