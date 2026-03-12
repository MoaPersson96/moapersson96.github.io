import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Hero1 from "./components/Hero1";
import Hero2 from "../components/Hero2";
import { ColoredPuffGrid } from "../patterns/ColoredPuffGrid";
import { ImagePuffGrid } from "../patterns/ImagePuffGrid";
import { WidePuffGrid } from "../patterns/WidePuffGrid";
import { CallToAction1 } from "../components/CallToAction1";

function App() {
  const handleCTAButtonClick = () => {
    alert("CTA button clicked!");
  };

  return (
    <body className="min-h-screen flex flex-col">
      <div className="max-w-[1920px] max-auto w-full">
        <Header />
        <Hero2
          date="2020-12-22"
          smallHeaderText="Case Stories"
          headerText="Campus Skellefteå säkerställer framtidens kunskapsbehov"
          text="Hella Skellefteå vibrerar. Nya Miljardetableringar med batteritillverkaren Northvolt i spetsen får positiva effekter för näringslivet och det arbetas intensivt för att lösa alltifrån bostadsbehov till rekryteringsfrågor. Mitt i allt detta finns Campus Skellefteå, som får en nyckelroll för att möjliggöra utvecklingen. - Den industri som växer fram här är inte bara ny i Sverige utan hela Europa, vilket självklart påverkar kraven på både forskning och kompetensomvandling, säger Ida Lindh, strategiskt ansvarig på Campus"
          navButtonText="Till Case Stories"
          navDestination="widgets"
          imgLink="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/230000/230134-Skelleftea.jpg"
          // videoUrl="https://www.youtube.com/watch?v=F5gFwiFIViQ"
        />

        <main className="grow flex flex-col items-center justify-center text-center" role="main">

          {/* Black and white puff */}
          <div className="w-full mt-10 mb-10 px-4">
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

          {/* Colored puffs */}
          <div className="mt-8 w-full max-w-[1920px] mx-auto px-4">
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

          <div className="w-full max-w-[1920px] mx-auto px-4 mt-16 mb-16">
            <ImagePuffGrid
              items={[
                {
                  label: "Lorem",
                  title: "Lorem ipsum dolor sit amet",
                  image: "/images/Bergnasbron.png",
                  href: "#",
                },
                {
                  label: "Lorem",
                  title: "Lorem ipsum dolor sit amet",
                  image: "/images/Norrsken.png",
                  href: "#",
                },
                {
                  label: "Lorem",
                  title: "Lorem ipsum dolor sit amet",
                  image: "/images/Kyrkbyn.png",
                  href: "#",
                },
              ]}
            />
          </div>

          <CallToAction1
            title="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus."
            buttonText="Läs mer"
            buttonAction={handleCTAButtonClick}
          />

          <Footer role="contentinfo" aria-label="Sidfot" />
        </main>
      </div>
    </body>
  );
}

export default App;
