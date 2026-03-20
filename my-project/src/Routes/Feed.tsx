import "../App.css";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import HeroFeed from "../components/HeroFeed";
import { FeedPuffGrid } from '../patterns/FeedPuffGrid';
import { posts } from "../data/posts";

function Feed() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-[1920px] max-auto w-full">
        {/* <Header /> */}
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
              items={posts.map(post => ({
                  slug: post.slug,
                  image: post.image,
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
              }))} />

          </div>

          {/* <Footer role="contentinfo" aria-label="Sidfot" /> */}
        </main>
      </div>
    </div>
  );
}

export default Feed;
