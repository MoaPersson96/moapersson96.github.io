// Moa

type CTAProps = {
    title: string;
    description?: string;
    buttonText: string;
    onClick?: () => void;
    href?: string;
    className?: string;
};

export default function CTATextCenter({ title, description, buttonText, onClick, href, className }: CTAProps) {
    const ButtonContent = () => (
        <span className="inline-flex items-center gap-3">
            {buttonText}
            <span className="text-3xl font-bold">→</span>
        </span>
    );

    return (
        <div className={`bg-gray-100 py-16 px-4 ${className}`}>
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
                    {title}
                </h2>

                {description && (
                    <p className="text-black text-base md:text-lg leading-relaxed mb-8">
                        {description}
                    </p>
                )}

                {href ? (
                    <a
                        href={href}
                        className="inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 text-black font-medium px-8 py-4 transition-colors duration-200"
                    >
                        <ButtonContent />
                    </a>
                ) : (
                    <button
                        onClick={onClick}
                        className="inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 text-black font-medium px-8 py-4 transition-colors duration-200"
                    >
                        <ButtonContent />
                    </button>
                )}
            </div>
        </div>
            
    );
};