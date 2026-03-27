import { Link } from "react-router-dom";

type NavButtonProps = {
  buttonText: string;
  href: string;
  onClick?: () => void;
  className?: string;
};


function NavButton({ buttonText, href, onClick, className }: NavButtonProps) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`text-black text-medium font-semibold transition ${className ?? ""}`}
      >
        {buttonText}
      </Link>
  );
}

export default NavButton;