import React from "react";

const NoiseFilter = () => {
  // 毎回異なるノイズパターンとなるようランダムな seed を生成
  const randomSeed = Math.floor(Math.random() * 1000);

  return (
    <>
      {/* 非表示SVG内にフィルター定義 */}
      <svg style={{ display: "none" }}>
        <filter id="noiseFilter">
          {/* ノイズパターンを生成（baseFrequency を2.75に変更） */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="2.11" 
            numOctaves="1"
            seed={randomSeed}
            result="turbulence" 
          />
          {/* Turbulence の赤チャネルをαとして抽出 */}
          <feColorMatrix 
            in="turbulence" 
            type="matrix"
            values="
              0 0 0 0 
              0 0 0 0 
              0 0 0 0 
              1 0 0 0" 
            result="noiseAlpha" 
          />
          {/* α値を線形変換し、透過度が0.2～0.5となるよう調整 */}
          <feComponentTransfer in="noiseAlpha" result="mask">
            <feFuncA type="linear" slope="0.2" intercept="0.2" />
          </feComponentTransfer>
          {/* 灰色を設定 */}
          <feFlood floodColor="#A2A2A2" result="flood" />
          {/* マスクに沿って灰色を適用 */}
          <feComposite 
            in="flood" 
            in2="mask" 
            operator="in" 
            result="noise" 
          />
        </filter>
      </svg>

      {/* 全画面オーバーレイでフィルターを適用 */}
      <div
        className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
        style={{ mixBlendMode: "normal" }}
      >
        <div
          className="w-full h-full"
          style={{ filter: "url(#noiseFilter)" }}
        ></div>
      </div>
    </>
  );
};

export default NoiseFilter;
