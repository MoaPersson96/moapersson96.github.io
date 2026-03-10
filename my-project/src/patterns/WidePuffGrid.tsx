import { WidePuff } from "../components/puff/WidePuff";

// Moa
type PuffItem = {
    title: string;
    href: string;
    inverted?: boolean;
    position: "left" | "middle" | "right";
};

type Props = { items: PuffItem[] };

export function WidePuffGrid({ items }: Props) {
    return (
      <div className="
        w-full
        grid
        grid-cols-1
        md:grid-cols-3
        gap-0
        "
        >
        {items.map((item, i) => (
            <WidePuff key={i} {...item} />
        ))}
      </div>
    );
}