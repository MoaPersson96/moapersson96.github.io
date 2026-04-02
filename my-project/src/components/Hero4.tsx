import "../App.css";

type HeroProps = {
  headerText: string;
  text: string;
  videoSource: string;
};

function Hero4({ headerText, text, videoSource }: HeroProps) {
  return (
    <div className="relative w-full">
      {/* Video */}
      <video
        className="w-full object-cover h-[75vh]"
        playsInline
        muted
        loop
        autoPlay
      >
        <source src={videoSource} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full md:w-[650px] text-white p-8 md:p-12">
          <div className="flex flex-col m-2">
            <h2 className="text-4xl md:text-6xl text-center font-bold mb-6">
              {headerText}
            </h2>
            <p className="text-center text-lg">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero4;