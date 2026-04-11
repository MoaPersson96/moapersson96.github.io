//Moa

import { Link } from "react-router-dom";

export function WidgetsDropdown() {
    return (
        <div className="
            bg-black
            text-white
            py-6 md:py-16
            shadow-2xl
            w-full
        ">
            
            <div className="
                max-w-7xl mx-auto 
                grid grid-cols-1 md:grid-cols-4 
                gap-6 md:gap-16 
                px-6 md:px-10
            ">
                <div>
                    <h3 className="font-semibold mb-4">Widgets</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <Link to="/widgets/hero" className="hover:text-white hover:underline block">
                                Hero
                            </Link>
                        </li>
                        <li>
                            <Link to="/widgets/puffar" className="hover:text-white hover:underline block">
                                Puffar
                            </Link>
                        </li>
                        <li>
                            <Link to="/widgets/text" className="hover:text-white hover:underline block">
                                Text
                            </Link>
                        </li>
                        <li>
                            <Link to="/widgets/text-och-bild" className="hover:text-white hover:underline block">
                                Text och bild
                            </Link>
                        </li>
                        <li>
                            <Link to="/widgets/call-to-action" className="hover:text-white hover:underline block">
                                Call to action
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WidgetsDropdown;