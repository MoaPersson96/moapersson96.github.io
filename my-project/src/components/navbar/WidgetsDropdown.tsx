//Moa

export function WidgetsDropdown() {
    return (
        <div className="
            bg-black
            text-white
            py-16
            shadow-2xl
            ">
            
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-16 px-10">
                <div>
                    <h3 className="font-semibold mb-4">Widgets</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>Hero</li>
                        <li>Puffar</li>
                        <li>Text</li>
                        <li>Text och bild</li>
                        <li>Call to action</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WidgetsDropdown;