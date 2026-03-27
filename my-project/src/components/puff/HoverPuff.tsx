// Moa

type CardProps = {
    title: string;
    excerpt: string;
    image: string;
};


export default function HoverPuff({ title, excerpt, image }: CardProps) {
    return (
        <div className="group relative h-80 w-full overflow-hidden">
            {/* Bild */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover z-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300 z-10" />


            {/* Textbox */}
            <div className="
                absolute left-0 w-full
                bg-white p-4 z-20
                transition-all duration-500 ease-in-out
                top-3/4 -translate-y-1/2
                group-hover:top-0 group-hover:h-full group-hover:translate-y-0
            ">
                <h3 className="text-lg text-black font-semibold text-center">
                    {title}
                </h3>

                <p className="
                    text-sm text-black mt-2
                    opacity-100 md:opacity-0
                    translate-y-0 md:translate-y-2
                    md:group-hover:opacity-100 md:group-hover:translate-y-0
                    transition duration-300 delay-200
                ">
                    {excerpt}
                </p>
            </div>
        </div>
    );
}