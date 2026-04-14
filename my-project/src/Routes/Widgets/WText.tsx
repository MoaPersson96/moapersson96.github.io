import TextBox from "../../components/TextBox";
import TextBlocklist from "../../components/text/TextBlockLista";
import ImageTextPuff from "../../components/puff/ImageTextPuff";

function WText() {
  return (
    <main className="grow flex flex-col items-center justify-center text-center" role="main">

      <div className="mt-10">
        <TextBox
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
          background={false}
        />
      </div>

            <div className="mt-10">
        <TextBox
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
          background={true}
        />
      </div>

      {/* List + Puff section */}
      <div className="w-full max-w-3xl px-4 md:px-0 flex flex-col gap-10">
        
        <div className="mt-15 mb-3">
          <TextBlocklist
            items={[
              { title: "Lorem ipsum dolor sit amet", href: "#" },
              { title: "Consectetur adipiscing elit", href: "#" },
              { title: "Quisque faucibus ex sapien", href: "#" },
              { title: "Pellentesque sem placerat", href: "#" },
            ]}
          />
        </div>

        <div className="mb-15">
          <ImageTextPuff
            label="Lorem ipsum"
            title="Lorem ipsum dolor sit amet"
            description="Consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus."
            image="/images/LuleåCity.webp"
            href="#"
          />
        </div>

      </div>
    </main>
  );
}

export default WText;