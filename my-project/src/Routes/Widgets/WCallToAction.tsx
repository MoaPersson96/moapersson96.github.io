import ImageCTA from "../../components/cta/ImageCTA";

function WCTA() {
    return (
        <main className="grow w-full" role="main">
            {/* INNEHÅLL HÄR */}

            <div className="px-4 mt-5">
                <ImageCTA
                    title="Lorem ipsum dolor sit"
                    description="Quisque faucibus ex sapien vitae pellentesque sem placerat."
                    buttonText="Läs mer!"
                    image="/images/LTUNatt.png"
                    href="#"
                />
            </div>

        </main>
    );
}

export default WCTA;
