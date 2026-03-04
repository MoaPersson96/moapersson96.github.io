import { ArrowRight } from '../icons/ArrowRight';

// Moa
type ColoredPuffProps = {
    label: string;
    title: string;
    href: string;
    color: string;
    arrowBackgroundColor?: string;
};

export function ColoredPuff({ label, title, href, color, arrowBackgroundColor = "#F3F4F6" }: ColoredPuffProps) {
    const titleId = `${title.replace(/\s+/g, "")}-title`;

    return (
        <a
          href={href}
          aria-labelledby={titleId}
          className="
            group block bg-neutral-100 text-black p-10 pb-16
            border-b-8 relative
            hover:shadow-lg
            transition-all
            focus:outline-none focus:ring-2 focus:ring-black/60
            rounded-md
            "
            style={{ borderColor: color }}
        >
            <p className="text-small font-semibold uppercase tracking-wider text-black mb-2">
                {label}
            </p>

            <h2 
                id={titleId}
                className="
                text-2xl
                font-bold
                leading-tight
                mb-8
                max-w-[250px]
                transition-all
                duration-200
                group-hover:scale-105
                "
            >
                {title}
            </h2>

            {/* Arrow button */}
            <div
              className="
              absolute
              bottom-6 left-1/2
              -translate-x-1/2
              w-10 h-10
              rounded-full
              flex items-center justify-center
              transition-transform
              group-hover:scale-110
              "
              style={{ backgroundColor: arrowBackgroundColor }}
              aria-hidden="true"
            >
              <ArrowRight 
              className="w-5 h-5 text-white"
              />
            </div>
        </a>
    );
}