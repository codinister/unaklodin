'use client';

import AboutWidget from '@/components/post/AboutWidget';
import BannersWidget from '@/components/post/BannersWidget';
import MenWidget from '@/components/post/MenWidget';
import PostHero from '@/components/post/PostHero';
import Posts from '@/components/post/Posts';

const Blog = () => {
  return (
    <div className="cont">
      <div className=" py-10">
        <PostHero />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 flex-wrap">



        <div className="flex flex-col sm:flex-row flex-wrap gap-4 flex-5">
          <Posts />
        </div>


        
        <div className="flex-3 bg-muted">
          <iframe
            src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25663282"
            width="100%"
            height="500px"
          ></iframe>
          <AboutWidget />
          <MenWidget />
          <BannersWidget />
        </div>
      </div>
    </div>
  );
};

export default Blog
