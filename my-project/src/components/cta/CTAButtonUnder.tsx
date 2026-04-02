// Moa

type CTAProps = {
    title: string;
    buttonText: string;
    href?: string;
    buttonAction: () => void;
}

export default function CallToAction2({ title, buttonText, href, buttonAction }: CTAProps) {
    const buttonClasses = 
        "bg-[#8B341F] hover:bg-[#721904] transition px-8 py-4 rounded-lg font-semibold text-white whitespace-nowrap";

    const buttonContent = (
        <span className="inline-flex items-center gap-3">
            {buttonText}
            <span className="text-2xl font-bold">→</span>
        </span>
    );

    return (
        <section className="bg-black py-16 w-full">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8 px-6 md:px-0">
                <p className="text-gray-200 text-lg md:text-xl max-w-3xl leading-relaxed mb-2">
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