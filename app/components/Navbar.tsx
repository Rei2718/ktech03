/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AnimatedFullscreenMenu() {
  // メニューオープン状態とスクロール検知用の状態
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // メニューオープン時は背景のスクロールを禁止
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

  // スクロール位置に応じてナビゲーションバーの背景変更
  useEffect(() => {
    const handleScroll = () => {
      // 画面の高さ（100vh 相当）を超えた場合に背景を変更
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // 初期状態もチェック
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // メニューの開閉をトグルするハンドラ
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* スクロールに応じた背景切替のナビゲーションバー */}
      <nav
        className={`fixed top-0 left-0 w-full z-[1200] transition-all duration-500 rounded-b-xl ${
          scrolled
            ? "bg-black/50 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between p-3">
          {/* ロゴ部分：サイズを小さく */}
          <Link legacyBehavior href="/">
            <a>
              <img src="/logo.png" alt="Logo" className="h-6" />
            </a>
          </Link>
          {/* メニュートグルボタン：サイズ小さめ */}
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* 上段 */}
            <span
              style={{
                transform: isMenuOpen
                  ? "translate(-50%, -50%) rotate(45deg)"
                  : "translate(-50%, calc(-50% - 0.5rem))",
              }}
              className="block absolute left-1/2 top-1/2 h-0.5 w-6 bg-white transition-transform duration-500 ease-in-out"
            ></span>
            {/* 中段 */}
            <span
              style={{
                opacity: isMenuOpen ? 0 : 1,
                transform: "translate(-50%, -50%)",
              }}
              className="block absolute left-1/2 top-1/2 h-0.5 w-6 bg-white transition-opacity duration-500 ease-in-out"
            ></span>
            {/* 下段 */}
            <span
              style={{
                transform: isMenuOpen
                  ? "translate(-50%, -50%) rotate(-45deg)"
                  : "translate(-50%, calc(-50% + 0.5rem))",
              }}
              className="block absolute left-1/2 top-1/2 h-0.5 w-6 bg-white transition-transform duration-500 ease-in-out"
            ></span>
          </button>
        </div>
      </nav>

      {/* フルスクリーン メニュー オーバーレイ */}
      <div
        className={`fixed inset-0 bg-black flex flex-col items-center justify-center transition-opacity duration-1000 z-[1100] ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav>
          <ul className="space-y-6 text-2xl text-white text-center">
            <li>
              <Link legacyBehavior href="#home">
                <a onClick={toggleMenu} className="hover:text-gray-400 transition-colors">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#concept">
                <a onClick={toggleMenu} className="hover:text-gray-400 transition-colors">
                  Concept
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#products">
                <a onClick={toggleMenu} className="hover:text-gray-400 transition-colors">
                  Products
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#contact">
                <a onClick={toggleMenu} className="hover:text-gray-400 transition-colors">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* ソーシャルリンク */}
        <div className="mt-10 flex gap-5">
          <Link legacyBehavior href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/Instagram.png" alt="Instagram" className="h-7 w-7" />
          </Link>
          <Link legacyBehavior href="https://keisho.tech" target="_blank" rel="noopener noreferrer">
            <img src="/KeishoTech.png" alt="Keisho Tech" className="h-7 w-7" />
          </Link>
          <Link legacyBehavior href="https://www2.spc.ritsumei.ac.jp/" target="_blank" rel="noopener noreferrer">
            <img src="/School.png" alt="School" className="h-7 w-7" />
          </Link>
        </div>
      </div>
    </>
  );
}
