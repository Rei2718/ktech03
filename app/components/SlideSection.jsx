

"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slide1 from "./slide/Slide1";
import Slide2 from "./slide/Slide2";
import Slide3 from "./slide/Slide3";
import Slide4 from "./slide/Slide4";
import Slide5 from "./slide/Slide5";
import Slide6 from "./slide/Slide6";

gsap.registerPlugin(ScrollTrigger);

export default function SlideSection() {
  // スライドコンポーネントを配列に格納
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

  return (
    <section className="relative w-full overflow-hidden text-white font-bold">
      <div>
        <div
          data-hs-carousel='{"loadingClasses": "opacity-0"}'
          className="relative px-5 py-10 w-11/12 mx-auto"
        >
          <div className="hs-carousel relative overflow-hidden flex justify-center items-center w-full h-[80svh] rounded-4xl bg-transparent border-[1.5px] border-white/30">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              {slides.map((SlideComponent, index) => (
                <div className="hs-carousel-slide" key={index}>
                  <div className="flex justify-center h-full w-full">
                    <SlideComponent />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-auto h-full pl-2 text-gray-800 focus:outline-hidden rounded-s-lg dark:text-white"
            >
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              type="button"
              className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-auto h-full pr-2 text-gray-800 focus:outline-hidden rounded-e-lg dark:text-white"
            >
              <span className="sr-only">Next</span>
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </button>
          </div>

          <div className="hs-carousel-pagination relative flex items-center justify-center w-full overflow-x-auto pt-5">
            <div className="flex flex-row items-center gap-x-2 px-5">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className="hs-carousel-pagination-item shrink-0 rounded-full overflow-hidden cursor-pointer w-2 h-2 transition-all duration-1000 ease-in-out hs-carousel-active:w-6 hs-carousel-active:bg-[#ffffff] bg-[#48484a]"
                >
                  <div className="flex justify-center h-full p-2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Slider */}
      </div>
    </section>
  );
}
