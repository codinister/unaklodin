'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Youtubebox from './Youtubebox';
import { Button } from './ui/button';

const Hero = () => {
  const heroData = useGetQuery('hero', '/hero') || [];

  return (
    <div className="relative">
      <Youtubebox
        width="100%"
        height="400"
        url={heroData[0] ? heroData[0]?.link : ''}
      />

      <div className="absolute left-6 sm:left-15 bottom-6 sm:bottom-15 text-white  py-10 w-70">
        <h5 className="font-extrabold">In Our Element, In Any Element</h5>
        <p className=" mb-4">
          Effortless styles destined for the unpredictable
        </p>
        <Button size="lg">Shop Now</Button>
      </div>
    </div>
  );
};

export default Hero;
