// Moa
import { FeedPuff } from "../components/puff/FeedPuff";
import { Link } from "react-router-dom";

type FeedPuffGridItem = {
    slug: string;
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
                {items.map((item) => (
                    <div
                        key={item.slug}
                        className="w-full sm:w-[calc(50%-2.5rem)] lg:w-[calc(33.333%-2.5rem)]"
                    >
                        <Link 
                            to={`/feed/${item.slug}`}
                            className="block cursor-pointer"
                        >
                            <FeedPuff {...item} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};