import { ColoredPuff } from '../components/puff/ColoredPuff';

// Moa
type PuffItem = {
    label: string;
    title: string;
    href: string;
    arrowBackgroundColor?: string;
};

type Props = { items: PuffItem[] };

export function ColoredPuffGrid({ items }: Props) {
    return (
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-5
        "
      >
        {items.map((item, i) => (
            <ColoredPuff key={i} {...item} />
        ))}
      </div>
    );
}