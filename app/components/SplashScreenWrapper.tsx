"use client";
import { useEffect, useState } from "react";

const SplashScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black text-white animate-pulse h-svh w-svw">
    <p>loading</p>
  </div>
);

export default function SplashScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(() => {
    // クライアントサイドの場合にのみ document にアクセスする
    if (typeof document !== "undefined") {
      return document.readyState === "complete";
    }
    return false;
  });

  useEffect(() => {
    if (isLoaded) return;

    const handleLoad = () => setIsLoaded(true);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <SplashScreen />}
      <div style={{ visibility: isLoaded ? "visible" : "hidden" }}>
        {children}
      </div>
    </>
  );
}
