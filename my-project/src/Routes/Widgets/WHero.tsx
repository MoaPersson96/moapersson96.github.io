import Hero4 from "../../components/Hero4.tsx";
import Hero3 from "../../components/Hero3.tsx";
import Hero1 from "../../components/Hero1.tsx";
import cliffVideo from "../../assets/videos/cliff-22619.mp4";

function WHero() {
    return (
        <main className="grow flex flex-col items-center justify-center text-center" role="main">
            <Hero4
                headerText="Video content"
                text="Use a video instead of a regular image as a background for a hero."
                videoSource={cliffVideo}
            />
            <Hero3
                headerText="Hållbar digital utveckling"
                text="Här hittar du inspirerande berättelser som gör livet med digitalisering enklare, arbetsdagen tryggare - och livet för många olika invånare i samhället mer meningsfullt."
                imgLink="https://skelleftea.se/images/200.431c8a0f18c629e2b3832ad/1702909819786/(2)%20PD_220502_3643-Redigera.webp"
            />
            <Hero1
          text = "Vi hjälper er att både etablera och utveckla er verksamhet i Skellefteåområdet"
          navButtonText="Läs mer"
          navDestination="feed"
          videoUrl="https://www.youtube.com/watch?v=TviBukuxiDw"
          imgLink="https://stadsbyggnad.org/wp-content/uploads/sites/2/2022/05/skelleftea-880-700x466.jpg"
          />
        </main>

    );
}

export default WHero;