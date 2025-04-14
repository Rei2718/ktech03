import React, { useMemo } from "react";

const NoiseFilter = () => {
  // コンポーネント初回マウント時のみランダムな seed を生成する
  const randomSeed = useMemo(() => Math.floor(Math.random() * 1000), []);

  return (
    <>
      {/* SVGフィルターの定義（幅・高さ0、非表示状態だがDOM内に残す） */}
      <svg width="0" height="0" style={{ position: "absolute", visibility: "hidden" }}>
        <filter id="noiseFilter">
          {/* ノイズパターンを生成：コメントに合わせて baseFrequency を2.75 に変更 */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2.525"
            numOctaves="1"
            seed={randomSeed}
            result="turbulence"
          />
          {/* turbulence の赤チャネルをαとして抽出（5列×4行、計20数値が必要） */}
          <feColorMatrix
            in="turbulence"
            type="matrix"
            values="
              0 0 0 0 0 
              0 0 0 0 0 
              0 0 0 0 0 
              1 0 0 0 0"
            result="noiseAlpha"
          />
          {/* α値を線形変換し、透過度が0.2～0.5となるように調整 */}
          <feComponentTransfer in="noiseAlpha" result="mask">
            <feFuncA type="linear" slope="0.20" intercept="0.10" />
          </feComponentTransfer>
          <feFlood floodColor="#ffffff" result="flood" />
          {/* マスクと合成 */}
          <feComposite in="flood" in2="mask" operator="in" result="noise" />
        </filter>
      </svg>

      {/* 全画面オーバーレイ：SVG内で <rect> にフィルターを適用することでノイズを描画 */}
      <div className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none">
        <svg className="w-full h-full">
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </>
  );
};

export default NoiseFilter;
