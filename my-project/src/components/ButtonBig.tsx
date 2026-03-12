type ButtonBigProps = {
  buttonText: string;
};

function ButtonBig({ buttonText }: ButtonBigProps) {
  return (
    <>
      <button
        type="button"
        className="text-black text-medium text-center min-h-40 px-4 font-semibold"
      >
        <p className="p-0">
        {buttonText}

        </p>
      </button>
    </>
  );
}

export default ButtonBig;
