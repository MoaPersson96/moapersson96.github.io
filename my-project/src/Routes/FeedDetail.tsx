import { useParams } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import { FeedPuffGrid } from '../patterns/FeedPuffGrid';
import { posts } from "../data/posts";


function FeedDetail() {
  const { slug } = useParams();

  if (!slug) return <div>Laddar...</div>;
    
  const post = posts.find(p => p.slug === String(slug));


  if (!post) return <div>Kunde inte hitta inlägget</div>;

  const relatedPosts = posts.filter(p => p.slug !== String(slug)).slice(0, 3);

  return (
    <div className="w-full">

    {/* 📰 ARTIKEL */}
      <main className="max-w-[800px] mx-auto px-6 py-12">

        <p className="uppercase text-black tracking-widest text-center text-sm mb-4">
          NYHETER
        </p>

        <h1 className="text-3xl text-black md:text-4xl font-bold mb-6 text-center">
          {post.title}
        </h1>

        <p className="text-sm text-gray-800 font-bold italic mb-8 text-center">
          {post.date}
        </p>

        <p className="text-lg text-gray-700 mb-10 text-center">
          {post.excerpt}
        </p>
        
        <div className="w-full max-h-[1100px] mx-auto my-8">
          <img
            src={post.image}
            className="w-full h-full object-cover"
          />
        </div>


        <p className="text-xl text-black leading-relaxed mb-6 mt-15 text-center">
          {post.content}
        </p>


      </main>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 my-16" />

      {/* PUFFAR (full bredd!) */}
      <div className="w-full">
        <FeedPuffGrid 
          items={relatedPosts.map(post => ({
            slug: post.slug,
            image: post.image,
            title: post.title,
            date: post.date,
            excerpt: post.excerpt
          }))} 
        />
      </div>

    </div>
);

}

export default FeedDetail;