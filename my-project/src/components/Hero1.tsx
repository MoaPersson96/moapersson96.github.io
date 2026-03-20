import "../App.css";
import youtubeLogoWhite from "../assets/images/youtubeLogoWhite.png";
import ReactPlayer from "react-player";
import { useState } from "react";
import whiteArrowDown from "../assets/images/whiteArrowDown.png";


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
    <div className="relative w-full max-w-[1920px] mx-auto px-4 h-[720px] mb-5">
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

        {playVideo && (
          <ReactPlayer
            src={videoUrl}
            playing
            controls
            width="100%"
            height="100%"
            className="absolute inset-0"
          />
        )}
      </div>

      {!playVideo && (
        <div className="w-full h-full flex justify-center lg:absolute lg:inset-0 lg:items-center lg:justify-start">
          <div className="relative bg-white h-80 top-90 w-[80vw] lg:top-0 lg:w-[36vw] lg:max-w-130">
            <div className="text-black font-bold text-4xl p-12 h-80 -mb-8">
              <h2 className="leading-snug line-clamp-4">
                <p>{text}</p>
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
      )}
    </div>
  );
}

export default Hero1;
