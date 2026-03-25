import { WidePuffGrid } from "../../patterns/WidePuffGrid";
import { ColoredPuffGrid } from "../../patterns/ColoredPuffGrid";
import { ImagePuffGrid } from "../../patterns/ImagePuffGrid";



function WPuffar() {
  return (
    <main className="grow flex flex-col items-center justify-center text-center" role="main">

      {/* Black and white puff */}
      <div className="w-full px-4 mb-10">
        <WidePuffGrid
          items={[
            { title: "Lorem Ipsum", href: "#", position: "left" },
            { title: "Lorem Ipsum", href: "#", inverted: true, position: "middle" },
            { title: "Lorem Ipsum", href: "#", position: "right" },
          ]}
        />
      </div>

      {/* Colored puffs */}
      <div className="w-full max-w-[1920px] mx-auto px-4 mb-10">
        <ColoredPuffGrid
          items={[
            { title: "Lorem ipsum dolor sit amet.", label: "Lorem", href: "#", arrowBackgroundColor: "#721904" },
            { title: "Lorem ipsum dolor sit amet.", label: "Lorem", href: "#", arrowBackgroundColor: "#7B932E" },
            { title: "Lorem ipsum dolor sit amet.", label: "Lorem", href: "#", arrowBackgroundColor: "#C1A016" },
            { title: "Lorem ipsum dolor sit amet.", label: "Lorem", href: "#", arrowBackgroundColor: "#455B81" },
          ]}
        />
      </div>

      {/* Image Puff */}
      <div className="w-full max-w-[1920px] mx-auto px-4">
        <ImagePuffGrid
          items={[
            { label: "Lorem", title: "Lorem ipsum dolor sit amet", image: "/images/Bergnasbron.png", href: "#" },
            { label: "Lorem", title: "Lorem ipsum dolor sit amet", image: "/images/Norrsken.png", href: "#" },
            { label: "Lorem", title: "Lorem ipsum dolor sit amet", image: "/images/Kyrkbyn.png", href: "#" },
          ]}
        />
      </div>

    </main>
  );
}

export default WPuffar;