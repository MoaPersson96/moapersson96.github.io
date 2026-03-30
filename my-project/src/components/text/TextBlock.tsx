// Moa

type TextBlockProps = {
    title: string;
    href: string;
};

export default function TextBlock({ title, href }: TextBlockProps) {
    return (
        <a
            href={href}
            className="group flex items-center justify-between bg-amber-800 text-white px-4 py-4 transition hover:bg-amber-900"
        >
            <span className="font-medium">{title}</span>

            <span className="text-3xl transition-transform group-hover:translate-x-1">
                →
            </span>
        </a>
    );
}