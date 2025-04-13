"use client";
import React, { useCallback, useEffect } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./CarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Mac1 from "./Mac1";
import Mac2 from "./Mac2";
import Mac3 from "./Mac3";

const slideComponents = [Mac1, Mac2, Mac3, Mac1, Mac2, Mac3];

type PropType = {
  options?: EmblaOptionsType;
};

const Carousel_3: React.FC<PropType> = ({ options = {} }) => {
  const emblaOptions: EmblaOptionsType = { align: "center", ...options };
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [Autoplay()]);

  // スライド切替時に Autoplay のリセットまたは停止を行うコールバック
  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    const resetOrStop =
      autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;
    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  useEffect(() => {
    if (!emblaApi) return;

    // tweenScale によるスケーリングアニメーションは削除

    // スライドの初回表示時のアニメーション（スケール指定を削除）
    document.querySelectorAll(".carousel3__slide").forEach((el, i) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
          delay: i * 0.05, // 軽い連番効果
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // タイトルのアニメーション
    const title = document.querySelector(".carousel3__title");
    if (title) {
      gsap.fromTo(
        title,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // ナビゲーションのアニメーション
    const nav = document.querySelector(".carousel3__nav");
    if (nav) {
      gsap.fromTo(
        nav,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: nav,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [emblaApi]);

  return (
    <section className="w-full" id="gallery">
      <h1 className="carousel3__title text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-8 sm:pb-12 md:pb-16 lg:pb-20 font-bold flex justify-center items-center">
        Gallery
      </h1>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-action-[pan-y_pinch-zoom]">
          {slideComponents.map((SlideComponent, index) => (
            <div key={index} className="flex-none px-8">
              <div className="carousel3__slide w-[80svw] max-w-lg aspect-square rounded-4xl border-2 border-white/20 overflow-hidden">
                <SlideComponent />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center items-center">
        <div className="carousel3__nav w-52 flex items-center justify-center rounded-4xl bg-[#282a2d] px-4 py-4 space-x-2">
          {scrollSnaps.map((_, index) => (
            <div key={index} className="flex-shrink-0 w-3 md:w-4 flex items-center justify-center">
              <DotButton
                onClick={() => onDotButtonClick(index)}
                className={`h-1.5 md:h-2 rounded-full cursor-pointer transition-all duration-1500 ease-in-out ${
                  index === selectedIndex
                    ? "w-full bg-white"
                    : "w-1/2 bg-white/20 transition-colors duration-200"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel_3;
