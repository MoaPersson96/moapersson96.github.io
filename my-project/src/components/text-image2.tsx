type TextImageProps = {
  image: string;
  title: string;
  text: string;
  lowerText: string;
  link: string;
  linkText: string;
};

function TextImage2({
  image,
  title,
  text,
  lowerText,
  link,
  linkText
}: TextImageProps) {
  return (
    <div className="w-[98vw]">
      <div className="w-full flex flex-col md:flex-row h-[35vw]">

        <div className="flex flex-col p-30 px-20 text-left w-full md:w-1/3 bg-gray-100">
          <h2 className="text-black text-4xl font-extrabold mb-4">
            {title}
          </h2>

          <p className="text-base text-black mb-6">
            {text}
          </p>

          {lowerText && (
            <p className="text-lg font-bold text-black mb-5">
              {lowerText}
            </p>
          )}

          <a href={link} className="text-xl text-blue-900 font-semibold underline mb-6">
            {linkText} →
          </a>
        </div>

        <div className="pl-3 h-[300px] md:h-auto w-full md:w-2/3">
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

export default TextImage2;