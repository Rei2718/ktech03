"use client";
import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
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

const Carousel_1: React.FC<PropType> = ({ options = {} }) => {
  // オプションをマージ（中央揃え）
  const emblaOptions: EmblaOptionsType = { align: "center", ...options };
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [Autoplay()]);

  // ナビゲーションボタン押下時にautoplayのリセット or 停止を実行
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

  return (
    <section className="w-full py-15">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-action-[pan-y_pinch-zoom]">
          {slideComponents.map((SlideComponent, index) => (
            <div key={index} className="flex-none px-4">
              <div className="h-[80lvh] w-[90lvw] xl:max-w-[70lvw] xl:max-h-[70lvh] rounded-4xl border-2 border-white/20 overflow-hidden">
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
