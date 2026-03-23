'use client';

import AboutWidget from '@/components/post/AboutWidget';
import BannersWidget from '@/components/post/BannersWidget';
import FeaturedVideo from '@/components/post/FeaturedVideo';
import MenWidget from '@/components/post/MenWidget';
import PostHero from '@/components/post/PostHero';
import Posts from '@/components/post/Posts';
import PostSidebar from '@/components/post/PostSidebar';

const Blog = () => {
  return (
    <div className="cont">
      <div className="mb-6 mt-10">
        <PostHero />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 flex-5">
          <Posts />
        </div>

        <div className="flex-3 bg-muted">
          <PostSidebar />
        </div>
      </div>
    </div>
  );
};

export default Blog;
