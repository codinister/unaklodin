'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Modal from '../modal/Modal';
import { useState } from 'react';
import PostYoutube from './PostYoutube';

const PostContent = () => {
  const param = useParams();

  const data = useGetQuery('singlepost', `/single-post/${param.id}`) || [];

  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState('');

  const handleClick = (val: string) => {
    setShowModal(true);
    setImg(val);
  };

  return (
    <>
      <div className="py-10">
        <h5>{data[0]?.title}</h5>
        <div className="my-15">
          {data[0] ? (
            <Image
              className="rounded-xl"
              src={data[0]?.thumb}
              alt=""
              width={1000}
              height={1500}
            />
          ) : (
            ''
          )}
        </div>
        <div>
          {data[0]?.content.map((v: any, k: number) => (
            <div className="mb-10" key={k}>
              <PortableText value={v.body ? v.body : ''} />
            </div>
          ))}
        </div>

        <div className="flex gap-10 flex-wrap flex-col sm:flex-row my-15">
          {data[0]?.gallery ? data[0]?.gallery.map((v: string, k: number) => (
            <div
              className="h-60 cursor-pointer basis-82 rounded-xl"
              style={{
                backgroundImage: `url(${v})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
              onClick={() => handleClick(v)}
              key={k}
            ></div>
          )): ''}
        </div>
        <div>
          {data[0]?.youtube ? data[0]?.youtube.map((v: string, k: number) => (
            <div key={k} className="mb-10">
              <PostYoutube width="100%" height="400" url={v} />
            </div>
          )): ''}
        </div>
      </div>
      <Modal img={img} showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default PostContent;
