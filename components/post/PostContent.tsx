'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import PostYoutube from './PostYoutube';
import ShareButtons from './ShareButtons';
import { usePathname } from 'next/navigation';

const PostContent = ({ id }: { id: string }) => {

const path = usePathname()

const url = 'https://unaklodin.com'+path
console.log(url)

  const data = useGetQuery(
    'singlepost',
    `/single-post/${id}`
  ) 

  const post = data?.[0];


  if (!post) return <p>No post found</p>;

  return (
    <div className="py-10">
      <h5 className="mb-10 font-bold">{post.title}</h5>

      <div className="mb-6">
        <Image src={post.thumb} alt={post.title} width={1000} height={1500} />

   
       <ShareButtons url={url} title={post.title} excerpt={post.excerpt} />    </div>

      <div>
        {post.content?.map((v: any, k: number) => (
          <div className="mb-6" key={k}>
            <PortableText value={v.body} />
          </div>
        ))}
      </div>

      <div className="mb-6 mt-6">
        {post.gallery?.map((img: string, k: number) => (
          <div className="mb-6" key={k}>
            <Image src={img} alt="" width={1000} height={1500} />
          </div>
        ))}
      </div>

      <div>
        {post.youtube?.map((url: string, k: number) => (
          <div key={k} className="mb-6">
            <PostYoutube url={url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContent;