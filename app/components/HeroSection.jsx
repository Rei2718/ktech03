"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideo } from "./VideoContext";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const { isPlaying, togglePlay } = useVideo();
  const textGroupRef = useRef(null);
  const learnMoreRef = useRef(null);
  const playButtonRef = useRef(null);

  const handleTogglePlay = () => {
    const playIcon = playButtonRef.current?.querySelector("svg");
    if (playIcon) {
      gsap.fromTo(
        playIcon,
        { rotate: 0 },
        { rotate: 360, duration: 0.5, ease: "power2.out" }
      );
    }
    togglePlay();
  };

  useEffect(() => {
    gsap.from(textGroupRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });

    gsap.from(learnMoreRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      delay: 1,
    });
  }, []);

  return (
    <section className="relative w-full h-lvh overflow-visible text-white">
      {/* テキスト群：セクション下部中央 */}
      <div className="absolute left-0 right-0 bottom-4  w-11/12 mx-auto flex flex-col items-center space-y-6 md:space-y-8">
        <div ref={textGroupRef} className="text-center">
          <p className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">
            最高にプロフェッショナルで <br/>
            クリエイティブなチーム
          </p>
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-3">
            KEISHO <br/>
            TECHNOLOGIES
          </h1>
          <p className="text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl w-full mx-auto pt-10">
            3DCG、AI、Web開発、メディアアートなど、
            最先端のテクノロジーとアートが交わる場所。
            意欲的なメンバーが集う、
            強力で直感的なコミュニティ。
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-4 z-[100] translate-y-[4.5lvh]">
        <button
          ref={playButtonRef}
          onClick={handleTogglePlay}
          className="p-2 rounded-full transition transform hover:scale-105"
          style={{ backgroundColor: "#1C1C1E", color: "#FFFFFF" }}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <rect x="9" y="8" width="2" height="8" fill="currentColor" />
              <rect x="13" y="8" width="2" height="8" fill="currentColor" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <polygon points="9,8 16,12 9,16" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
