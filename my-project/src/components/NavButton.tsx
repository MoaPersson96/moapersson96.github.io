import { Link } from "react-router-dom";

type NavButtonProps = {
  buttonText: string;
  href: string;
};


function NavButton( {buttonText, href}: NavButtonProps) {
  return (
    <Link
      to={href}
      className="text-black text-medium text-center px-4 font-semibold transition"
      >
        {buttonText}
      </Link>
  );
}

export default NavButton;