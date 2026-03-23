import { Metadata } from 'next';
import PostClient from './PostClient';
import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';


async function getPost(id: string) {
  return await serverConfig.fetch(groq`
    *[_type == 'post' && _id == $id][0]{
      title,
      'thumb': thumb.asset->url,
      'excerpt': array::join(
        string::split((pt::text(cards[0].body)), '')[0..150],
        ''
      ) + '...'
    }
  `, { id });
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
const id = (await params).id
  const post = await getPost(id);

  if (!post) return { title: 'Post not found' };

  return {
    title: post.title,
    description: post.excerpt,

    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.thumb + '?w=1200&h=630&fit=crop',
          width: 1200,
          height: 630,
        },
      ],
      type: 'article',
    },

    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.thumb],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  return <PostClient id={id} />;
}