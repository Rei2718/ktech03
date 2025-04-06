"use client";
import { useEffect, useState } from "react";

export default function SplashScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    // すでに読み込み完了している場合は即座にハンドルを実行
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {!isLoaded && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white">
          {/* ここにスプラッシュスクリーンのデザインやロゴなどを記述 */}
          <p>Loading...</p>
        </div>
      )}
      <div style={{ visibility: isLoaded ? "visible" : "hidden" }}>
        {children}
      </div>
    </>
  );
}
