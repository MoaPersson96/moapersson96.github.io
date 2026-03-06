import { ImagePuff } from '../components/puff/ImagePuff';

// Moa
type PuffItem = {
    label: string;
    title: string;
    image: string;
    href: string;
};

type Props = {
    items: PuffItem[];
};

export function ImagePuffGrid({ items }: Props) {
    return (
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        "
      >
        {items.map((item, i) => (
          <ImagePuff key={i} {...item} />
        ))}
      </div>
    );
}