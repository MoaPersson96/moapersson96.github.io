import arrow from "../assets/images/blackArrowLeft.png";

type HeroFeedProps = {
    smallHeaderText: string;
    headerText: string;
    text?: string;
    navButtonText?: string;
    navDestination?: string;
    imgLink: string;
};

export default function HeroFeed({
    smallHeaderText,
    headerText,
    text,
    navButtonText,
    navDestination,
    imgLink,
}: HeroFeedProps) {
    return (
        <section className="relative w-full h-[350px] md:h-[400px] lg:h-[450px]">
            <img
                src={imgLink}
                alt={headerText}
                className="absolute inset-0 w-full h-full object-cover"
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

            {/* Text */}
            <div className="relative z-10 h-full flex items-center">
                <div className="ml-[5%] md:ml-[10%] lg:ml-[15%] pr-6 text-white max-w-2xl">

                    {smallHeaderText && (
                        <p className="uppercase text-sm tracking-wider mb-3 opacity-80">
                            {smallHeaderText}
                        </p>
                    )}

                    <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
                        {headerText}
                    </h1>

                    {text && (
                        <p className="text-base md:text-lg opacity-90">
                            {text}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}