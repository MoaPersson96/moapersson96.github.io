// Moa

type ImageCTAProps = {
    title: string;
    description: string;
    buttonText: string;
    image: string;
    href?: string;
    onClick?: () => void;
};

export default function ImageCTA({ title, description, buttonText, image, href, onClick }: ImageCTAProps) {
    const Content = () => (
        <div className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 bg-[#a79b5b] p-8 md:p-10 max-w-xl shadow-lg">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-black tracking-tight text-left whitespace-nowrap">
                {title}
            </h1>

            <p className="text-sm md:text-base mb-6 text-black text-left">
                {description}
            </p>

            <p className="font-semibold text-black hover:underline transition">
                {buttonText}
            </p>
        </div>
    );

    return (
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[600px] overflow-hidden">
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            {href ? (
                <a href={href} className="block w-full h-full relative text-center">
                    <Content />
                </a>
            ) : (
                <button onClick={onClick} className="block w-full h-full relative">
                    <Content />
                </button>
            )}
        </div>
    );
}