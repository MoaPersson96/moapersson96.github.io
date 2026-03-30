import TextBlocklist from "../../components/text/TextBlockLista";
import ImageTextPuff from "../../components/puff/ImageTextPuff";

function WText() {
    return (
        <main className="w-full flex justify-center" role="main">
            {/* INNEHÅLL HÄR */}
            <div className="w-full max-w-4xl px-4 md:px-0 flex flex-col gap-10 mb-15 mt-15">

                <TextBlocklist
                    items={[
                        { title: "Lorem ipsum dolor sit amet", href: "#" },
                        { title: "Consectetur adipiscing elit", href: "#" },
                        { title: "Quisque faucibus ex sapien", href: "#" },
                        { title: "Pellentesque sem placerat", href: "#" },
                    ]}
                />

                {/* Image Text Puff */}
                <ImageTextPuff
                    label="Lorem ipsum"
                    title="Lorem ipsum dolor sit amet"
                    description="Consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus."
                    image="/images/LuleåCity.png"
                    href="#"
                />

            </div>

        </main>
    );
}

export default WText;