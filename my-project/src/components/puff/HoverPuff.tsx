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


            {/* Small Textbox */}
            <div className="
             absolute bottom-4 left-1/2 -translate-x-1/2
             w-full h-24
             bg-white px-6 pt-8 pb-8 py-3 z-20
             transition duration-300
             group-hover:opacity-0
             ">
                <h3 className="text-black font-semibold text-center">
                    {title}
                </h3>
            </div>

            {/* Large hover Textbox */}
            <div className="
             absolute inset-0 bg-white z-30
             flex flex-col items-center justify-start text-center p-6 pt-10
             opacity-0 
             group-hover:opacity-100
             transition duration-1000
             ease-in-out
             ">
                <h3 className="text-lg font-semibold text-black mb-2">
                    {title}
                </h3>

                <p className="text-sm text-black">
                    {excerpt}
                </p>
            </div>
        </div>
    );
}