import "../App.css";

type HeroProps = {
  headerText: string;
  text: string;
  imgLink: string;
};

function Hero3({
  headerText,
  text,
  imgLink
}: HeroProps) {
  return (
    <>
      <div className="top-0 self-start w-full z-20 mb-8">
        <div className="relative w-full">
          <img
            src={imgLink}
            className="w-full object-cover h-[70vh] xl:h-[65vh]"
            alt=""
          />
        </div>
      </div>
      # rgba(0, 65, 101, 0.85)
      <div className="bg-blue-800/80 relative -top-120 w-[100%] md:w-[650px] mx-auto z-21 text-white p-12 px-0">
          <div className="flex flex-col m-2">
              <h2 className="text-xl md:text-5xl text-center md:line-clamp-4 font-bold mb-10">
                {headerText}
              </h2>
              <p className=" text-center ">{text}</p>
          </div>
        </div>
    </>
  );
}

export default Hero3;
