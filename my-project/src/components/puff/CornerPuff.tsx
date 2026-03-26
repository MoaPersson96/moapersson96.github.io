// Moa

type CornerPuffProps = {
    title: string;
    subtitle?: string;
    image: string;
};

export default function CornerPuff({ title, subtitle, image }: CornerPuffProps) {
    return (
        <div className="relative group overflow-hidden h-[280px] w-full cursor-pointer">
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transfrom duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 text-white">
                {subtitle && (
                    <p className="text-sm uppercase tracking-wide opacity-80 mb-2">
                        {subtitle}
                    </p>
                )}
                <h2 className="text-2xl md:text-3xl font-semibold leading-tight inline-block relative">
                    <span className="border-b-2 border-transparent group-hover:border-white">
                        {title}
                    </span>
                </h2>
            </div>

            {/* Arrow */}
            <div className="absolute bottom-0 right-0 bg-black p-4">
                <span className="text-white text-3xl md:text-4xl">→</span>
            </div>
        </div>
    );
}