// Moa

type TextBlockProps = {
    title: string;
    href: string;
};

export default function TextBlock({ title, href }: TextBlockProps) {
    return (
        <a
            href={href}
            className="group flex items-center justify-between bg-[#985A1C] text-white px-6 md:px-8 py-6 transition hover:bg-[#B87F45] hover:text-black"
        >
            <span className="font-medium">{title}</span>

            <span className="text-3xl transition-transform group-hover:translate-x-1">
                →
            </span>
        </a>
    );
}