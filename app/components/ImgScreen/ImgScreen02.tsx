"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ImgScreen() {
  const bgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Background parallax animation
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

    // メインタイトルのフェード＆スライドアニメーション
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

    // 文章のフェード＆スライドアニメーション
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

    // 画像のフェード＆スケールアニメーション
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
    <section className="relative overflow-hidden h-full w-full my-10">
      {/* コンテンツ：画面下部に、画像 → メインタイトル → 文章の順で配置 */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center">
        {/* 画像 */}
        <div className="overflow-hidden rounded-3xl mb-32 w-10/12 max-w-4xl">
          <img
            ref={imageRef}
            src="Screen04.png"
            alt="Cropped Example"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* メインタイトル */}
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-center pb-4 sm:pb-6 md:pb-8 lg:pb-10 max-w-6xl font-bold w-10/12"
        >
          一人の創造性、全員の力に
        </h1>
        {/* 文章 */}
        <p
          ref={textRef}
          className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2x text-center mx-auto w-10/12 max-w-6xl"
        >
          k-Techは個性が輝く場所。3DCGクリエイター、AIエンジニア、Webデザイナーなど、
          異なる専門性を持つメンバーが互いを高め合うことで、一人では生み出せない価値が生まれます。
          あなたの得意を活かし、仲間と共に成長する旅に出ましょう。
        </p>
      </div>

      {/* 背景とフェードオーバーレイ */}
      <div className="relative z-0">
        {/* 上部フェード：初期は黒から透明へ */}
        <div
          className="pointer-events-none absolute top-0 left-0 w-full z-10"
          style={{
            height: "50svh",
            background: "linear-gradient(to bottom, #000 0%, #000 10svh, transparent 100%)",
          }}
        />

        {/* 下部フェード：初期40%は黒、その後透明へ */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full z-10"
          style={{
            height: "50svh",
            background: "linear-gradient(to top, #000 0%, #000 10svh, transparent 100%)",
          }}
        />
        {/* 背景画像 */}
        <div className="image-container relative z-0">
          <img
            ref={bgRef}
            src="Screen04.png"
            alt=""
            className="w-full h-[120vh] object-cover z-0"
          />
        </div>
      </div>
    </section>
  );
}
