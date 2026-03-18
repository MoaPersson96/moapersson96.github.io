import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import { FeedPuffGrid } from '../patterns/FeedPuffGrid';

function Feed() {

  return (
    <div className="min-h-screen flex flex-col">
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

          <div className="grow flex flex-col items-center" role="main">
            <FeedPuffGrid />
          </div>

          <Footer role="contentinfo" aria-label="Sidfot" />
        </main>
      </div>
    </div>
  );
}

export default Feed;
