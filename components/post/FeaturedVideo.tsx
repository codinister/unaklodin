'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { useEffect, useState } from 'react';
import PostYoutube2 from './PostYoutube2';

const FeaturedVideo = () => {
  const heroData = useGetQuery('hero', '/hero') || [];


  return (
    <PostYoutube2
      url={heroData[0] ? heroData[0]?.link : ''}
    />
  );
};

export default FeaturedVideo;
