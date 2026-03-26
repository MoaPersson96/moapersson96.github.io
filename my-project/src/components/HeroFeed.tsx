// Moa

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
    imgLink,
}: HeroFeedProps) {
    return (
        <section className="relative w-full h-[350px] md:h-[400px] lg:h-[450px]">
            <img
                src={imgLink}
                alt={headerText}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Text */}
            <div className="relative z-10 h-full flex items-center">
                <div className="w-full max-w-[800px] mx-auto px-6 text-white">

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