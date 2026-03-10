import { ArrowRight } from '../icons/ArrowRight';

// Moa
type ColoredPuffProps = {
    label: string;
    title: string;
    href: string;
    arrowBackgroundColor?: string;
};

export function ColoredPuff({ label, title, href, arrowBackgroundColor = "#F3F4F6" }: ColoredPuffProps) {
    const titleId = `${title.replace(/\s+/g, "")}-title`;

    return (
        <a
          href={href}
          aria-labelledby={titleId}
          className="
            group relative
            flex flex-col items-center justify-center
            text-center
            bg-[#f8f8f8] text-black
            p-10
            min-h-60
            md:min-h-90
            hover:shadow-lg
            transition-all
            focus:outline-none focus:ring-2 focus:ring-black/60
            "
        >
            <p className="text-small font-bold uppercase tracking-[0.12em] text-black mb-3">
                {label}
            </p>

            <h2 
                id={titleId}
                className="
                text-3xl
                font-bold
                leading-tight
                max-w-[220px]
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
              mt-10
              w-16 h-16
              rounded-full
              flex items-center justify-center
              transition-transform
              group-hover:scale-110
              "
              style={{ backgroundColor: arrowBackgroundColor }}
              aria-hidden="true"
            >
              <ArrowRight 
              className="w-7 h-7 text-black"
              />
            </div>
        </a>
    );
}