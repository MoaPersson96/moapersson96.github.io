import { FeedPuff } from "../components/puff/FeedPuff";


type FeedPuffGridItem = {
    image: string;
    title: string;
    date: string;
    excerpt: string;
}

type FeedPuffGridProps = {
    items: FeedPuffGridItem[];
};


export function FeedPuffGrid({ items }: FeedPuffGridProps) {
    return (
        <div className="max-w-[1400px] mx-auto px-6 py-16">
            <div className="flex flex-wrap justify-center gap-7">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[calc(50%-2.5rem)] lg:w-[calc(33.333%-2.5rem)]"
                    >
                        <FeedPuff {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
};