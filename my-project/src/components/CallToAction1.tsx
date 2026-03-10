type CTAProps = {
    title: string;
    buttonText: string;
    buttonAction: () => void;
}

export function CallToAction1({ title, buttonText, buttonAction }: CTAProps) {
    return (
        <section className="bg-black py-16 mb-10 w-full">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-0">
                <p className="text-gray-200 text-lg md:text-xl max-w-3xl leading-relaxed">
                    {title}
                </p>

                <button
                    onClick={buttonAction}
                    className="bg-[#8B341F] hover:bg-[#721904] transition px-8 py-4 rounded-lg font-semibold text-white whitespace-nowrap"
                >
                    {buttonText}
                </button>
            </div>
        </section>
    );
};

export default CallToAction1;