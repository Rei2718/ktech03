"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { EmblaOptionsType, EmblaCarouselType, EmblaEventType } from "embla-carousel";
import { DotButton, useDotButton } from "./CarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";

const slideComponents = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

type PropType = {
  options?: EmblaOptionsType;
};

// スケーリング用定数とヘルパー関数
const TWEEN_FACTOR_BASE = 0.2;
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const Carousel_1: React.FC<PropType> = ({ options = {} }) => {
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

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  // スケーリング対象となる要素 (.embla__slide__scale) を設定
  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__scale') as HTMLElement;
    });
  }, []);

  // tweenFactor の設定
  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  // スクロールに合わせたスライドのスケール調整処理
  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

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
                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
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
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;
    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale);
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenScale]);

  return (
    <section className="w-full py-15">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-action-[pan-y_pinch-zoom]">
          {slideComponents.map((SlideComponent, index) => (
            // px-8 から px-4 に変更
            <div key={index} className="flex-none px-4">
              {/* 内側のラッパーに embla__slide__scale クラスを追加 */}
              <div className="h-[80svh] w-[90svw] rounded-4xl border-2 border-white/20 overflow-hidden embla__slide__scale">
                <SlideComponent />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center items-center">
        <div className="w-52 flex items-center justify-center rounded-4xl bg-[#282a2d] px-4 py-4 space-x-2">
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

export default Carousel_1;
