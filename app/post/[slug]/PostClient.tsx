'use client';

import PostContent from '@/components/post/PostContent';
import PostSidebar from '@/components/post/PostSidebar';

const PostClient = ({ slug }: { slug: string }) => {
  return (
    <div className="cont">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 flex-6">
          <PostContent slug={slug} />
        </div>
        <div className="flex-3 bg-muted">
          <PostSidebar />
        </div>
      </div>
    </div>
  );
};

export default PostClient;
