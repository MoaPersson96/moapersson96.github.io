import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Hero1 from "./components/Hero1";

import { ColoredPuffGrid } from "./patterns/ColoredPuffGrid";
import { ImagePuffGrid } from "./patterns/ImagePuffGrid";
import { WidePuffGrid } from "./patterns/WidePuffGrid";
import CallToAction1 from "./components/CallToAction1";

function App() {
  const handleCTAButtonClick = () => {
    alert("CTA button clicked!");
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* <Header /> */}
      <div className="max-w-[1920px] mx-auto w-full">

        <div className="px-4">
          <Hero1
          text = "Vi hjälper er att både etablera och utveckla er verksamhet i Skellefteåområdet"
          navButtonText="Läs mer"
          navDestination="feed"
          videoUrl="https://www.youtube.com/watch?v=TviBukuxiDw"
          imgLink="https://stadsbyggnad.org/wp-content/uploads/sites/2/2022/05/skelleftea-880-700x466.jpg"
          />
        </div>

        <main className="grow flex flex-col items-center justify-center text-center" role="main">

          {/* Black and white puff */}
          <div className="w-full mt-0 px-4">
            <WidePuffGrid
              items={[
                {
                  title: "Lorem Ipsum",
                  href: "#",
                  position: "left",
                },
                {
                  title: "Lorem Ipsum",
                  href: "#",
                  inverted: true,
                  position: "middle",
                },
                {
                  title: "Lorem Ipsum",
                  href: "#",
                  position: "right",
                },
              ]}
            />
          </div>

          <div className="mt-5 w-full max-w-[1920px] mx-auto px-4">
            <CallToAction1
              title="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus."
              buttonText="Läs mer"
              buttonAction={handleCTAButtonClick}
              href={"#"}
            />
          </div>


          {/* Colored puffs */}
          <div className="mt-5 w-full max-w-[1920px] mx-auto px-4">
            <ColoredPuffGrid
              items={[
                {
                  title: "Lorem ipsum dolor sit amet.",
                  label: "Lorem",
                  href: "#",
                  arrowBackgroundColor: "#721904",
                },
                {
                  title: "Lorem ipsum dolor sit amet.",
                  label: "Lorem",
                  href: "#",
                  arrowBackgroundColor: "#7B932E",
                },
                {
                  title: "Lorem ipsum dolor sit amet.",
                  label: "Lorem",
                  href: "#",
                  arrowBackgroundColor: "#C1A016",
                },
                {
                  title: "Lorem ipsum dolor sit amet.",
                  label: "Lorem",
                  href: "#",
                  arrowBackgroundColor: "#455B81",
                }
              ]}
            />
          </div>

          {/* Image Puff */}

          <div className="w-full max-w-[1920px] mx-auto px-4 mt-5 mb-5">
            <ImagePuffGrid
              items={[
                {
                  label: "Lorem",
                  title: "Lorem ipsum dolor sit amet",
                  image: "/images/Bergnasbron.webp",
                  href: "#",
                },
                {
                  label: "Lorem",
                  title: "Lorem ipsum dolor sit amet",
                  image: "/images/Norrsken.webp",
                  href: "#",
                },
                {
                  label: "Lorem",
                  title: "Lorem ipsum dolor sit amet",
                  image: "/images/Kyrkbyn.webp",
                  href: "#",
                },
              ]}
            />
          </div>

          {/* <Footer role="contentinfo" aria-label="Sidfot" /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
