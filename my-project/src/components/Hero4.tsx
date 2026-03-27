import "../App.css";

type HeroProps = {
  headerText: string;
  text: string;
  videoSource: string;
};

function Hero4({
  headerText,
  text,
  videoSource
}: HeroProps) {
  return (
    <>
      <div className="top-0 self-start w-full z-20 mb-8">
        <div className="relative w-full">
          <video
            className="w-full object-cover h-[75vh]"
            playsInline
            muted
            loop
            autoPlay
          >
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
      </div>



      <div className="relative -top-120 w-full md:w-[650px] mx-auto z-21 text-white p-12 px-0">
        <div className="flex flex-col m-2">
          <h2 className="text-6xl text-center md:line-clamp-4 font-bold mb-10">
            {headerText}
          </h2>
          <p className=" text-center text-lg">{text}</p>
        </div>
      </div>
    </>
  );
}

export default Hero4;
