import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroFeed from "../components/HeroFeed";
import { FeedPuffGrid } from '../patterns/FeedPuffGrid';

function Feed() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-[1920px] max-auto w-full">
        <Header />
        <HeroFeed
          smallHeaderText="Feed"
          headerText="For all your listings needs"
          text="If you want to list recent blogposts, company news or other events"
          navButtonText="Till Feed"
          navDestination="widgets"
          imgLink="./images/norrskenl.png"
        />

        <main className="grow flex flex-col items-center justify-center text-center" role="main">

          <div className="grow flex flex-col items-center" role="main">
            <FeedPuffGrid
              items={[
                {
                  image: "/images/Yellow.png",
                  title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
                  date: "Mars 9, 2026",
                  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur bibendum. Sed at felis ac nisl efficitur commodo."
                },
                {
                  image: "/images/Deer.png",
                  title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
                  date: "Januari 29, 2025",
                  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur bibendum. Sed at felis ac nisl efficitur commodo."
                },
                {
                  image: "/images/Redhouse.png",
                  title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
                  date: "April 20, 2025",
                  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur bibendum. Sed at felis ac nisl efficitur commodo."
                },
                {
                  image: "/images/Stan.png",
                  title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
                  date: "Augusti 10, 2025",
                  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur bibendum. Sed at felis ac nisl efficitur commodo."
                },
                {
                  image: "/images/BridgeNorthernlights.png",
                  title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
                  date: "September 15, 2025",
                  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur bibendum. Sed at felis ac nisl efficitur commodo."
                },
                {
                  image: "/images/Lakewood.png",
                  title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
                  date: "November 25, 2025",
                  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur bibendum. Sed at felis ac nisl efficitur commodo."
                },
                {
                  image: "/images/Snowcoveredtrees.png",
                  title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
                  date: "December 1, 2025",
                  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur bibendum. Sed at felis ac nisl efficitur commodo."
                },
              ]}
            />

          </div>

          <Footer role="contentinfo" aria-label="Sidfot" />
        </main>
      </div>
    </div>
  );
}

export default Feed;
