'use client';

import AboutWidget from '@/components/post/AboutWidget';
import BannersWidget from '@/components/post/BannersWidget';
import FeaturedVideo from '@/components/post/FeaturedVideo';
import MenWidget from '@/components/post/MenWidget';
import PostContent from '@/components/post/PostContent';

const Post = () => {
  return (
    <div className="cont">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 flex-6">
          <PostContent />
        </div>
        <div className="flex-3 bg-muted">
          <AboutWidget />
          <FeaturedVideo />

          <MenWidget />
          <BannersWidget />
          <iframe
            src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25663282"
            width="100%"
            height="500px"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Post;
