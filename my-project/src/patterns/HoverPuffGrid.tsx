// Moa

import HoverPuff from "../components/puff/HoverPuff";

export type HoverItem = {
    title: string;
    excerpt: string;
    image: string;
};

type Props = {
    items: HoverItem[];
};

export default function HoverPuffGrid({ items }: Props) {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {items.map((item, i) => (
                <HoverPuff key={i} {...item} />
            ))}
        </div>
    );
}