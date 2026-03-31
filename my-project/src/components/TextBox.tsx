import infoImg from "../assets/images/info.png";

type TextBoxProps = {
  title: string;
  text: string;
  background?: boolean;
};

function TextBox({ text, title, background }: TextBoxProps) {
  return (
    <div>
      <div
        className={`flex text-black text-left p-12 m-8 w-[45vw] ${
          background ? "bg-gray-100" : ""
        }`}
      >
        {background && (
          <img
            className="w-11 h-11 mr-12"
            src={infoImg}
            alt="info icon"
          />
        )}

        <div>
          <h3
            className={`m-0 p-0 mb-8 font-extrabold ${
              background ? "text-4xl" : "text-5xl"
            }`}
          >
            {title}
          </h3>

          <p
            className={`m-0 p-0 ${
              background ? "text-base" : "text-xl"
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextBox;