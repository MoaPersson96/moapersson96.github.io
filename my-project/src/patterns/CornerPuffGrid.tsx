// Moa

import CornerPuff from "../components/puff/CornerPuff";

export type CornerItem = {
    title: string;
    subtitle?: string;
    image: string;
};

type Props = {
    items: CornerItem[];
};

export default function CornerPuffGrid({ items }: Props ) {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {items.map((item, i) => (
                <CornerPuff key={i} {... item} />
            ))}
        </div>
    );
}