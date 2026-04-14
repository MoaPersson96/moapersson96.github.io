// Moa

type CTAProps = {
    title: string;
    buttonText: string;
    href?: string;
    buttonAction: () => void;
}

export default function CallToAction1({ title, buttonText, href, buttonAction }: CTAProps) {

    const buttonContent = (
        <span className="inline-flex items-center gap-5">
            {buttonText}
            <span className="text-2xl font-bold leading-none relative -top-0.5">→</span>
        </span>
    );

    const buttonClasses = "bg-[#8B341F] hover:bg-[#721904] transition px-8 py-4 rounded-md font-semibold text-white whitespace-nowrap inline-block cursor-pointer"


    return (
        <section className="bg-black py-16 w-full">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-0">
                <p className="text-gray-200 text-lg md:text-xl max-w-3xl leading-relaxed">
                    {title}
                </p>

                {href ? (
                    <a
                        href={href} className={buttonClasses}
                    >
                        {buttonContent}
                    </a>
                ) : (
                    <button
                        onClick={buttonAction} className={buttonClasses}
                    >
                        {buttonContent}
                    </button>
                )}
            </div>
        </section>
    );
}