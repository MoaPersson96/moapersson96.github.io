import { WidePuffGrid } from "../../patterns/WidePuffGrid";
import { ColoredPuffGrid } from "../../patterns/ColoredPuffGrid";
import { ImagePuffGrid } from "../../patterns/ImagePuffGrid";
import HoverPuffGrid from "../../patterns/HoverPuffGrid";
import CornerPuffGrid from '../../patterns/CornerPuffGrid';



function WPuffar() {
  return (
    <main className="grow flex flex-col items-center justify-center text-center" role="main">

      {/* Black and white puff */}
      <div className="w-full px-4 mt-15">
        <WidePuffGrid
          items={[
            { title: "Lorem Ipsum", href: "#", position: "left" },
            { title: "Lorem Ipsum", href: "#", inverted: true, position: "middle" },
            { title: "Lorem Ipsum", href: "#", position: "right" },
          ]}
        />
      </div>

      {/* Colored puffs */}
      <div className="w-full max-w-[1920px] mx-auto px-4 mt-15">
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
      <div className="w-full max-w-[1920px] mx-auto px-4 mt-15">
        <ImagePuffGrid
          items={[
            { label: "Lorem", title: "Lorem ipsum dolor sit amet", image: "/images/Bergnasbron.png", href: "#" },
            { label: "Lorem", title: "Lorem ipsum dolor sit amet", image: "/images/Norrsken.png", href: "#" },
            { label: "Lorem", title: "Lorem ipsum dolor sit amet", image: "/images/Kyrkbyn.png", href: "#" },
          ]}
        />
      </div>

      {/* Hover Puff */}
      <div className="w-full max-w-[1920px] mx-auto px-4 mt-15">
        <HoverPuffGrid
          items={[
            {
              title: "Lorem ipsum dolor sit amet.",
              excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus.",
              image: "/images/LuleIsbana.png"
            },
            {
              title: "Lorem ipsum dolor sit amet.",
              excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus.",
              image: "/images/LuleåKran.png"
            },
            {
              title: "Lorem ipsum dolor sit amet.",
              excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus.",
              image: "/images/LKyrkbyn.png"
            }
          ]}
        />
      </div>

      {/* Image puff with arrow */}
      <div className="w-full max-w-[1920px] mx-auto px-4 mt-15 mb-10">
        <CornerPuffGrid
          items={[
            {
              title: "Lorem ipsum dolor sit.",
              subtitle: "Lorem ipsum",
              image: "/images/IsbanaL.png"
            },
            {
              title: "Lorem ipsum dolor sit.",
              subtitle: "Lorem ipsum",
              image: "/images/LuleåSommar.png"
            },
            {
              title: "Lorem ipsum dolor sit.",
              subtitle: "Lorem ipsum",
              image: "/images/LuleåNorra.png"
            }
          ]}
        />
      </div>

    </main>
  );
}

export default WPuffar;