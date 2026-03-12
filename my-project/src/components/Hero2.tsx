import "../App.css";
import arrow from "../assets/images/blackArrowLeft.png";

type HeroProps = {
  headerText: string;
  text: string;
  navButtonText: string;
  navDestination: string;
  imgLink: string;
  date: string;
  smallHeaderText: string;
};

function Hero2({
  date,
  smallHeaderText,
  headerText,
  text,
  navButtonText,
  navDestination,
  imgLink,
}: HeroProps) {
  return (
    <>
      <div className="top-0 self-start w-full z-20 mb-8">
        <div className="relative w-full">
          <img
            src={imgLink}
            className="w-full object-cover xl:h-[50vh]"
            alt=""
          />

          <div className="absolute top-1/5 -translate-y-1/2 z-20 bg-white w-48">
            <div className="text-right w-max">
              <a
                href={navDestination}
                className="inline-flex items-center gap-2 text-black p-5 font-bold justify-self-end"
              >
                <img
                  src={arrow}
                  className="h-4 w-4 justify-self-start"
                  alt="Arrow"
                />
                <p className="justify-self-end pl-2">
                {navButtonText}
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white relative -top-28 w-[90%] xl:w-[65%] mx-auto p-3 m-0 md:p-11 xl:pl-22">
          <div className="">
            <div className="flex flex-col md:m-0 xl:pr-[20%]">
              <h4 className="text-black m-0 p-0 mb-8 text-xs md:text-1 md:m-4 md:mx-8 md:font-bold">{date}</h4>
              <h3 className="text-black text-md text-center md:text-left md:text-2xl md:m-4 md:mx-8 md:mb-2 font-bold">
                {smallHeaderText}
              </h3>
              <h2 className="text-black text-xl md:text-5xl text-center md:text-left m-4 md:line-clamp-4 mx-8 mt-0 font-bold">
                {headerText}
              </h2>
              <p className="text-black md:text-xl text-center md:text-left m-4 md:mx-8 ">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
