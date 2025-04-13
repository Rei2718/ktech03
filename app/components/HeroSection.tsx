"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVideo } from "./VideoContext";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const { isPlaying, togglePlay } = useVideo();

  // Removed the unused refs since they're not used in the component
  // const textGroupRef = useRef(null);
  // const learnMoreRef = useRef(null);

  // Correctly type the ref for the button
  const playButtonRef = useRef<HTMLButtonElement>(null);

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

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll<HTMLElement>('.animate-on-scroll');

    elements.forEach((el: HTMLElement) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top %',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full h-svh overflow-visible text-white">
      <div className="absolute bottom-0 right-4 z-[100] translate-y-[4.5svh]">
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
