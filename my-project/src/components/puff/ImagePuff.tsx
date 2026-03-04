import { ArrowRight } from "../icons/ArrowRight";

// Moa
type ImagePuffProps = {
    label: string;
    title: string;
    image: string;
    href: string;
};

export function ImagePuff({ label, title, image, href }: ImagePuffProps) {
    const titleId = `${title.replace(/\s+/g, "")}-title`;
    return (
      <a
        href={href}
        aria-labelledby={titleId}
        className="
         group relative block
         w-full h-[420px]
         rounded-lg
         overflow-hidden
         focus:outline-none focus:ring-2 focus:ring-white/60
        "
      >
        {/* Background Image */}
        <div
          className="
           absolute inset-0
           bg-cover
           bg-center
           transition-transform
           duration-700
           group-hover:scale-105
          "
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />

        {/* Dark gradient */}
        <div
          className="
           absolute inset-0
           bg-linear-to-t from-black/70 via-black/25 to-transparent
           " 
           aria-hidden="true"
          />

        {/* Text */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center px-4 max-w-[260px]">
          <p className="text-small font-medium text-white mb-1">
            {label}
          </p>

          <h2 
            id={titleId}
            className="
              text-xl
              font-bold
             text-white
              leading-snug
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {title}
          </h2>
        </div>

        {/* Arrow Button */}
        <div
          className="
           absolute bottom-6
           left-1/2
           -translate-x-1/2
           w-12 h-12
           rounded-full
           bg-white
           flex items-center justify-center
           shadow-lg
           transition-transfrom
           duration-300
           group-hover:scale-110
          "
          aria-hidden="true"
        >
          <ArrowRight className="w-6 h-6 text-black" stroke="black" />
        </div>
      </a>
    );
}