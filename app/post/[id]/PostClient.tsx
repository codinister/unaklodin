'use client';

import AboutWidget from '@/components/post/AboutWidget';
import BannersWidget from '@/components/post/BannersWidget';
import FeaturedVideo from '@/components/post/FeaturedVideo';
import MenWidget from '@/components/post/MenWidget';
import PostContent from '@/components/post/PostContent';
import PostSidebar from '@/components/post/PostSidebar';

const PostClient = ({ id }: { id: string }) => {
  return (
    <div className="cont">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 flex-6">
          <PostContent id={id} />
        </div>
        <div className="flex-3 bg-muted">
          <PostSidebar />
        </div>
      </div>
    </div>
  );
};

export default PostClient;
