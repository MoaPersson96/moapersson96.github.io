import { ColoredPuff } from '../components/puff/ColoredPuff';

// Moa
type PuffItem = {
    label: string;
    title: string;
    href: string;
    color: string;
    arrowBackgroundColor?: string;
};

type Props = { items: PuffItem[] };

export function ColoredPuffGrid({ items }: Props) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {items.map((item, i) => (
            <ColoredPuff key={i} {...item} />
        ))}
      </div>
    );
}