import { ArrowRight } from "../icons/ArrowRight";

// Moa
type WidePuffProps = {
    title: string;
    href: string;
    inverted?: boolean; // false = black, true = white (the middle puff)
    position: "left" | "middle" | "right";
};

export function WidePuff({ title, href, inverted = false, position }: WidePuffProps) {
    const titleId = `${title.replace(/\s+/g, "")}-title`;

    const positionClasses = {
        left: "",
        middle: "",
        right: "",
    };

    return (
      <a
        href={href}
        aria-labelledby={titleId}
        className={`
          group
          flex items-center justify-between
          w-full
          px-10 py-6
          h-56
          border border-black
          transition
          focus:outline-none focus:ring-4 focus:ring-black/50
          ${positionClasses[position]}
          ${position !== "left" ? "-ml-px" : ""}
          ${inverted ? "bg-white text-black" : "bg-black text-white"}
          `}
    >
        <h2 
            id={titleId}
            className="
            text-2xl
            font-medium
            tracking-wide
            transition-all
            duration-200
            group-hover:scale-105
            "
        >
            {title}
        </h2>

        {/* Arrow Button */}
        <div
          className={`
            w-8 h-8
            rounded-full
            flex items-center justify-center
            transition
            group-hover:scale-110
            ${inverted ? "bg-black text-white" : "bg-white text-black"}
        `}
        aria-hidden="true"
        >
            <ArrowRight className="w-6 h-6" />
        </div>
    </a>
    );
}