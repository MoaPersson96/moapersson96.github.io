import TextBox from "../../components/TextBox";
import TextBlocklist from "../../components/text/TextBlockLista";
import ImageTextPuff from "../../components/puff/ImageTextPuff";

function WText() {
    return (
        <main className="grow flex flex-col items-center justify-center" role="main">
            <div className="w-full max-w-3xl px-4 md:px-0 flex flex-col gap-3">

                {/* Text Box */}
                <div className="mt-10">
                    <TextBox
                        title="Lorem ipsum"
                        text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
                        In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                        Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
                        Ad litora torquent per conubia nostra inceptos himenaeos."
                        background={false}
                    />   
                </div>

                {/* Link Block */}
                <div className="mb-3">
                    <TextBlocklist
                        items={[
                            { title: "Lorem ipsum dolor sit amet", href: "#" },
                            { title: "Consectetur adipiscing elit", href: "#" },
                            { title: "Quisque faucibus ex sapien", href: "#" },
                            { title: "Pellentesque sem placerat", href: "#" },
                        ]}
                    />
                </div>

                {/* Text Box with background */}
                <div className="mb-3">
                    <TextBox
                        title="Text widget"
                        text="
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id.
                        Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus.
                        Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora.
                        Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus.
                        Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.
                        "
                        background={true}
                    />
                </div>

                {/* Image Text Puff */}
                <div className="mb-15">
                    <ImageTextPuff
                        label="Lorem ipsum"
                        title="Lorem ipsum dolor sit amet"
                        description="Consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus."
                        image="/images/LuleåCity.png"
                        href="#"
                    />
                </div>
            </div>
        </main>
    );
}

export default WText;