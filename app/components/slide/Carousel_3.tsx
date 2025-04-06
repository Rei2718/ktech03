"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { EmblaOptionsType, EmblaCarouselType, EmblaEventType } from "embla-carousel";
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

const TWEEN_FACTOR_BASE = 0.2;
const numberWithinRange = (n: number, min: number, max: number): number =>
  Math.min(Math.max(n, min), max);

const Carousel_3: React.FC<PropType> = ({ options = {} }) => {
  const emblaOptions: EmblaOptionsType = { align: "center", ...options };
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [Autoplay()]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    const resetOrStop =
      autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;
    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".carousel3__slide") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) {
          tweenNode.style.transform = `scale(${scale})`;
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);

    // スライドアニメーション
    document.querySelectorAll(".carousel3__slide").forEach((el, i) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, scale: 0.9, y: 40 },
        {
          autoAlpha: 1,
          scale: 1,
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

    // タイトルアニメーション
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

    // ナビゲーションアニメーション
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
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenScale]);

  return (
    <section className="w-full pb-15">
      {/* タイトルにクラス名追加 */}
      <h1 className="carousel3__title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-9 flex justify-center items-center">
        ギャラリー
      </h1>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-action-[pan-y_pinch-zoom]">
          {slideComponents.map((SlideComponent, index) => (
            <div key={index} className="flex-none px-8">
              <div className="carousel3__slide w-[80vw] max-w-lg aspect-square rounded-4xl border-2 border-white/20 overflow-hidden">
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
