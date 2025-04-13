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
    // ✅ Background parallax animation
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

    // ✅ Title fade & slide animation
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

    // ✅ Text fade & slide animation
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

    // ✅ Main image (rounded cropped image) fade & scale animation
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
    <section className="relative overflow-hidden mt-15">
      {/* Text content positioned on top */}
      <div className="absolute top-0 left-0 w-full z-20 flex flex-col items-center">
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-center pb-4 sm:pb-6 md:pb-8 lg:pb-10 max-w-4xl font-bold"
        >
          技術と想像力が出会う
        </h1>
        <p
          ref={textRef}
          className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-center w-10/12 max-w-3xl text-[#A2A2A2] mt-4"
        >
          3DCGからAI、Webまで。k-Techでは技術を使いこなすスキルと、自由な発想力が融合します。
          国内外のコンテストで認められた私たちの作品は、デジタルの可能性を最大限に引き出す証。
          あなたのアイデアが、ここから世界へ広がります。
        </p>
        {/* New image element with rounded-4xl cropping */}
        <div className="overflow-hidden rounded-3xl mt-32 w-10/12 max-w-4xl">
          <img
            ref={imageRef}
            src="Screen01.png"
            alt="Cropped Example"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Background and other elements */}
      <div className="relative z-0">
        {/* Top gradient overlay */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-[40svh] bg-gradient-to-b from-black via-black/70 to-transparent z-10" />
        {/* Bottom gradient overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[40svh] bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

        {/* Background image */}
        <div className="image-container relative z-0">
          <img
            ref={bgRef}
            src="BG-1.jpg"
            alt=""
            className="w-full h-[110svh] object-cover z-0"
          />
        </div>
      </div>
    </section>
  );
}
