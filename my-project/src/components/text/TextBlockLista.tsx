// Moa

import TextBlock from "./TextBlock";

type BlockListItem = {
    title: string;
    href: string;
};

type BlockListProps = {
    items: BlockListItem[];
};

export default function TextBlocklist({ items }: BlockListProps) {
    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <TextBlock key={index} {...item} />
            ))}
        </div>
    );
}