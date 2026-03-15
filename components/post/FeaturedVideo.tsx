'use client';

import useGetQuery from '@/state/query/useGetQuery';
import PostYoutube from './PostYoutube';

const FeaturedVideo = () => {
  const heroData = useGetQuery('hero', '/hero') || [];

  return (
    <PostYoutube
      width="100%"
      height="300"
      url={heroData[0] ? heroData[0]?.link : ''}
    />
  );
};

export default FeaturedVideo;
