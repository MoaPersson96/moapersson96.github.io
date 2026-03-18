
type FeedPuffProps = {
    image: string;
    title: string;
    date: string;
    excerpt: string;
};

export function FeedPuff({ image, title, date, excerpt }: FeedPuffProps) {

    return (
        <div className="bg-white overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />

            <div className="p-5 text-left">
                <h3 className="text-black font-semibold text-lg mb-2 cursor-pointer hover:underline">
                    {title}
                </h3>

                <p className="text-sm text-black mb-3">{date}</p>

                <p className="text-black text-sm leading-relaxed">
                    {excerpt}
                </p>
            </div>
        </div>
    );
};