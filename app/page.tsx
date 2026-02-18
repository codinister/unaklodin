'use client';

import Banners from '@/components/Banners';
import Blog from '@/components/Blog';
import Featured from '@/components/Featured';
import Hero from '@/components/Hero';
import MainCategories from '@/components/MainCategories';


export default function Home() {
  return (
    <div>
      <Hero />
      <MainCategories />
      <Featured />
      <Banners />
      <Blog />
    </div>
  );
}
