import { FeedPuff } from "../components/puff/FeedPuff";

const data = [
    {
        image: "/images/Yellow.png",
        title: "Lorem ipsum dolor sit amet.",
        date: "Mars 9, 2026",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "/images/Deer.png",
        title: "Lorem ipsum dolor sit amet.",
        date: "Januari 29, 2025",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "/images/Redhouse.png",
        title: "Lorem ipsum dolor sit amet.",
        date: "April 20, 2025",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "/images/Lake.png",
        title: "Lorem ipsum dolor sit amet.",
        date: "Juni 13, 2025",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "/images/Stan.png",
        title: "Lorem ipsum dolor sit amet.",
        date: "Augusti 10, 2025",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "/images/BridgeNorthernlights.png",
        title: "Lorem ipsum dolor sit amet.",
        date: "September 15, 2025",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "/images/Lakewood.png",
        title: "Lorem ipsum dolor sit amet.",
        date: "November 25, 2025",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "/images/Snowcoveredtrees.png",
        title: "Lorem ipsum dolor sit amet.",
        date: "December 1, 2025",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
];

export function FeedPuffGrid() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex flex-wrap justify-center gap-8">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
                    >
                        <FeedPuff {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
};