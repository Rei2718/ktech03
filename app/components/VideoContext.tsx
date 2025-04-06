"use client";
import { createContext, useContext, useRef, useState, ReactNode } from "react";

interface VideoContextType {
    videoRef: React.RefObject<HTMLVideoElement | null>;
    isPlaying: boolean;
    togglePlay: () => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

interface VideoProviderProps {
  children: ReactNode;
}

export function VideoProvider({ children }: VideoProviderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <VideoContext.Provider value={{ videoRef, isPlaying, togglePlay }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
}
