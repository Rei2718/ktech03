"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ImgScreen() {
  const sectionRef = useRef(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // ✅ 背景パララックス
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        y: -100, // スクロールに応じて上に移動（数値で深さ調整）
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // ✅ セクション全体フェードイン
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // ✅ タイトル
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

    // ✅ テキスト
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

    // ✅ メイン画像
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
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[120svh] w-full flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* ✅ パララックス背景画像 */}
      <img
        ref={bgRef}
        src="BG-1.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-[120svh] w-full object-cover will-change-transform"
      />

      {/* フェードオーバーレイ */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[15svh] bg-gradient-to-b from-black via-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[15svh] bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* メインコンテンツ */}
      <div className="z-10 flex w-full max-w-screen-xl flex-col items-center px-4 pb-[10svh] text-center text-white">
        <h1
          ref={titleRef}
          className="font-bold leading-tight tracking-tight text-4xl md:text-7xl pb-5"
        >
          生き生きとしたシーンを
        </h1>
        <p
          ref={textRef}
          className="max-w-prose text-base sm:text-lg md:text-xl lg:text-xl pb-20"
        >
          キャラクターに命を吹き込む大規模なセットを1つのプロジェクトで作成できます。
          ステージで描画するか、要素を完璧な瞬間まで舞台裏に留める。
        </p>

        <div className="relative w-full max-w-6xl">
          <img
            ref={imageRef}
            src="Screen01.png"
            alt="Screen"
            className="mx-auto max-h-[50svh] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
