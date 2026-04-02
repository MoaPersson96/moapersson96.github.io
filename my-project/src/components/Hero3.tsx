import "../App.css";

type HeroProps = {
  headerText: string;
  text: string;
  imgLink: string;
};

function Hero3({ headerText, text, imgLink }: HeroProps) {
  return (
    <div className="relative w-full">
      {/* Image */}
      <img
        src={imgLink}
        className="w-full object-cover h-[70vh] xl:h-[65vh]"
        alt=""
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="bg-blue-800/80 w-full md:w-[650px] text-white p-8 md:p-12">
          <div className="flex flex-col m-2">
            <h2 className="text-xl md:text-5xl text-center font-bold mb-6">
              {headerText}
            </h2>
            <p className="text-center">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero3;