'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { useState } from 'react';
import PostYoutube from './PostYoutube';

const PostContent = () => {
  const param = useParams();

  const data = useGetQuery('singlepost', `/single-post/${param.id}`) || [];

  return (
    <>
      <div className="py-10">
        <h5 className="mb-10 font-bold">{data[0]?.title}</h5>
        <div className="mb-6">
          {data[0] ? (
            <Image src={data[0]?.thumb} alt="" width={1000} height={1500} />
          ) : (
            ''
          )}
        </div>
        <div>
          {data[0]?.content.map((v: any, k: number) => (
            <div className="mb-6" key={k}>
              <PortableText value={v.body ? v.body : ''} />
            </div>
          ))}
        </div>

        <div className="mb-6">
          {data[0]?.gallery
            ? data[0]?.gallery.map((v: string, k: number) => (
                <div className="mb-6" key={k}>
                  {data[0] ? (
                    <Image src={v} alt="" width={1000} height={1500} />
                  ) : (
                    ''
                  )}
                </div>
              ))
            : ''}
        </div>
        <div>
          {data[0]?.youtube
            ? data[0]?.youtube.map((v: string, k: number) => (
                <div key={k} className="mb-6">
                  <PostYoutube width="100%" height="400" url={v} />
                </div>
              ))
            : ''}
        </div>
      </div>
    </>
  );
};

export default PostContent;
