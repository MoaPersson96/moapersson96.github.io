import "../App.css";
import youtubeLogoWhite from "../assets/images/youtubeLogoWhite.png";
import ReactPlayer from "react-player";
import { useState } from "react";
import whiteArrowDown from "../assets/images/whiteArrowDown.png";
import VideoModule from "./VideoModule.tsx";


type HeroProps = {
  text: string;
  navButtonText: string;
  navDestination: string;
  imgLink: string;
  videoUrl: string;
};

function Hero1({
  text,
  navButtonText,
  navDestination,
  imgLink,
  videoUrl,
}: HeroProps) {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="relative w-full h-100 lg:h-190 mb-110 lg:mb-0">
      <div className="absolute inset-0">
        {!playVideo && (
          <>
            <img
              src={imgLink}
              alt="background image"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setPlayVideo(true)}
            />

            <img
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-25 cursor-pointer"
              src={youtubeLogoWhite}
              alt="Play video"
              onClick={() => setPlayVideo(true)}
            />
          </>
        )}

      </div>
      <div className="w-full h-full flex justify-center lg:absolute lg:inset-0 lg:items-center lg:justify-start">
        <div className="relative bg-white h-80 top-90 w-[80vw] lg:top-0 lg:w-[36vw] lg:max-w-130">
          <div className="text-black font-bold text-4xl p-12 h-80 -mb-8">
            <h2 className="leading-snug line-clamp-4">
              <h2>{text}</h2>
            </h2>
          </div>

          <div className="flex">
            <a
              className="bg-black text-white w-full p-5 px-12 font-bold flex"
              href={navDestination}
            >
              {navButtonText}
              <img src={whiteArrowDown} className="h-6 ml-auto" />
            </a>
          </div>
        </div>
      </div>

      {playVideo && <>
        <VideoModule videoUrl={videoUrl} />
        <button 
        type="button"
        onClick={() => setPlayVideo(false)}
        className="fixed z-50 text-black bg-white top-[17vh] right-[17vw] w-15 h-15 text-3xl rounded-full shadow-xs hover:bg-gray-100">X</button>
      </>}

    </div>

  );
}

export default Hero1;