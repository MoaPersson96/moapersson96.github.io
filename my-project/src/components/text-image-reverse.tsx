type TextImageProps = {
  image: string;
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
};

function TextImage({
  image,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: TextImageProps) {
  return (
    <div className=" w-[98vw] bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        
        

        {/* Content */}
        <div className="flex flex-col justify-center p-34 p-12 text-left">
          
          {eyebrow && (
            <p className="text-2xl font-bold text-black mb-5">
              {eyebrow}
            </p>
          )}

          <h2 className="text-black text-4xl md:text-4xl font-extrabold mb-4">
            {title}
          </h2>

          <p className=" text-xl text-black mb-6">
            {description}
          </p>

          <div className="flex flex-col gap-4">
            
            {/* Primary button */}
            <a
              href={primaryCta.href}
              className="bg-[#985A1C] text-white font-semibold flex items-center justify-center hover:bg-[#7a4716] transition w-80 p-5"
            >
              {primaryCta.text}
              <span className="pl-6 text-4xl">→</span>
            </a>

            {/* Secondary button */}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="bg-[#985A1C] text-white font-semibold flex items-center justify-center hover:bg-[#7a4716] transition w-80 p-5"
              >
                {secondaryCta.text}
              <span className="pl-6 text-4xl">→</span>
              </a>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-[300px] md:h-auto">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default TextImage;