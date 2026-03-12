import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero1 from "../components/Hero1";

function App() {
  const handleCTAButtonClick = () => {
    alert("CTA button clicked!");
  };

  return (
    <body className="min-h-screen flex flex-col">
      <div className="max-w-[1920px] max-auto w-full">
        <Header />
        <Hero1
        text = "Vi hjälper er att både etablera och utveckla er verksamhet i Skellefteåområdet"
        navButtonText="Läs mer"
        navDestination="feed"
        videoUrl="https://www.youtube.com/watch?v=TviBukuxiDw"
        imgLink="https://stadsbyggnad.org/wp-content/uploads/sites/2/2022/05/skelleftea-880-700x466.jpg"
        />

        <main className="grow flex flex-col items-center justify-center text-center" role="main">

          

          <Footer role="contentinfo" aria-label="Sidfot" />
        </main>
      </div>
    </body>
  );
}

export default App;
