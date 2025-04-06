"use client";
import { useVideo } from "./VideoContext";

interface VideoBackgroundProps {
  src: string;
}

export default function VideoBackground({ src }: VideoBackgroundProps) {
  const { videoRef } = useVideo();

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      className="hero-video fixed top-0 left-0 w-full h-full object-cover filter brightness-85 z-0"
    />
  );
}
