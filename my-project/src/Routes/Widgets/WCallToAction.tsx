import ImageCTA from "../../components/cta/ImageCTA";

function WCTA() {
    return (
        <main className="grow w-full" role="main">
            {/* INNEHÅLL HÄR */}

            <div className="px-4 mt-5">
                <ImageCTA
                    title="Köra bil i Sverige?"
                    description="Tempus leo eu aenean sed diam urna tempor."
                    buttonText="Läs mer!"
                    image="/images/LTUNatt.png"
                    href="#"
                />
            </div>

        </main>
    );
}

export default WCTA;
