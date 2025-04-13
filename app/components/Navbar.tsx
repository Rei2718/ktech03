/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";

// リンクの型定義
interface LinkItem {
  href: string;
  label?: string;
  src?: string;
  alt?: string;
}

// メニューおよびソーシャルリンクの静的データをコンポーネント外で定義
const menuLinks: LinkItem[] = [
  { href: "#", label: "Top" },
  { href: "#about", label: "About" },
  { href: "#achieve", label: "Achieve" },
  { href: "#our_activity", label: "Our activity" },
  { href: "#our_vision", label: "Our vision" },
  { href: "#spring_Project", label: "Spring Project" },
  { href: "#join", label: "Join K-Tech" },
];

const socialLinks: LinkItem[] = [
  { href: "https://ritsumeisai-special-site.vercel.app", src: "/KeishoTech.png", alt: "Keisho Tech" },
  { href: "https://www2.spc.ritsumei.ac.jp/", src: "/School.png", alt: "School" },
];

// ハンバーガーアイコンコンポーネント
const HamburgerIcon = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="relative w-6 h-6 focus:outline-none"
    aria-label="Toggle menu"
  >
    <span
      style={{
        transform: isOpen
          ? "translate(-50%, -50%) rotate(45deg)"
          : "translate(-50%, calc(-50% - 0.25rem))",
      }}
      className="block absolute left-1/2 top-1/2 h-[2px] w-5 bg-white transition-transform duration-500 ease-in-out"
    />
    <span
      style={{
        opacity: isOpen ? 0 : 1,
        transform: "translate(-50%, -50%)",
      }}
      className="block absolute left-1/2 top-1/2 h-[2px] w-5 bg-white transition-opacity duration-500 ease-in-out"
    />
    <span
      style={{
        transform: isOpen
          ? "translate(-50%, -50%) rotate(-45deg)"
          : "translate(-50%, calc(-50% + 0.25rem))",
      }}
      className="block absolute left-1/2 top-1/2 h-[2px] w-5 bg-white transition-transform duration-500 ease-in-out"
    />
  </button>
);

// メインコンポーネント：AnimatedFullscreenMenu
export default function AnimatedFullscreenMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // メニューが開いている時は body のスクロールを抑制
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

  // スクロール位置に応じて背景スタイルの切り替え用
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    // 初期状態を設定
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // メニューオープン時に各リンクにアニメーションを適用
  useEffect(() => {
    if (isMenuOpen) {
      const linkElements = document.querySelectorAll<HTMLAnchorElement>(".menu-link");
      linkElements.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -20, filter: "blur(2px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            delay: index * 0.05,
            duration: 0.4,
            ease: "power2.out",
            onStart: () => {
              gsap.to(el, {
                keyframes: [
                  { skewX: 5, x: 5, duration: 0.05 },
                  { skewX: -5, x: -5, duration: 0.05 },
                  { skewX: 0, x: 0, duration: 0.05 },
                ],
              });
            },
          }
        );
      });
    }
  }, [isMenuOpen]);

  // メニューの開閉トグル
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* ナビゲーションバー */}
      <nav
        className={`fixed top-0 left-0 w-full z-[1200] transition-all duration-500 rounded-b-xl ${
          scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between p-3">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-6" />
          </Link>
          <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </nav>

      {/* フルスクリーンのメニュー */}
      <div
        className={`fixed inset-0 bg-black flex flex-col items-center justify-center transition-opacity duration-1000 z-[1100] ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav>
          <ul className="space-y-6 text-2xl text-white text-center">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className="hover:text-gray-400 transition-colors uppercase menu-link"
                >
                  {link.label?.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ソーシャルリンク */}
        <div className="mt-10 flex gap-5">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.src} alt={link.alt} className="h-7 w-7" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
