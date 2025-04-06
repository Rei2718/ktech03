import VideoBackground from "./components/VideoBackground";
import HeroSection from "./components/HeroSection";
import { VideoProvider } from "./components/VideoContext";
import HandSection from "./components/HandSection";
import ArtistSection from "./components/ArtistSection";
import { EmblaOptionsType } from 'embla-carousel'
import ImgScreen from "./components/ImgScreen/ImgScreen";
import Carousel_1 from "./components/slide/Carousel_1";
import Carousel_2 from "./components/slide/Carousel_2";
import Carousel_3 from "./components/slide/Carousel_3";


export default function HomePage() {

  const OPTIONS: EmblaOptionsType = { loop: true }

  return (
    <VideoProvider>
      <VideoBackground src="hero16_9.mp4" />
      {/* 親要素にグラデーション背景を設定 */}
      <div
        className="relative text-white bg-black"
        style={{
          background:
            "linear-gradient(to bottom, transparent 75svh, #000000 85svh, #000000 100svh)",
        }}
      >
        {/* コンテンツ部分はオフセットを適用 */}
        <div className="relative -top-[35svh]">
          <HeroSection />
          <Carousel_1 options={OPTIONS} />
          <Carousel_2 options={OPTIONS} />
          <Carousel_3 options={OPTIONS} />
          <ImgScreen />
          <HandSection />
          <ArtistSection />
        </div>
      </div>
    </VideoProvider>
  );
}
