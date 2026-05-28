'use client';

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
        <div className="basis-[65%]">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Posts />
          </div>
        </div>

        <div className="basis-[30%] bg-muted">
          <PostSidebar />
        </div>
      </div>
    </div>
  );
};

export default Blog;
