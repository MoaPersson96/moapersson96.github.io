// Moa
import { ArrowRight } from '../icons/ArrowRight';

type ImageTextPuffProps = {
    label: string;
    title: string;
    description: string;
    image: string;
    href?: string;
    arrowBackgroundColor?: string;
};

export default function ImageTextPuff({ label, title, description, image, href = "#", arrowBackgroundColor = "#985A1C" }: ImageTextPuffProps) {
    return (
        <a
            href={href}
            className="group relative block w-full overflow-hidden"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

            {/* Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-white text-center px-6">
                <p className="uppercase tracking-widest text-sm opacity-80 mb-2">
                    {label}
                </p>

                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {title}
                </h2>

                <p className="max-w-2xl text-sm md:text-base opacity-90 mb-8">
                    {description}
                </p>

                {/* Arrow Button */}
                <div
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: arrowBackgroundColor }}
                >
                    <ArrowRight className="w-7 h-7 text-white" />
                </div>
            </div>
        </a>
    );
}