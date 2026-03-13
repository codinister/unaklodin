'use client';

import PageHeader from '@/components/PageHeader';
import useGetQuery from '@/state/query/useGetQuery';
import { PortableText } from '@portabletext/react';

const About = () => {
  const about = useGetQuery('about', '/about') || [];

  return (
    <div>
      <PageHeader title="About Us" />

      <div className="flex flex-col sm:flex-row">
        <div
          className="h-100 flex-1 p-50 sm:p-10"
          style={{
            backgroundImage: `url(${about[1]?.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
        <div className="flex-1 flex items-center p-10">
          <div>
            <h6 className="mb-6">{about[1]?.title}</h6>

            <PortableText value={about[1]?.body} />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="flex-1 order-2 sm:order-1 flex items-center p-10 ">
          <div>
            <h6 className="mb-6">{about[0]?.title}</h6>
            <PortableText value={about[0]?.body} />
          </div>
        </div>
        <div
          className="order-1 sm:order-2  h-100 flex-1 p-50 sm:p-10"
          style={{
            backgroundImage: `url(${about[0]?.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
